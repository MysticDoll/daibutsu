module.exports = function(){
  var http = require('http');

  var url = require('url');
  var fs = require('fs');

  var HttpServer = http.createServer(function(req, res){
    var furl = req.url === "/" ? "index.html" : url.parse(req.url, true).pathname;
    if(req.method === 'GET'){
      fs.readFile("./" + furl, 'utf8', function(err, data){
        if(!err){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        } else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end("not found");
        }
      });
    }
  }).listen(8080);
}
