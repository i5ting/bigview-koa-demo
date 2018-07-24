class Model {
  constructor (mainData, data) {
    this.headline = data.headline
  }

  set headline (headline) {
    this._headline = headline ? headline.trim() : ''
  }

  get headline () {
    return this._headline
  }

  toJSON () {
    return { logo: this.logo, headline: this.headline }
  }
}

module.exports = Model
