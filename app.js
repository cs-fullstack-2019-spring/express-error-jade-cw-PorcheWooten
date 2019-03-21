const express = require('express');
const app = express();

var index = require('./routes');

app.use(express.static('public'));
app.set('view engine','pug');
app.use('/', index);

app.listen(8002);