class Model {
  constructor (mainData, data) {
    this.logo = mainData.logo
    this.headline = data.headline
  }

  set headline (headline) {
    this._headline = headline ? headline.trim() : ''
  }

  get headline () {
    return this._headline
  }

  set logo (logo) {
    this._logo = logo ? logo.trim() : ''
  }

  get logo () {
    return this._logo
  }

  toJSON () {
    return { logo: this.logo, headline: this.headline }
  }
}

module.exports = Model
