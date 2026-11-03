#!/usr/bin/env node
// worldcells のブラウザデモを本体の最新版で作り直し、site/ に置く。
//
// 使い方：
//   node scripts/update-demo.mjs [本体リポジトリのパス]
//   本体の場所は 引数 → 環境変数 WORLDCELLS_DIR → 隣のフォルダ ../worldcells の順に探す。
//
// 行うこと：
//   1. 本体の web/ で npm install と npm run build を実行する
//   2. site/ を作り直し、web/dist/ の中身をコピーする
//   3. 本体ルートの THIRD-PARTY-LICENSES.md を site/ へコピーする（無ければエラーで止める）
//   4. site/build-info.json を書き出す
//   5. 結果（コピーしたファイル数、site/ の合計サイズ）を表示する
//
// 本体のファイルは変更しない（web/node_modules と web/dist は本体側で .gitignore 済みのビルド用フォルダ）。

import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** ビルド手順の版。手順を変えたら上げる。 */
const BUILD_PROCEDURE_VERSION = '1';

const demoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = join(demoRoot, 'site');

function fail(message) {
  console.error(`\n[失敗] ${message}`);
  process.exit(1);
}

function run(command, args, cwd) {
  console.log(`\n> ${command} ${args.join(' ')}   (${cwd})`);
  // Windows では npm が npm.cmd なので shell を通す（引数はこのスクリプト内の固定の文字列だけ）
  const r =
    process.platform === 'win32'
      ? spawnSync([command, ...args].join(' '), { cwd, stdio: 'inherit', shell: true })
      : spawnSync(command, args, { cwd, stdio: 'inherit' });
  if (r.error) fail(`${command} を実行できませんでした：${r.error.message}`);
  if (r.status !== 0) fail(`${command} ${args.join(' ')} が終了コード ${r.status} で失敗しました。`);
}

function listFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p));
    else out.push(p);
  }
  return out;
}

// fs.rmSync と fs.cpSync は使わない。Node 24 の Windows 版では、日本語を含むパス（例：D:\workspace\Map作成\…）で
// rmSync がプロセスごと異常終了する（0xC0000409）ことを確認したため、削除とコピーを自前で行う。

/** フォルダを中身ごと消す（無ければ何もしない）。 */
function removeTree(p) {
  if (!existsSync(p)) return;
  if (!statSync(p).isDirectory()) return unlinkSync(p);
  for (const entry of readdirSync(p)) removeTree(join(p, entry));
  rmdirSync(p);
}

/** フォルダの中身を別のフォルダへコピーする。 */
function copyTree(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const src = join(from, entry.name);
    const dst = join(to, entry.name);
    if (entry.isDirectory()) copyTree(src, dst);
    else copyFileSync(src, dst);
  }
}

function formatBytes(n) {
  return n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KiB` : `${(n / 1024 / 1024).toFixed(2)} MiB`;
}

// 1. 本体の場所
const sourceArg = process.argv[2] || process.env.WORLDCELLS_DIR || join(demoRoot, '..', 'worldcells');
const sourceDir = resolve(sourceArg);
const webDir = join(sourceDir, 'web');
const webPackageJson = join(webDir, 'package.json');
if (!existsSync(webPackageJson))
  fail(`本体リポジトリが見つかりません：${sourceDir}\n  引数か環境変数 WORLDCELLS_DIR で本体のフォルダを指定してください（web/package.json があるフォルダの親）。`);
const licenseSrc = join(sourceDir, 'THIRD-PARTY-LICENSES.md');
if (!existsSync(licenseSrc))
  fail(`本体に THIRD-PARTY-LICENSES.md がありません：${licenseSrc}\n  three.js のライセンス表示が必要なため、ここで止めます。`);
console.log(`本体：${sourceDir}`);

// 2. ビルド（古い dist が残っていると vite build が止まることがあるので先に消す）
// npm install はロックファイルを書き換えることがあるので、本体を変えない npm ci を使う
run('npm', ['ci', '--no-audit', '--no-fund'], webDir);
removeTree(join(webDir, 'dist'));
run('npm', ['run', 'build'], webDir);
const distDir = join(webDir, 'dist');
if (!existsSync(join(distDir, 'index.html'))) fail(`ビルド成果物がありません：${join(distDir, 'index.html')}`);

// 3. site/ を作り直してコピー
removeTree(siteDir);
mkdirSync(siteDir, { recursive: true });
copyTree(distDir, siteDir);
const copiedFromDist = listFiles(distDir).length;

// 4. ライセンス表示（dist にも同じものが入るが、本体ルートのものを正として置き直す）
copyFileSync(licenseSrc, join(siteDir, 'THIRD-PARTY-LICENSES.md'));

// 5. build-info.json
const git = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: sourceDir, encoding: 'utf8' });
const commit = git.status === 0 ? git.stdout.trim() : null;
const gitStatus = spawnSync('git', ['status', '--porcelain'], { cwd: sourceDir, encoding: 'utf8' });
const dirty = gitStatus.status === 0 ? gitStatus.stdout.trim().length > 0 : null;
const pkg = JSON.parse(readFileSync(webPackageJson, 'utf8'));
const buildInfo = {
  generatedAt: new Date().toISOString(),
  sourceCommit: commit,
  sourceDirty: dirty,
  threeVersion: pkg.dependencies?.three ?? null,
  buildProcedureVersion: BUILD_PROCEDURE_VERSION,
};
writeFileSync(join(siteDir, 'build-info.json'), JSON.stringify(buildInfo, null, 2) + '\n');

// 6. 公開してはいけないものが紛れ込んでいないか確かめる
const files = listFiles(siteDir);
const forbidden = files
  .map((f) => relative(siteDir, f).replace(/\\/g, '/'))
  .filter((p) => /(^|\/)node_modules\//.test(p) || /\.(ts|tsx|cs|csproj|sln|map)$/i.test(p) || /testvectors\.json$/i.test(p) || /(^|\/)(src|test|tests)\//.test(p));
if (forbidden.length) fail(`site/ に公開しないはずのファイルがあります：\n  ${forbidden.join('\n  ')}`);

// 7. 結果
const total = files.reduce((sum, f) => sum + statSync(f).size, 0);
console.log('\n[成功] site/ を作り直しました。');
console.log(`  dist からコピーしたファイル：${copiedFromDist} 件`);
console.log(`  site/ のファイル数：${files.length} 件（THIRD-PARTY-LICENSES.md と build-info.json を含む）`);
console.log(`  site/ の合計サイズ：${formatBytes(total)}（${total} バイト）`);
for (const f of files) console.log(`    ${relative(siteDir, f).replace(/\\/g, '/')}  ${formatBytes(statSync(f).size)}`);
console.log(`  build-info.json：${JSON.stringify(buildInfo)}`);
if (dirty) console.log('  注意：本体に未コミットの変更があります（sourceDirty: true）。');
