// Usei o path para que isso funcione tanto no linux quanto no windows (barra invertida)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	// 1 - Aqui definimos o arquivo principal da aplicação e para onde ele vai ser convertido
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
	// 2 - Aqui definimos quais tipos de arquivos vão ser trabalhados
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
	// 3 - Aqui definimos como trabalhar com certos tipos de arquivo
    module: {
        rules: [
            { // Definimos que para arquivos JSX vamos usar o babel para converter
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
// Obs: __dirname é o diretório atual deste arquivo