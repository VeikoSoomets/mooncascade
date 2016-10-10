var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');
var port = 8890;

server.listen(port, function(err){
  io.on('connection', function(socket){   
    console.log("new client connected");
    var redisClient = redis.createClient();
    redisClient.subscribe('updates');
   
    redisClient.on("message", function(channel, message) {
      console.log("new message in queue: "+ message);
      socket.emit(channel, message);
    });
   
    socket.on('disconnect', function() {
      redisClient.quit();
    });
  });
});