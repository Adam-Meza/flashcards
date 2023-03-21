const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Game = require('../src/Game')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

describe('Deck', function() {

  let deck,
    card1,
    card2,
    card3,
    card4;

  beforeEach(() => {
    card1 = new Card(1, "What is most recent album by Tyler, the Creator?", ["IGOR", "CALL ME IF YOU GET LOST", "Flower Boy", "WOLF"], "CALL ME IF YOU GET LOST");
    card2 = new Card(1, "How Many of Tyler's albums have won Grammys?", [2, 3, 1, 0], 2);
    card3 = new Card(1, "How Many of Tyler's albums is he wearing a hat on the cover?", [1, 2, 3, 4], 3);
    card4 = new Card(1, "Which song was his first to be a number one hit single?", ["IFHY", "SEE YOU AGAIN", "EARTHQUAKE", "Yonkers"], "EARTHQUAKE");
    deck = new Deck([card1, card2, card3, card4]);
  });

  it('should be an instance of Deck', () => expect(deck).to.be.an.instanceOf(Deck));
  it('should take in any number of cards', () => expect(deck.cards).to.deep.equal([card1, card2, card3, card4]));
  it('should know how many cards it has', () => expect(deck.countCards()).to.equal(4));

});