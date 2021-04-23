'use strict'
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.post('/test', (req, res) => {
    res.json({'test': 'success'});
  });
  
  module.exports.handler = serverless(app);