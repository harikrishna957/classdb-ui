module.exports = {
	entry: './index.tsx',
	
	output: {
		filename: 'classdb.js',
		path: __dirname+"/bundle"
	},
	
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},

	devtool: 'inline-source-map',
	
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
};