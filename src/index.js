'use strict'

const BigView = require('bigview')

const layoutPagelet = require('./layout')
const mainPagelet = require('./main')
const otherPagelet = require('./other')

async function index(ctx) {
  // this.status = 200
  const bigView = new BigView(ctx)

  // set layout
  bigView.layout = layoutPagelet

  // set main
  bigView.main = mainPagelet
  
  // set others
  bigView.add(otherPagelet)

  // you can custom bigView dataStore
  bigView.dataStore = {}

  // bigView.mode = 'pipeline'

  await bigView.start()
}

module.exports = index
