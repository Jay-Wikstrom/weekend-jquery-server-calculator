console.log('Test for in the app');

const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();





app.use(express.static('./server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, function(){
    console.log('App is running on localhost:5000')
});