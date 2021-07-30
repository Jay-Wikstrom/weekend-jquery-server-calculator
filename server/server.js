console.log('Test for in the app');

const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();
const data = [];


app.use(express.static('./server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', function (req, res) {
    console.log('Ready to send');
    
    //
    res.send(data);
});

app.post('/data', function(req, res){
    console.log('req.body', req.body);
    data.push(req.body);

    res.sendStatus(200);
});



app.listen(port, function(){
    console.log('App is running on localhost:5000')
});