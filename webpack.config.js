const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;

module.exports = env => ({
    entry: {
        browser: './browser/index.ts',
        node: './node/index.ts',
    },
    output: {
        path: require('path').join(__dirname, './dist'),
        libraryTarget: 'commonjs'
    },
    devtool: false,
    mode: env && env.prod ? 'production' : 'development',
    watch: !(env && env.prod),
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: 'awesome-typescript-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        mainFields: ['module', 'main']
    },
    externals: nodeExternals({
    }),
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 9987
        })
    ]
});
