console.log('Test for in the app');

//Load express & body-parser
const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();
const data = [];


let result;
    function calculator(array) {
        for (let index of array) {
            if (index.operator === '+') {
                result = Number(index.inputOne) + Number(index.inputTwo);
                console.log(result);
            } else if (index.operator === '-') {
                result = Number(index.inputOne) - Number(index.inputTwo);
                console.log(result);
            } else if (index.operator === '/') {
                result = Number(index.inputOne) / Number(index.inputTwo);
                console.log(result);
            } else if (index.operator === '*') {
                result = Number(index.inputOne) * Number(index.inputTwo);
                console.log(result);
            } else {
                console.log('error');
            } 
        } //end for loop
    } //end function

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for requests from localhost:5000/data
app.get('/data', function (req, res) {
    console.log('Ready to send');
    
    calculator(data);
    res.send(data);
});

//POST data
app.post('/data', function(req, res){
    console.log('req.body', req.body);
    data.push(req.body);

    res.sendStatus(200);
});


//Listen for requests
app.listen(port, function(){
    console.log('App is running on localhost:5000')
});