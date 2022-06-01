const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        // https://joseph.to/web3js-on-gatsby/
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer"), "Buffer"],
            }),
        ],
        resolve: {
            fallback: {
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                //buffer: require.resolve('buffer/'),
            },
        },
    })
}
