const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'html'),
  stats: { colors: true, progress: true },
  disableHostCheck: true,
  before(app) {
    /*
     * 路由处理方法
     */
    const routerCb = (req, res, next) => {
      const regResult = req.url.match(/(\/.+)*\/(.+?.wasm)/);
      const filename = regResult[2];
      console.log('获取 wasm 文件: ' + filename);
      const options = {
        root: __dirname + '/out/',
        dotfiles: 'deny',
        headers: {
          'Content-Type': 'application/wasm'
        }
      };
      res.sendFile(filename, options, function (err) {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', filename);
        }
      });
    };
    app.get('/**/*.wasm', routerCb);
  }
});

server.listen(8080, 'localhost', function() {});
