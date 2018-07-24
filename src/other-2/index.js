'use strict'

const Biglet = require('biglet')

const Model = require('./lib/model')
const fetch = require('./lib/fetch')

class OtherPagelet extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'bpmodule-other2'
    this.domid = 'bpmodule-other2'
  }

  async fetch () {
    // use owner dataStore mainData
    const mainData = this.owner.dataStore.mainData
    const data = await fetch()
    const model = new Model(mainData, data)
    this.data = model.toJSON()
  }
}

module.exports = OtherPagelet
