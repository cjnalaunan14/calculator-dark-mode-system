const display = document.getElementById("display");

function Display(input){
    display.value += input;
}

function Delete(){
    display.value = display.value.slice(0, -1);
}

function Reset(){
    display.value = '';
}

function Evaluate(){
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

const body = document.querySelector('.calculator');
const mode = document.querySelector('#toggle');
const frame = document.querySelector('.frame');
const buttons = document.querySelectorAll('#btn');
const screen = document.querySelector('#display');
const deletes = document.querySelectorAll('.delete');
const equal = document.querySelector('.equal');

function clicked() {
    if (mode.classList.contains('bx-bxs-sun')) {
        body.classList.add('calculator-dark');
        frame.classList.add('frame-dark');
        screen.classList.add('display-dark');
        deletes.forEach(del => {
            del.classList.add('delete-dark');
        });
        equal.classList.add('equal-dark');

        buttons.forEach(button => {
            button.classList.add('button-dark');
        });

        mode.classList.remove('bx-bxs-sun');
        mode.classList.add('bx-bxs-moon');
    } else {
        body.classList.remove('calculator-dark');
        frame.classList.remove('frame-dark');
        screen.classList.remove('display-dark');
        deletes.forEach(del => {
            del.classList.remove('delete-dark'); 
        });
        equal.classList.remove('equal-dark');

        buttons.forEach(button => {
            button.classList.remove('button-dark');
        });

        mode.classList.remove('bx-bxs-moon');
        mode.classList.add('bx-bxs-sun');
    }
}