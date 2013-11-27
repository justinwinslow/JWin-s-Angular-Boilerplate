var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    app = express(),
    PORT = 3333;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

app.use(stylus.middleware({
  debug: true,
  src: __dirname + '/public',
  compile: compile
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.status(200).sendfile('public/index.html');
});

app.listen(PORT);

console.log('Listening on port ' + PORT);
