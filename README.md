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

### 参考
#### [webpackとは？使い方と導入するメリットをわかりやすく解説](https://goworkship.com/magazine/how-to-webpack/)
