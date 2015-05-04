var jwt = require('koa-jwt');

// Instead of using koa-jwt middleware directly,
// I just want to extract the user if there is a token
module.exports = function* (header) {
  var token, parts, scheme, credentials;

  if (header.authorization) {
    parts = header.authorization.split(' ');
    if (parts.length == 2) {
      scheme = parts[0];
      credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return null;
    }
  }

  try {
    return yield jwt.verify(token, 'this is my secret');
  } catch(e) {
    return null;
  }
};