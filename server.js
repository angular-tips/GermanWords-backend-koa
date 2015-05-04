var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');

var routes = require('./routes');

var app = koa();

app.use(cors({
  headers: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser());

app.use(routes.user);
app.use(routes.words);

app.listen(3001, function() {
  console.log('Backend running at port 3001');
});