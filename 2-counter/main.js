const counter = document.getElementById('counter');

const plus = document.getElementById('btn-plus');
const minus = document.getElementById('btn-minus');

let count = 0

const updateCounter = () => {
  counter.textContent = count
  counter.className = count > 0 && 'green';
}

plus.addEventListener('click', () => {
  count += 1
  updateCounter()
})

minus.addEventListener('click', () => {
  if (count >= 1) {
    count -= 1
    updateCounter()
  }
})

updateCounter()