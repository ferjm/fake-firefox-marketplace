var express = require('express');
var fs = require('fs');
var crypto = require('crypto');

var app = express();

app.use(express.bodyParser());

app.get('/apps/packagedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/packagedApp/manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

// Serve the content
app.use(express.static(__dirname + '/webapp'));

app.listen(3001);
