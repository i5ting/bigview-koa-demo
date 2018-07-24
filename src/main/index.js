'use strict'

const Biglet = require('biglet')

const Model = require('./lib/model')
const fetch = require('./lib/fetch')

class MainPagelet extends Biglet {
  constructor () {
    super()
    this.root = __dirname
    this.tpl = './index.nj'
    this.name = 'bpmodule-main'
    this.domid = 'bpmodule-main'
  }

  async fetch () {
    // fetch data
    const data = await fetch()
    // set dataStore
    this.owner.dataStore.mainData = data

    const model = new Model(data)
    this.data = model.toJSON()
    
    console.log(this.data)
    return this.data
  }
}

module.exports = MainPagelet
