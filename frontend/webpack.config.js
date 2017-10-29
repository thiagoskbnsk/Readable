var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js'
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    }
}
