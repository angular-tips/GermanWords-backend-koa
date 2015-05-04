var words = require('./words.json').words;

exports.getRandomWord = function() {
  var totalWords = words.length - 1;
  var rand = Math.ceil(Math.random() * totalWords);
  return words[rand];
};