var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('line', function(line){
    io.emit('line', line);
    //console.log(line);
  });

  socket.on('closeSignal', function(signal){
  	io.emit('closeSignal', signal);
  });

  socket.on('beginLineDraw', function(line){
  	io.emit('beginLineDraw', line);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});