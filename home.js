const cardsContainer = document.querySelector('.cards');

function scrollRight() {
    cardsContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

function scrollLeft() {
    cardsContainer.scrollBy({ left: -300, behavior: 'smooth' });
}
