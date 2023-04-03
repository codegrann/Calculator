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
   switch(value)
    case 'C':
        buffer='0';
        runnintTotal=0;
        break;
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


