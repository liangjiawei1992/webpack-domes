var path = require("path");
module.exports = {
	// entry: path.resolve(__dirname, 'src/index.js'),
	// output: {
	// 	path: path.resolve(__dirname, 'build'),
	// 	filename: 'bundle.js'
	// }

	// 多入口文件
	// entry: {
	// 	entry1: './src/entry1.js',
	// 	entry2: './src/entry2.js'
	// },
	// output: {
	// 	path: path.resolve(__dirname, 'build'),
	// 	filename: '[name].js'
	// }
	resolve: {
		extensions: ["", ".js", ".jsx", ".css", ".json"],
	},
	entry: path.resolve(__dirname,'src/index.js'),
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader'
			}
		]
	}
}