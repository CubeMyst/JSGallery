const form = document.querySelector('form');
const content = document.querySelector('.content');
const btnCopy = document.getElementById('btn-copy');

function genLoremIpsum(paragraphs, words) {
  const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed",
    "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua."
  ];

  let loremIpsum = '';

  for (let i = 0; i < paragraphs; i++) {
    for (let j = 0; j < words; j++) {
      const randomIndex = Math.floor(Math.random() * loremIpsumWords.length)
      const word = loremIpsumWords[randomIndex];
      loremIpsum += word + " ";
    }
    loremIpsum += '\n\n';
  }

  return loremIpsum;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const paragraphs = parseInt(document.getElementById('paragraphs').value);
  const words = parseInt(document.getElementById('words').value);

  const lorem = genLoremIpsum(paragraphs, words);

  content.textContent = lorem;

  document.querySelector('aside').style.display = 'flex'

  btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(lorem)
    alert('Copied the text')
  })
});


content.textContent = '';