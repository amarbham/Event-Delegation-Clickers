module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/dist/', // instead of publicPath: '/build/' 
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}