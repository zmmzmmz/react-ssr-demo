const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const koajwt = require('koa-jwt')
// const router = require('./routes')

// error handler
onerror(app)

// const render = require('koa-ejs')
const path = require('path')

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
// render(app, {
//   root: path.join(__dirname, 'views'),
//   layout: 'layout',
//   viewExt: 'ejs',
//   cache: false,
//   debug: false
// })

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
import renders from './middlewares/ssr'
app.use(renders)
// Auth0 验证
// app.use(koajwt({secret: 'shared-secret', debug: true}))

// app.use(manager.routes(), manager.allowedMethods())


module.exports = app
