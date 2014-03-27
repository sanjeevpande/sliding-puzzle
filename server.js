var handler = function(req, res) {

    var request = url.parse(req.url, true);
    var action = request.pathname;
     
    if (action == '/game.js') {
        var img = fs.readFileSync('./game.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/event.js') {
        var img = fs.readFileSync('./event.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/controller.js') {
        var img = fs.readFileSync('./controller.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/board.js') {
        var img = fs.readFileSync('./board.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/game.css') {
        var img = fs.readFileSync('./game.css');
        res.writeHead(200, {'Content-Type': 'text/css' });
        res.end(img, 'binary');
    }
    else { 
        fs.readFile('./game.html', function (err, data) {
            if(err){
                throw err;
            }
            res.writeHead(200);
            res.end(data);
        });    
    }
}
var app = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');

var port = process.env.PORT || 3000;
 
app.listen(port);
