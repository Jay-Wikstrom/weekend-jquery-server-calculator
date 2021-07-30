$(document).ready(onReady);

function onReady(){
    $(document).on('click', '#addition', add)
    $(document).on('click', '#subtraction', subtract)
    $(document).on('click', '#multiplication', multiply)
    $(document).on('click', '#division', divide)
    $(document).on('click', '#equals', equal)
    $(document).on('click', '#clear', clear)
};

function add() {
    operator = '+';
    console.log(operator);
};

function subtract() {
    operator = '-';
    console.log(operator);
}

function multiply() {
    operator = '*';
    console.log(operator);
}

function divide() {
    operator = '/';
    console.log(operator);
}

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
    $('#results').empty();
    console.log(calculation);
    console.log(calculation.operator);

    $.ajax({
        method: 'POST',
        url: '/data',
        data: calculation
    }).then((response) => {
        console.log('POST /calculation', response);
    });
}

function getCalculation(){
    console.log('about to make a request');

    $.ajax({
        method: 'GET',
        url: 'data'
    }).then((response) => {
        console.log('GET /data response');
    })
}

