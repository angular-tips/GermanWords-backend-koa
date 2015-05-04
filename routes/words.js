var router     = require('koa-router')();
var jwtChecker = require('../utils/jwtChecker');
var words      = require('../words/words');
var _          = require('lodash');

router.get('/api/random-word', function* () {
  var user = yield jwtChecker(this.header);
  var word = words.getRandomWord();
  if ( ! user) {
    word = _.omit(word, 'english');
  }
  this.body = word;
});

module.exports = router.routes();