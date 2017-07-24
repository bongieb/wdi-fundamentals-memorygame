/*****CARD VALUES*****/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

/*********************/

/*****GAME FUNCTIONS***********/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function createBoard(){
	shuffle(cards);//shuffle the order of cards everytime the page refreshed

	for (var i = 0; i < cards.length; i++){
		var card = document.createElement('div');
		card.setAttribute('data-card', cards[i]);
		card.className = 'card';
		gameBoard.appendChild(card);
	}
}

function addCardsInPlay() {


	if(this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="images/king-of-diamonds.png">';
	} else {
		this.innerHTML = '<img src="images/queen-of-hearts.png">';
	}


	cardsInPlay.push(this);
		
	if(cardsInPlay.length === 2){
		compareCards(cardsInPlay[0], cardsInPlay[1]);
	}
}

function compareCards(cardOne, cardTwo) {
	var cardOneValue = cardOne.getAttribute('data-card');
	var cardTwoValue = cardTwo.getAttribute('data-card');

	if (cardOneValue === cardTwoValue){
		setTimeout(function() {
			alert("You found a match!");
			cardOne.removeEventListener('click', addCardsInPlay);
			cardTwo.removeEventListener('click', addCardsInPlay);
			cardsInPlay = [];
		}, 500);
	} else {
		setTimeout(function() {
			alert("Sorry, try again.");
			cardOne.innerHTML = '';
			cardTwo.innerHTML = '';
			cardsInPlay = [];
		}, 500);
	}

}
/************************************/



var gameBoard = document.getElementById('game-board');

createBoard();//call function to create the game board

var cardElements = document.getElementsByClassName('card');

/*******Adding Cards In Play*******/
for (var j = 0; j < cardElements.length; j++){
	cardElements[j].addEventListener('click', addCardsInPlay);
}