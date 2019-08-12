const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      //  To Load JS Files
      {
        loader: 'babel-loader',
        test:/\.js$/,
        exclude: /node_module/

      },
      // TO Load CSS Files
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      //  To Load Images
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase: path.join(__dirname,'public')
  }
}
