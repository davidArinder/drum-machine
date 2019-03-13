'use strict';

const express = require('express');
const server = express();
//const PORT = 8080;

server.listen(process.env.PORT || 8080);
//console.log(`listening on port: ${PORT}`);

server.use(express.static(__dirname));
server.get('/drum-machine', (req, res) => {
  return res.sendFile(__dirname + '/fcc-drum-machine-css/index.html');
});
