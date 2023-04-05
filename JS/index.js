let runningTotal=0;
let buffer="0";
let previousOperator;
const screen=document.querySelector("#screen");
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value)
    }
    screen.innerText=buffer;
    console.log("buffer", buffer);
}
function handleSymbol(symbol){
   switch(symbol){
    case 'C':
        buffer='0';
        runnintTotal=0;
        break;
    case '+':
    case '-':
    case '&times;':    
    case '&divide;':
        handleMath(symbol)    ;
        break;
   }
}
function handleMath(symbol){
    if(buffer==="0"){
        return;
    }
    const intBuffer=parseInt(buffer);

    if(runningTotal===0){
        runningTotal=intBuffer;
    }else{
        flushOperation(intBuffer)
    }
    previousOperato=symbol;
    buffer="0";
}

function flushOperation(intBuffer){
    if(previousOperator==='+'){
        
    }
}

function handleNumber(numberString){
    if(buffer==='0'){
        buffer=numberString;
    }else{
        buffer +=numberString;
    }
}
function init(){
    document.querySelector("#buttons")
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText)
    })
}

init();


