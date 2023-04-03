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
}
function handleSymbol(symbol){

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


