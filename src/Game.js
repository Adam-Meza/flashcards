const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.data = data.prototypeData;
    this.deck = this.createDeck();
    this.currentRound = new Round(this.deck);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  createDeck(){
    let allCards = this.data.map((item) => 
    item = new Card(item.id, item.question, item.answers, item.correctAnswer));
    let newDeck = new Deck(allCards);
    return newDeck;
  }
};

module.exports = Game;