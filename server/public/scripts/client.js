$(document).ready(onReady);

function onReady() {
    getCalculation();
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

    $.ajax({
        method: 'POST',
        url: '/data',
        data: calculation
    }).then(function (response) {
        console.log('POST /calculation', response);
        getCalculation();
    });
}

function getCalculation() {
    console.log('about to make a request');

    $.ajax({
        method: 'GET',
        url: 'data'
    }).then(function(response) {
        console.log('GET /data response');

        let result;
        $('#results').empty()
        $('#listOfResults').empty();
        for (let calculation of response){
            $('#results').empty();
        if (calculation.operator === '+') {
            result = Number(calculation.inputOne) + Number(calculation.inputTwo)
            $('#results').append(`${result}`)
            $('#listOfResults').append(`
            <li>
                ${calculation.inputOne} + 
                ${calculation.inputTwo} =
                ${result}
            </li>
        `)
        } else if (calculation.operator === '-') {
            result = Number(calculation.inputOne) - Number(calculation.inputTwo)
            $('#results').append(`${result}`)
            $('#listOfResults').append(`
            <li>
                ${calculation.inputOne} - 
                ${calculation.inputTwo} =
                ${result}
            </li>
        `)
        } else if (calculation.operator === '*') {
            result = Number(calculation.inputOne) * Number(calculation.inputTwo)
            $('#results').append(`${result}`)
            $('#listOfResults').append(`
            <li>
                ${calculation.inputOne} * 
                ${calculation.inputTwo} =
                ${result}
            </li>
        `)
        } else if (calculation.operator === '/') {
            result = Number(calculation.inputOne) / Number(calculation.inputTwo)
            $('#results').append(`${result}`)
            $('#listOfResults').append(`
            <li>
                ${calculation.inputOne} / 
                ${calculation.inputTwo} =
                ${result}
            </li>
        `)
        } else {
            console.log('Error');
        }
    }
    })
}

