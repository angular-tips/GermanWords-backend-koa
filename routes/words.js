var router     = require('koa-router')();
var jwtChecker = require('../utils/jwtChecker');
var words      = require('../words/words');

router.get('/api/random-word', function* () {
  var user = yield jwtChecker(this.header);
  var word = words.getRandomWord();
  if ( ! user) {
    delete word.english;
  }
  this.body = word;
});

module.exports = router.routes();