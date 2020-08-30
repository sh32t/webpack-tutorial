# Webpackのチュートリアル
## プロジェクトの作成
```ps1
npm init -y
```
## Webpackのインストール
#### 絶対パスの取得のためパスモジュールもインストールしておく
```ps1
npm install webpack
npm install webpack-cli
npm install path
```
## 設定ファイルの作成
#### `webpack.config.js`の作成
```js
const path = require('path');

module.exports = {
    // 開発：devlopment, 商用：production
    mode: 'development',
    // エントリーポイントの設定
    entry: './app.js',
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス
        path: path.join(__dirname, '/')
    }
};
```
## JavaScriptファイルの作成
#### `module1.js`の作成
```js
export default function module1(word1) {
    return word1 + "(これは)";
}
```
#### `module2.js`の作成
```js
export default function module2(word2) {
    return word2 + "(ペンです。)";
}
```
#### `app.js`の作成
```js
import module1 from './module1';
import module2 from './module2';

//変数を定義します
var word1 = "This is";
var word2 = " a pen.";

//関数に変数を投入します
var returnedWord1 = module1(word1);
var returnedWord2 = module2(word2);

//結果をまとめて表示します
var addedWords = returnedWord1 + returnedWord2;

console.log(addedWords);
```
## HTMLファイルの作成(確認用)
```html
<meta charset="utf-8"/>
<script src="bundle.js"></script>
```
## Webpack実行
```ps1
./node_modules/.bin/webpack
```
### 参考
#### [webpackとは？使い方と導入するメリットをわかりやすく解説](https://goworkship.com/magazine/how-to-webpack/)
