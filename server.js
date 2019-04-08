'use strict';

const express = require('express');
const server = express();

server.listen(process.env.PORT || 8080);
server.use(express.static(__dirname));
server.get('/drum-machine', (req, res) => {
  return res.sendFile(__dirname + '/public/index.html');
});
