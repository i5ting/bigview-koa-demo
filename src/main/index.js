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
    // 网络请求获取数据
    this._data = await fetch()
    // 公共数据共享
    this.owner.dataStore.mainData = this._data
  }

  async parse () {
    // 模型转换
    const model = new Model(this._data)
    // 赋值data，用于模板编译
    this.data = model.toJSON()
  }
}

module.exports = MainPagelet
