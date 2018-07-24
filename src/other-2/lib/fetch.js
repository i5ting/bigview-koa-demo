const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch () {
  await sleep(4000)
  const headline = 'Other2'
  return { headline }
}
