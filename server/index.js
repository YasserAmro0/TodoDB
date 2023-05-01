const path = require('path');
const express = require("express");
const mongoose = require('mongoose');
const router = require('../router/index');

const app = express();
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/TodoDB')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, "..", "public")));


app.use(router);


module.exports = app;
