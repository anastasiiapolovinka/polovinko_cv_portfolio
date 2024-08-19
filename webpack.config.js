const path = require("path");

module.exports = {
  entry: "./script.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true, // чтобы автоматически открывал браузер
  },
};
