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
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, '/')
    }
};