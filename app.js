const express = require('express');
const app = express();
const { resolve } = require('path');
const router = require('./routing');
const path = require('path');
const bodyParser = require('body-parser');


app.set('view engine', 'pug');
// app.set('views', resolve('views'));
// Résout le problème de destructuration (https://stackoverflow.com/questions/62455716/typeerror-cannot-destructure-property-userid-of-req-body-as-it-is-undefined)
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(resolve('public')));
app.use(router);
app.set('views', path.join(__dirname, 'views/pages'));

module.exports = app;
