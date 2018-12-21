const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');

const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;

module.exports = env => ({
    entry: './index.ts',
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
        mainFields: ['module', 'main'],
        alias: {
            'luxon': 'luxon/build/global/luxon.min.js',
            'pako': 'pako/dist/pako.min.js'
            // '@so/di': 'A:/so/di'
        }
    },
    externals: nodeExternals({
        whitelist: [/^luxon/, /^pako/]
    }),
    plugins: [
        new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new BundleAnalyzerPlugin({
            analyzerPort: 9994
        })
    ]
});
