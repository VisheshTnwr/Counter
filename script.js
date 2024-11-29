const counterValue = document.getElementById('counter_value');
const incrementBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

// Initialize the counter 
let counter = 0;

// Increment the counter
incrementBtn.addEventListener('click', ()=> {
    counter++;
    updatecounter();
})

// Decrement the counter
decreaseBtn.addEventListener('click', ()=> {
    counter--;
    updatecounter();
})

// Reset the counter

resetBtn.addEventListener('click', ()=> {
    counter = 0;
    updatecounter();
})

function updatecounter() {
    counterValue.textContent = counter;

    if (counter > 0) {
        counterValue.style.color = 'green';
      } else if (counter < 0) {
        counterValue.style.color = 'red'; 
      } else {
        counterValue.style.color = 'black';
      }
}