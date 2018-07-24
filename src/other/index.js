'use strict'

const Biglet = require('biglet')

const Model = require('./lib/model')
const fetch = require('./lib/fetch')

class OtherPagelet extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'bpmodule-other'
    this.domid = 'bpmodule-other'
  }

  async parse () {
    // use owner dataStore mainData
    const mainData = this.owner.dataStore.mainData
    const data = await fetch()
    const model = new Model(mainData, data)
    this.data = model.toJSON()

    return this.data
  }
}

module.exports = OtherPagelet
