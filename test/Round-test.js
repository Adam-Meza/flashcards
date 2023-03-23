const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let deck,
  card1,
  card2,
  card3,
  card4,
  round;

  beforeEach(() => {
    card1 = new Card(1, "What is most recent album by Tyler, the Creator?", ["IGOR", "CALL ME IF YOU GET LOST", "Flower Boy", "WOLF"], "CALL ME IF YOU GET LOST");
    card2 = new Card(2, "How Many of Tyler's albums have won Grammys?", [2, 3, 1, 0], 2);
    card3 = new Card(3, "How Many of Tyler's albums is he wearing a hat on the cover?", [1, 2, 3, 4], 3);
    card4 = new Card(4, "Which song was his first to be a number one hit single?", ["IFHY", "SEE YOU AGAIN", "EARTHQUAKE", "Yonkers"], "EARTHQUAKE");
    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck);
    round.takeTurn("test");
  })

  it('should know the current card', () => expect(round.currentCard).to.deep.equal(card2))
  it('should update the turn',() => expect(round.turns).to.equal(1));
  it('should update current card', () => expect(round.currentCard).to.equal(card2));
  it('should store incorrect guesses', () => expect(round.incorrectGuesses).to.deep.equal([1]));

  it('should give feedback', () => {

    expect(round.currentTurn.giveFeedback()).to.equal('incorrect!');

    round.takeTurn(2);
    expect(round.currentTurn.giveFeedback()).to.equal('correct!');
  })
  
  it('should calculate the percentage of correct guesses', () => {

    expect(round.calculatePercentCorrect()).to.equal(0);

    round.takeTurn(2);
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should be able to end the round', () => {

    round.takeTurn(2);
    round.takeTurn(3);
    expect(round.endRound()).to.equal("Round isn't over yet!");

    round.takeTurn("incorrect Guess");
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});