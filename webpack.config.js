const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
	devServer: {
		port: 8081,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: 'postcss.config.js'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	]
}