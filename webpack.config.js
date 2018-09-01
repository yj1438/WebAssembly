const path = require('path');

module.exports = {
  mode: 'development', // production
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'assemblyscript-typescript-loader',
        //to avoid a conflict with other ts file who use 'ts-load',so you can division them with prop 'include'
        include: /assembly/,
        options: {
          limit: 1000,
          name: `[name].wasm`,
          publicPath: '',
          outputPath: ''
        }
      }
    ]
  }
}