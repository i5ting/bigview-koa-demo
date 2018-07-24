class Model {
  constructor(data) {
    this.headline = data.headline
    this.logo = data.logo
  }

  set headline(headline) {
    this._headline = headline ? headline.trim() : ''
  }

  get headline() {
    return this._headline
  }

  set logo(logo) {
    this._logo = logo ? logo.trim() : ''
  }

  get logo() {
    return this._logo
  }

  toJSON() {
    return {
      headline: this.headline,
      logo: this.logo
    }
  }
}

module.exports = Model
