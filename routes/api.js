const router = require('koa-router')()

router.prefix('/api')

router.get('/user', function (ctx, next) {
  ctx.body = {
    status:{
      code: 0,
      msg: 'sucess'
    },
    data:{
      username: 'i5ting',
      site: 'i5ting.com',
      weibo: '狼叔爱Node',
      zhihu: 'i5ting'
    }
  }
})

module.exports = router
