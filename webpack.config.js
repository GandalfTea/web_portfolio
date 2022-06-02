
const path = require('path');
//const htmlWebpackPlugin = require('html-webpack-plugin');

//const pages = ["dataset", "search", "landing"];
const pages = ["Page"];

module.exports = {
	context: __dirname,
	entry: pages.reduce((config, page) => {
		config[page] = `./js/${page}.jsx`;
		return config;
	}, {}),
	devtool: 'source-map',
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.jsx?$/,
				loader: "eslint-loader",
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	/*
	plugins: [].concat(
		pages.map(
			(page) =>
				new htmlWebpackPlugin({
					inject: true,
					template: `./${page}.html`,
					filename: `${page}.html`,
					chunks: [page],
				})
		)
	),
	*/
};

