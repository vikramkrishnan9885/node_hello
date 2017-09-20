var express = require('express');
var app = express();

var port = 3000;

app.listen(
    port
    , function(){
        console.log("Express listening to port " + port);
    }
);

app.get(
    '/'
    , function(req, res){
        res.send("Hello World");
    }
);