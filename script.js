
// capture the elements

const counter = document.getElementsByClassName('card');
const increment = document.getElementById('button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');

// keep track of the number
let incrementedNumber = 0;

// increment
increment.addEventListener('click', () => {
    incrementedNumber ++;
    counter[0].innerHTML = incrementedNumber;
})
// decrement
decrementButton.addEventListener('click', () => {
    incrementedNumber --;
    counter[0].innerHTML = incrementedNumber;
})
// reset
resetButton.addEventListener('click', () => {
    incrementedNumber = 0 ;
    counter[0].innerHTML = incrementedNumber;
})