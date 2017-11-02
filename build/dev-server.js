var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.dev')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var path = require('path')

var app = express(webpackConfig)

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

var staticPath = path.posix.join('/', 'assets')
app.use(staticPath, express.static('./assets'))

var uri = 'http://localhost:8093'

var _resolve
var readyPromise = new Promise(resolve => {
  console.log('ready')
  _resolve = resolve
})

console.log('> Starting dev server...')

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  opn(uri)
  _resolve()
})

var server = app.listen(8093)

module.exports = {
  ready: readyPromise,
  close: () => {
    console.log('close')
    server.close()
  }
}
