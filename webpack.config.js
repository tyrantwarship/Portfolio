var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var VENDOR_LIBS = [
    "bootstrap-webpack",
    "react",
    "react-dom",
    "react-elm-components",
    "bootstrap"
];

module.exports = {
    devtool: 'eval',
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.elm']
    },
    entry: {
        bundle: './src/index',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        // publicPath: 'static/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                // include: path.join(__dirname, 'src'),
                exclude: [/elm-stuff/, /node_modules/],
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'elm-webpack'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss-loader', 'sass']
            },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&minetype=image/jpg" },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /.woff2?(\?v=\d+.\d+.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ],
        noParse: /\.elm$/
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    }
};
