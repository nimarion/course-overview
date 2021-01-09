const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "github" ? "/course-overview/" : "/",
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    }
  }
};
