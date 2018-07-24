const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch () {
  await sleep(2000)
  const headline = 'Other1'
  return { headline }
}
