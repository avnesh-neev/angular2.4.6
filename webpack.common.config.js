const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const path = require('path');

// plugins
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const ProvidePlugin = webpack.ProvidePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'source-map',

    entry: {
        main: [
            './src/main'
        ],
        vendor: [
            'core-js',
            'reflect-metadata',
            'zone.js',
            '@angular/common',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/router',
            'rxjs'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./target'),
        publicPath: undefined
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.min.js'],
        modulesDirectories: ['node_modules', 'src/components', 'src/vendor', 'src/vendor/kendo/js'],
        root: path.resolve('./src')
    },

    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url!sass?sourceMap')},
            {test: /\.(jpe?g|png|gif|svg|cur)(\?.*?)?$/i, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug'
            ]},
            { test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9](\.[0-9])?)?|(\?.*?)]$/, loader: 'file-loader' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.js$/,
                exclude: /\.(min|umd)\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ],

        noParse: [
            /@angular\/*\/bundles\/.+/
        ]
    },

    gifsicle: {
        interlaced: false
    },

    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
        customAttrAssign: [ /\)?]?=/ ]
    },

    optipng: {
        optimizationLevel: 7
    },

    postcss: function() {
        return [autoprefixer({browsers: ['last 3 versions', 'Firefox ESR']})];
    },

    sassLoader: {
        outputStyle: undefined,
        precision: 10,
        sourceComments: false
    },

    plugins: [
        new OccurenceOrderPlugin(),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "window.Tether": "tether"
        }),
        new ExtractTextPlugin('[name].css')
    ],
};
