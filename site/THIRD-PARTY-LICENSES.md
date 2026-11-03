# 第三者のソフトウェアのライセンス

本パッケージのブラウザのデモ（`web/`）は、実行時に次の第三者のソフトウェアを使います。デモをビルドしたもの（`web/dist/`）にはこのソフトウェアが含まれます。Core（C# 版・TypeScript 版）は第三者のソフトウェアに依存しません。

## three.js

- バージョン：0.187.0
- ライセンス：MIT
- 入手元：https://threejs.org/ （npm パッケージ `three`）
- 使っている部分：`three` 本体と `three/addons/controls/OrbitControls.js`（`web/src/demo/`）

以下は、パッケージに同梱の `LICENSE`（`node_modules/three/LICENSE`）の全文です。

```
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
