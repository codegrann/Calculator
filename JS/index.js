let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector("#screen");
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer;
    console.log("buffer", buffer);
}
function handleSymbol(symbol) {
    console.log('handleSymbol', symbol)
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator===null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer=+runningTotal;
            runningTotal=0;
            break;
        case '←':
            if(buffer.length===1){
                buffer="0"
            }else{
                buffer=buffer.substring(0, buffer.length - 1)
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}
function handleMath(symbol) {
    if (buffer === "0") {
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer)
    }
    previousOperator = symbol;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}
function init() {
    document.querySelector("#buttons")
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText)
        })
}

init();

// function getNthFibo(n) {
    // if (n <= 1) {
        // console.log(n);
    // } else {
        // console.log(getNthFibo(n - 1) + getNthFibo(n - 2));
    // }
// }

function getNthFibo(n) {
    if ( n <= 1)  return n;
    var sum = 0,
        last = 1,
        lastlast
    for (var i = 1; i < n; i++) {
        sum = lastlast + last;
        lastlast = last;
        last = sum;
     }
     return sum;
}

getNthFibo(2);