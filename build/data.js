var path = require('path');
var low = require('lowdb');
var db = low(path.resolve(__dirname, './data/articles.json'));

module.exports = db('articles');
