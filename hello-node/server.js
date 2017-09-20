var http = require('http');
var port = 3000;

var requestHandler = function(req,res){
    console.log("New request to"+ req.url);
    res.end("Hello World!\n");
}

var server = http.createServer(requestHandler);

server.listen(
    port
    , function(){
        console.log("listening on port"+port);
    }
);