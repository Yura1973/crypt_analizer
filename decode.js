let deButton = document.getElementById('decodeButton');
deButton.addEventListener("click", function() {
    let deInput = document.getElementById('decodeInput');
    let deOutput = document.getElementById('decodeOutput');
    deOutput.value = decode(deInput.value);
});

function decode(string) {
    let result = ''
    for (let i = 0; i < string.length; i += 10) { 
        nSumbol = parseInt(string.substring(i, i+10), 2);
        result += alphabet[nSumbol];
    }
     return result
}
