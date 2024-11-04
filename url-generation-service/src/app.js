'use strict';

const express = require('express');
const app = express();


// database connection
require('./databases/init.mongodb');


// routes
app.use('/',require('./routes'));

module.exports = app;