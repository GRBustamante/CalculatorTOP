const cNumber = document.getElementById('currentNumber');
let buttons = document.querySelectorAll('.b');
let fButtons = document.querySelectorAll('.f');
const pNumber = document.getElementById('previousNumber')
const cOperator = document.getElementById('currentOperator')


// solving equation//
let equation = { //array??
    numberOne: 0,
    operator: '+',
    numberTwo: 0,
}
let numberInput = [];
function equate() {

    if (equation.operator == '+') {
        return (equation.numberOne + equation.numberTwo);
    }
}
equate();


//button script//
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.value != 'operator') {
            numberInput += e.target.getAttribute('data');
        }
        if (e.target.value = 'operator') {
            equation.numberOne = numberInput;
            equation.operator = e.target.getAttribute('data')
            console.log(numberInput)
            console.log(equation.operator)
        }
        if (e.target.value = 'equals') {
            console.log(equate());
        }
    })
});















// drop down menu script //
function dropMenu() {
    document.getElementById('dropMenu').classList.toggle('show');
}
window.onclick = function (event) {
    if (!event.target.matches('.dropButton')) {
        let dropdowns = document.getElementsByClassName('drop-items');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}