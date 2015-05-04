var words = require('./words.json').words;

exports.getRandomWord = function() {
  var totalWords = words.length;
  var rand = Math.ceil(Math.random() * totalWords);
  return words[rand];
};