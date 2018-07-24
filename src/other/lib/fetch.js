const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch () {
  await sleep(8000)
  const headline = 'Other'
  return { headline }
}
