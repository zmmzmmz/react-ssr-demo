var express = require('express')
var React = require('react')
var StaticRouter = require('react-router-dom').StaticRouter
var compression = require('compression')
var favicon = require('serve-favicon')
var path = require('path')


var app = express()

app.use(compression())

app.use(favicon(path.join(__dirname, '..', 'assets', 'deer-transparent.png')))

app.use(express.static(path.join(__dirname, '..', 'assets')))


app.use((req, res) => {
  res.status(200)
  res.send('haha')
})

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }

  console.info('----\n==> ✅  %s is running, talking to API server on %s.', 'xinshu', 3017);
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'locahost', 3017);
})
