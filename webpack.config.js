module.exports = {
  entry: {
    dashboard: "./src/index.jsx",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    filename: "BlogTest.js",
    path: __dirname + "/public",
    library: {
      type: "module",
    },
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
};
