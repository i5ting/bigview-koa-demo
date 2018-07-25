var request = require('request-promise');

request('http://now.httpbin.org/').then(function (res) {
    var _res = JSON.parse(res)
    console.log(_res.now.rfc2822)
})
.catch(function (err) {
    console.error(err)
});