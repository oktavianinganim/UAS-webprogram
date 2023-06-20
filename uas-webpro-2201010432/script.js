$(document).ready(function() {
    $('#calculate').click(function() {
        var number1 = $('#number1').val();
        var number2 = $('#number2').val();
        var operation = $('#operation').val();
        var result;

        if (operation === 'add') {
            result = parseFloat(number1) + parseFloat(number2);
        } else if (operation === 'subtract') {
            result = parseFloat(number1) - parseFloat(number2);
        } else if (operation === 'multiply') {
            result = parseFloat(number1) * parseFloat(number2);
        } else if (operation === 'divide') {
            result = parseFloat(number1) / parseFloat(number2);
        }

        $('#result').text('Hasil: ' + result);
    });
});
