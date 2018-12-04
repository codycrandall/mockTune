const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: "./src/index.html",
	filename: "index.html",
	inject: "body"
});

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		path: path.join(__dirname, "dist/"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".jsx", ".ts", ".js"]
	},
	plugins: [HtmlWebpackPluginConfig]
};
