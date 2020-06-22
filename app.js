// Une portion de se code a ete pris de: https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis
// Entry point for the application

// express application
const express = require('express');
// require the controller we make
const surveyController = require('./surveyController');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');