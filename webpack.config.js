let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
};
