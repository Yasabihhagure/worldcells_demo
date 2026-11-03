# worldcells デモ

地図生成ライブラリ **worldcells** のブラウザデモです。平面・円筒・球の地図を、シードと大きさを決めてその場で生成し、3D で表示します。

- 公開ページ（GitHub Pages）：<https://yasabihhagure.github.io/worldcells_demo/>
- 例：<https://yasabihhagure.github.io/worldcells_demo/?combo=4&seed=12345&m=18&scale=10>

このリポジトリに入っているのは、**ビルド済みのデモ**（`site/`）と、それを作り直すためのスクリプトだけです。worldcells 本体のソースコードは含みません。

## デモでできること

- 形 5 通りの切り替え（平面・矩形／平面・ヘクス／円筒・矩形／円筒・ヘクス／球・ヘクス）
- シードの指定（ランダムも）、大きさの指定、標高の倍率、円筒の巻き表示
- セルをクリックして情報を見る、バイオームの凡例
- 地図を JSON で書き出す（ダウンロード）
- 書き出した JSON を読み込んで表示する（ボタンか、画面へのドラッグ＆ドロップ）。手で書き換えたバイオームや標高も反映されます（セルの形と隣の関係は書き換えられません）
- 今の設定は URL に残ります。パラメータ：`combo`（0〜4）、`seed`、`w`、`h`、`m`（球の分割数）、`scale`、`wrap`、`select`、`yaw`

`site/index.html` はファイルを直接開いても動きます（Web サーバーは要りません）。

## 構成

```
site/                      公開するのはこのフォルダだけ
  index.html               本体 web/ のビルド成果物（手を加えていない）
  assets/index-*.js        同上（three.js を含む 1 ファイル）
  THIRD-PARTY-LICENSES.md  第三者のライセンス表示（three.js、MIT）
  build-info.json          生成日時・本体のコミット・three.js の版など
scripts/update-demo.mjs    site/ を本体の最新版で作り直すスクリプト
```

## デプロイ

### GitHub Pages（このリポジトリで使っている方法）

`site/` の中身だけを `gh-pages` ブランチに置き、Pages はそのブランチから配信します。

1. リポジトリの Settings → Pages → Build and deployment を「Deploy from a branch」、ブランチ `gh-pages`、フォルダ `/ (root)` にする（最初の 1 回だけ。設定済み）。
2. `main` に `site/` をコミットしたあと、次で `site/` の中身を `gh-pages` に送る：

   ```sh
   git push origin main
   git subtree push --prefix site origin gh-pages
   ```

3. 数分で `https://yasabihhagure.github.io/worldcells_demo/` に反映される。

本体リポジトリ（private）とは連携しません。公開されるのは `site/` だけです。

### Cloudflare Pages（別の置き場所にする場合）

1. Cloudflare のダッシュボードで Workers & Pages → Pages のプロジェクトを新規作成し、**Direct Upload**（直接アップロード）を選ぶ。
2. `site/` フォルダの中身をアップロードする。Git 連携はしない。
3. 公開 URL は `(プロジェクト名).pages.dev` になる。

公開した URL は、note 記事の「(TODO: デモURL)」に入れます。

## 更新の手順

本体を更新したら、次で `site/` を作り直します（Node.js 18 以降と npm が必要）。

```sh
node scripts/update-demo.mjs <本体リポジトリのフォルダ>
# または
WORLDCELLS_DIR=<本体リポジトリのフォルダ> node scripts/update-demo.mjs
```

本体の場所は「引数 → 環境変数 `WORLDCELLS_DIR` → 隣のフォルダ `../worldcells`」の順に探します。

スクリプトがすること：

1. 本体の `web/` で `npm ci` と `npm run build` を実行する
2. `site/` を消して作り直し、`web/dist/` の中身をコピーする
3. 本体ルートの `THIRD-PARTY-LICENSES.md` を `site/` にコピーする（無ければエラーで止まる）
4. `site/build-info.json` を書き出す
5. `site/` に TypeScript／C# のソース、`node_modules`、テスト、`testvectors.json`、ソースマップが入っていないことを確かめる
6. 結果（ファイル数、合計サイズ）を表示する

終わったら差分を確かめて、`site/` をコミットし、上の「GitHub Pages」の 2 の手順で push します。

## 注意

- **公開するのは `site/` だけ。** 本体のソース（`web/src/`、C# の Core、Unity、テスト、`testvectors.json`、ドキュメント）をこのリポジトリに入れないでください。
- `site/` の中身は手で編集しません。デモの見た目や機能を変えるときは本体側を直して、スクリプトで作り直します。
- `THIRD-PARTY-LICENSES.md` は three.js（MIT）の表示義務のために置いています。消さないでください。JS の先頭にも著作権表示が入っています。
- ビルドした JS には生成の処理がそのまま入ります（圧縮はされています）。これは承知のうえで公開しています。
- `npm install` ではなく `npm ci` を使うのは、本体の `package-lock.json` を書き換えないためです。
- Windows の Node.js 24 では、日本語を含むパスで `fs.rmSync` が異常終了することがあるため、スクリプトは削除とコピーを自前の処理で行っています。

## ライセンス

worldcells デモのビルド成果物の利用条件は、worldcells 本体のライセンス（やさび @yasabihhagure）に従います。デモを見て使うのは自由ですが、`site/` の JS を取り出して再利用・再配布することは許諾していません。three.js の部分は MIT ライセンスです（`site/THIRD-PARTY-LICENSES.md`）。
