//SELECTING ELEMENTS
screenForm = document.querySelector('#display');
screen = document.querySelector('input[type="text"]');
seven = document.querySelector('#seven');

//STYLES
screenForm.style.border = '2px solid red';
screen.style.border = '2px solid black';
screen.style.color='black';


//EVENTS
let append = () => {
    screen.value=seven.value;
    screen.style.backgroundColor = 'blue';
    // alert(seven.value);
}
let rmBg = () => {
    screen.style.backgroundColor = '';
}

seven.addEventListener('click', append);
// seven.addEventListener('mouseover', append);
seven.addEventListener('mouseout', rmBg);


