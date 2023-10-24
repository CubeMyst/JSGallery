const body = document.body;
const btnToggle = document.getElementById('btn-toggle');

let currentHue = 0;
let intervalID;
let isRunning = false;

function changeBgColor() {
  body.style.background = `hsl(${currentHue}, 100%, 50%)`;
  currentHue = (currentHue + 1) % 360;
};

function toggleAnimation() {
  if (isRunning) {
    clearInterval(intervalID);
    btnToggle.textContent = 'start';
  } else {
    intervalID = setInterval(changeBgColor, 100);
    btnToggle.textContent = 'stop';
  };
  isRunning = !isRunning;
};

btnToggle.addEventListener('click', toggleAnimation);
toggleAnimation();
