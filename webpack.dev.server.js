const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'html'),
  stats: { colors: true, progress: true },
  disableHostCheck: true,
  before(app) {
    const asc = require("assemblyscript/bin/asc");
    asc.main([
      "main.ts",
      "--baseDir", "assembly",
      "--binaryFile", "../out/main.wasm",
      "--sourceMap",
      "--measure"
    ], (error) => {
      console.log('wasm 文件编译完成');
    });
    /*
     * 路由处理方法
     */
    const routerCb = (req, res, next) => {
      const regResult = req.url.match(/(\/.+)*\/(.+?.wasm)/);
      const filename = regResult[2];
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
  },
  after() {
    console.log(chalk.green('http://localhost:8080/'));
  }
});

server.listen(8080, 'localhost', function() {
});
