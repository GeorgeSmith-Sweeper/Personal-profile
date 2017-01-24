'use strict';

const express = require('express');
const volleyball = require('volleyball');

let path = require('path')
const app = express();

app.use(volleyball);
app.use(express.static(__dirname));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const server = app.listen(process.env.PORT || 3000, function () {
  console.log((`Listening on ${JSON.stringify(server.address())}`))
});
