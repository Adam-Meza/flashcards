const Turn = require('../src/Turn')

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.currentCardIndex = 0;
    this.turns = 0;
    this.currentTurn = {};
    this.incorrectGuesses = [];
  }

  takeTurn(userInput) {
    this.turns += 1;
    this.currentTurn = new Turn(userInput, this.currentCard);
    !this.currentTurn.evaluateGuess() ? this.incorrectGuesses.push(this.currentCard.id) : null;
    this.currentCardIndex += 1;
    this.currentCard = this.deck.cards[this.currentCardIndex];
    return this.currentTurn.giveFeedback();
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns * 100;
  }
  
  endRound() {
    return this.turns === this.deck.cards.length ? 
    `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!` : 
    "Round isn't over yet!";
  }
};

module.exports = Round;