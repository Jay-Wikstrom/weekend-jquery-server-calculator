$(document).ready(onReady);

function onReady() {
    getCalculation();
    $(document).on('click', '#addition', add);
    $(document).on('click', '#subtraction', subtract);
    $(document).on('click', '#multiplication', multiply);
    $(document).on('click', '#division', divide);
    $(document).on('click', '#equals', equal);
    $(document).on('click', '#clear', clear);
};

//Operator for add button
function add() {
    operator = '+';
    console.log(operator);
};

//Operator for subtract button
function subtract() {
    operator = '-';
    console.log(operator);
}

//Operator for multiply button
function multiply() {
    operator = '*';
    console.log(operator);
}

//Operator for divide button
function divide() {
    operator = '/';
    console.log(operator);
}

//Clear inputs
function clear() {
    console.log('Clear test');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}

function equal() {
    let calculation = {
        operator: operator,
        inputOne: $('#firstNumberInput').val(),
        inputTwo: $('#secondNumberInput').val()
    }

    //Post data to /data
    $.ajax({
        method: 'POST',
        url: '/data',
        data: calculation
    }).then(function (response) {
        console.log('POST /calculation', response);
        getCalculation();
    });
} //end equal function 

function getCalculation() {
    console.log('about to make a request');

    //Make HTTP request to server to GET /data endpoint
    $.ajax({
        method: 'GET',
        url: 'data'
    }).then(function(response) {
        console.log('GET /data response');

        $('#results').empty()
        $('#listOfResults').empty();
        for (let calculation of response){
            $('#results').empty();
            $('#results').append(`${calculation.result}`)
            $('#listOfResults').append(`
        <li>
            ${calculation.inputOne} 
            ${calculation.operator} 
            ${calculation.inputTwo} =
            ${calculation.result}
        </li>
    `)
    } //end for loop
    }); //end of then
} //end function

