var router = require('koa-router')();
var jwt    = require('koa-jwt');
var _      = require('lodash');

// Insert real DB in here.
var users = [{
  id: 1,
  username: 'demo',
  password: '12345'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), 'this is my secret', { expiresInMinutes: 60*5 });
}

router.post('/sessions/create', function *(next) {
  if ( ! this.request.body.username || ! this.request.body.password) {
    this.throw(400, 'You must send the username and the password');
  }

  var user = _.find(users, {username: this.request.body.username});
  if ( ! user) {
    this.throw(401, 'The username or password don\'t match');
  }

  if (user.password !== this.request.body.password) {
    this.throw(401, 'The username or password don\'t match');
  }

  this.status = 201;
  this.body = { id_token: createToken(user) };
});

module.exports = router.routes();