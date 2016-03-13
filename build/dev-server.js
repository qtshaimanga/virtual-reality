var express = require('express')
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')

var fs = require('fs')

var data = require('./data')
var articles = require('./api/articles')

var app = express()
var compiler = webpack(config)

// handle fallback for HTML5 history API
//app.use(require('connect-history-api-fallback')())    // lock your road
//
// // serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))
//

/* ROUTES API */
app.get('/yolo/', function (req, res) {
  res.send('Fuck you bitch !');
});

app.get('/api/articles/', articles.list);
app.get('/api/articles/:title', articles.findByTitle);
app.get('/api/tags', articles.tagsList);


// var datum = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/articles.json') ));
// console.log(datum);



app.listen(9000, 'localhost', function (err) {
    if (err) {
      console.log(err)
      return
    }
  console.log('Listening at http://localhost:9000')
})
