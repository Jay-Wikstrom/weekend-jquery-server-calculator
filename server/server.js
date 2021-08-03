console.log('Test for in the app');

//Load express & body-parser
const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();

//Data storage
const data = [];

//Static Files
app.use(express.static('./server/public'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for requests from localhost:5000/data
app.get('/data', function (req, res) {
    console.log('Ready to send');
    
    res.send(data);
});

//POST data
app.post('/data', function(req, res){
    console.log('req.body', req.body);
    let result;
    let operator = req.body.operator;
    let inputOne = Number(req.body.inputOne);
    let inputTwo = Number(req.body.inputTwo);
    
    if (operator === '+') {
        result = inputOne + inputTwo;
        console.log(result);
    } else if (operator === '-') {
        result = Number(inputOne) - Number(inputTwo);
        console.log(result);
    } else if (operator === '/') {
        result = Number(inputOne) / Number(inputTwo);
        console.log(result);
    } else if (operator === '*') {
        result = Number(inputOne) * Number(inputTwo);
        console.log(result);
    } else {
        console.log('error');
    }

    const completedCalc = {
        inputOne: inputOne,
        inputTwo: inputTwo,
        operator: operator,
        result: result
    }
    
    
    data.push(completedCalc);
    console.log(data);

    res.sendStatus(201);
});

//Listen for requests
app.listen(port, function(){
    console.log('App is running on localhost:5000')
});