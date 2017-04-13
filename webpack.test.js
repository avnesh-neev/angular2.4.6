const testConfig = require('./webpack.common.config');

testConfig.devtool = 'inline-source-map';
testConfig.entry.vendor = [];
testConfig.module.loaders = testConfig.module.loaders.concat(
    { test: /\.spec\.ts$/, loader: 'awesome-typescript-loader' },
    { test: /\.ts$/, exclude: /\.spec\.ts$/, loaders: [ 'strip-debug', 'awesome-typescript-loader' ] }
);

module.exports = testConfig;
