var handler = function(req, res) {

    var request = url.parse(req.url, true);
    var action = request.pathname;
     
    if (action == '/script/game.js') {
        var img = fs.readFileSync('./script/game.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/script/event.js') {
        var img = fs.readFileSync('./script/event.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/script/controller.js') {
        var img = fs.readFileSync('./script/controller.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/script/board.js') {
        var img = fs.readFileSync('./script/board.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/script/util.js') {
        var img = fs.readFileSync('./script/util.js');
        res.writeHead(200, {'Content-Type': 'text/javascript' });
        res.end(img, 'binary');
    }
    else if (action == '/css/game.css') {
        var img = fs.readFileSync('./css/game.css');
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
