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
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
						}
					},
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		extensions: [".jsx", ".js"]
	},
	plugins: [HtmlWebpackPluginConfig]
};
