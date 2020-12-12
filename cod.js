const alphabet = 'ЮБЬТИМСЧЯЭЖДЛОРПАВЫФЪХЗЩШГНЕКУЦЙЁюбьтимсчяэждлорпавыфъхзщшгнекуцйё'+
'mnbvcxzlkjhgfdsapoiuytrewqMNBVCXZLKJHGFDSAPOIUYTREWQ0123456789/?.><,\'\\"!@#№$;%^:&*()-_=+{}[]| '

let button = document.getElementById('button');
button.addEventListener("click", function() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    output.value = code(input.value);
});

function code(string) {
    let result = '';
    for (symbol of string) {
        resultSymbol = zeroGenerator(alphabet.indexOf(symbol).toString(2));
        result += resultSymbol != -1 ? resultSymbol : '';
    }
    return result;
}

function zeroGenerator(string) {
    return '0'.repeat(10 - string.length) + string;
}