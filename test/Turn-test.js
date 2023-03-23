const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {

  let card;
  let turn;
  
  beforeEach(() => {
    
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'Object');
    turn = new Turn('Object', card);
    turnIncorrect = new Turn('test', card);
  });

  it('should be an instance of Turn', () => expect(turn).to.be.an.instanceOf(Turn));

  it('should take in a guess and a card', () => {
    expect(turn.guess).to.equal('Object');
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to to return guesses', () => expect(turn.returnGuess()).to.equal('Object'));
  it('should be able to to return the card', () => expect(turn.returnCard()).to.deep.equal(card));
  it('should be able to evaluate guesses', () => {
    expect(turn.evaluateGuess()).to.be.true;
    expect(turnIncorrect.evaluateGuess()).to.be.false;
  });

  it('should be able to give postiive feedback', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turnIncorrect.giveFeedback()).to.equal('incorrect!');
  });
});