const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch () {
  // simulation fetch time
  await sleep(1000)

  const logo = 'https://avatars2.githubusercontent.com/u/25895556?s=200&v=4'
  const headline = 'Main'

  // simulation data
  return { logo, headline }
}
