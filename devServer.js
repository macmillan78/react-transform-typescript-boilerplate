var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var argv = require('optimist')
    .default('proxyTarget', null)
    .argv;
var httpProxy = require('http-proxy');

var app = express();
var compiler = webpack(config);
var proxy;
if (argv.proxyTarget) {
  proxy = httpProxy.createProxyServer({});

  console.log('Proxying to', argv.proxyTarget);
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  if (proxy) {
    proxy.web(req, res, {
      target: argv.proxyTarget
    });
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
