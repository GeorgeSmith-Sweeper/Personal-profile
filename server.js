'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

const server = app.listen(process.env.PORT || 3000, function () {
  console.log((`Listening on ${JSON.stringify(server.address())}`))
});
