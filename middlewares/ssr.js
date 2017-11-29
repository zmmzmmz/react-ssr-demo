// import { renderToString } from 'react-dom/server'
import Html from './Html'
import {StaticRouter as Router, matchPath} from 'react-router'
const routers = require('../src/routers')
import App from '../src/main'
import React from 'react'

const render = async (ctx, next) => {
  let match = false
  routers.map((route) => {
    if (matchPath(ctx.request.url, { path: route.path })) {
      match = true
      return
    }
  })

  if (!match) {
    ctx.status = 404
    ctx.body = `<div>不存在</div>`
  } else {
    let html = Html(
      <Router context={{}} location={ctx.request.url}>
        <App/>
      </Router>
    )
    ctx.status = 200
    ctx.body = html
  }
}

export default render
