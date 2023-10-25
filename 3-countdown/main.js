import confetti from 'canvas-confetti'

const elements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  headlines: document.getElementById('headline'),
  content: document.getElementById('content'),
  countdown: document.getElementById('countdown'),
  confettis: document.getElementById('confetti')
};

function calculateCountdown() {
  const today = new Date();
  /* The line `const nextBirthday = new Date(today.getFullYear(), 6, 27);` is creating a new Date
  object representing the next birthday. */
  const nextBirthday = new Date(today.getFullYear(), 6, 27); // Cumpleaños el 27 de julio
  if (today > nextBirthday) nextBirthday.setFullYear(today.getFullYear() + 1);

  const distance = nextBirthday - today;
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function updateCountdown() {
  const countdown = calculateCountdown();
  let birthConfetti = confetti.create(elements.confettis, {
    resize: true,
    useWorker: true
  });

  if (countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) {
    elements.headlines.innerText = "¡Hoy es mi cumpleaños!";
    elements.countdown.style.display = 'none';
    elements.content.style.display = 'block';
    birthConfetti({
      particleCount: 100,
      spread: 260
    })
    clearInterval(countdownInterval);
  } else {


    elements.days.innerText = countdown.days;
    elements.hours.innerText = countdown.hours;
    elements.minutes.innerText = countdown.minutes;
    elements.seconds.innerText = countdown.seconds;
  }
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);
