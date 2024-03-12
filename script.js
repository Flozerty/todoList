let cards = document.getElementById('todoCards');
const btn = document.getElementById('btn');
const listOfCards = cards.querySelectorAll('.todoCard');
let delBtn = document.querySelector('.delBtn');

const nbTasksDiv = document.querySelector('#nbTasks')

const nbTasksSpan = document.createElement('span')



// à la création d'une nouvelle tache
btn.addEventListener('click', () => {

  const newCard = listOfCards[0].cloneNode(true);
  cards.appendChild(newCard);

  let newDelBtn = newCard.querySelector('.delBtn');
  calcTasks()

  // actions quand on clique sur le bouton de suppression d'une tache
  newDelBtn.addEventListener('click', () => {
    newCard.remove();
    calcTasks()
  });
});

// actions quand on clique sur le bouton de suppression de la 1e tache
delBtn.addEventListener('click', () => {

  delBtn.parentNode.remove();
  calcTasks()
});

// fonction qui affiche le nombre de taches présentes
function calcTasks() {
  const listOfCards = cards.querySelectorAll('.todoCard');
  nbTasksSpan.innerText = listOfCards.length;
  nbTasksDiv.appendChild(nbTasksSpan)
}

calcTasks();
