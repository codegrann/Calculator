let runningTotal=0;
let buffer="0";
let previousOperator;
const screen=document.querySelector("#screen");
function buttonClick(value){
    if(typeof parseInt(value)=== 'number'){

    }else{
        
    }
}
function handleSymbol(){

}
function handleNumber(){

}
function init(){
    document.querySelector("#buttons")
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText)
    })
}

init();


