const request = require('request-promise')

const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch() {
  let res = await request('http://now.httpbin.org/')
  
  let _res = JSON.parse(res)
  console.log(_res)

  let now = _res.now.rfc2822
  console.log(now)

  const logo = 'https://avatars2.githubusercontent.com/u/25895556?s=200&v=4'
  const headline = 'Main'

  // simulation data
  return { logo, headline, now }
}
