const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin-advanced');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: [ './scripts/app.js', './styles/app.scss' ],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: ''
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader?importLoaders=1'
				})
			},
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'app.bundle.css',
			allChunks: true
        }),
        new CopyWebpackPlugin([
            {
              from: './assets/**/**',
              flatten: true,
            },
            {
              from: 'index.html'
            },
          ]),
	]
};
