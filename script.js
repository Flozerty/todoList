const btn = document.getElementById('btn');
const cards = document.getElementById('todoCards');
const card = cards.querySelector('.todoCard');


btn.addEventListener('click', () => {

  const newCard = card.cloneNode(true);
  cards.appendChild(newCard);
});