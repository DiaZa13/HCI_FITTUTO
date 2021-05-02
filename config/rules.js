module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(svg|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
    ],
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(svg|png|jpg|gif)$/i,
    use: {
      loader: 'file-loader',
      options: {
        outputPath: 'img',
        name: '[name]-[hash].[ext]',
      },
    },
  },
];
