const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const nunjucks = require('nunjucks')
// this is important
global.Promise = require('bluebird')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(async (ctx, next) => {
  ctx.render = function (tpl, data, cb) {
    const env = nunjucks.configure()

    if (/\.nj$/.test(tpl) || /\.html$/.test(tpl)) {
      env.render(tpl, data, (err, html) => {
        cb(err, html)
      })
    } else {
      env.renderString(tpl, data, (err, html) => {
        cb(err, html)
      })
    }
  }
  await next()
})

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
