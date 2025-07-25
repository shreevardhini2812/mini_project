const cards = document.querySelectorAll(".memory-card");
let hasflippedcard = false;
let lockboard = false;
let firstcard, secondcard;
function flipcard() {
  if (lockboard) return;
  if (this === firstcard) return;

  this.classList.add("flip");

  if (!hasflippedcard) {
    hasflippedcard = true;
    firstcard = this;

    return;
  }

  secondcard = this;
  match();
}

function match() {
  let isMatch = firstcard.dataset.framework === secondcard.dataset.framework;

  isMatch ? disablecards() : unflipcards();
}

function disablecards() {
  firstcard.removeEventListener("click", flipcard);
  secondcard.removeEventListener("click", flipcard);

  resetboard();
}

function unflipcards() {
  lockboard = true;

  setTimeout(() => {
    firstcard.classList.remove("flip");
    secondcard.classList.remove("flip");

    resetboard();
  }, 1500);
}

function resetboard() {
  [hasflippedcard, lockboard] = [false, false];
  [firstcard, secondcard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let pos = Math.floor(Math.random() * 12);
    card.style.order = pos;
  });
})();

var but=document.getElementById("but");
but.addEventListener("click",()=>{
    (function shuffle() {
  cards.forEach(card => {
    let pos = Math.floor(Math.random() * 12);
    card.style.order = pos;
  });
})();
});

cards.forEach(card => card.addEventListener("click", flipcard));