import Express from 'express'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import compression from 'compression'
import favicon from 'serve-favicon'
import path from 'path'


const app = new Express()

app.use(compression())

app.use(favicon(path.join(__dirname, '..', 'assets', 'deer-transparent.png')))

app.use(Express.static(path.join(__dirname, '..', 'assets')))


app.use((req, res) => {

})

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }

  console.info('----\n==> ✅  %s is running, talking to API server on %s.', 'xinshu', 3017);
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'locahost', 3017);
})
