const express = require('express');
const app = express();
const cors = require('cors');
// const route = require('../App');

const port = 3002;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.json);
app.use(cors());
// app.use('/', route);
//////////////////////////////////////////////////

io.sockets.on('connection', (socket) => {
  console.log('==============');
  console.log('소켓 접속 성공');
  console.log('==============');

  socket.on('roomJoin', (roomName) => {
    // roomJoin이벤트명으로 roomName 데이터 받아오기
    console.log('==============');
    console.log(roomName, ',');
    // console.log(userId);
    console.log('==============');

    socket.join(roomName); // roomName으로 방 만들기
  });

  // socket.on("alert", ())
});

http.listen(port, () => {
  console.log(`express is running on ${port}`);
});
