const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets'
}

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src,
		admin: `${PATHS.src}/admin.js`
	},
	output: {
		filename: `${PATHS.assets}/js/[name].[hash].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
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
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loader: {
						sass: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
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
								path: `${PATHS}/postcss.config.js`
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								indentedSyntax: true
							},
							sourceMap: true
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'~': 'src'
		}
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [PATHS.dist]
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}/css/[name].[hash].css`
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`,
			filename: './index.html',
			// inject: false
		}),
		new CopyWebpackPlugin({
			patterns:[
				{ from: `${PATHS.src}/assets/img`, to: `${PATHS.dist}/assets/img` },
				{ from: `${PATHS.src}/assets/fonts`, to: `${PATHS.dist}/assets/fonts` },
				{ from:`${PATHS.src}/static`, to: `${PATHS.dist}` }
			]
		}),
	]
}