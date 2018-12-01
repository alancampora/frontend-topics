const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  devtool: 'source-map',
  devServer:{
	  proxy:{
	  	'**':{
			target: 'http://[::1]:8000',
			changeOrigin: true,
			secure: false,
		},
	  }
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]

  },
  plugins: [htmlPlugin],
};
