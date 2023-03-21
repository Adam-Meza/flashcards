const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {
  let card;
  let turn;
  this.beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('Object', card)
  })
  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn)
  });

  it('should take in a guess and a card', () => {
    expect(turn.guess).to.equal('object')
    expect(turn.card).to.deep.equal(card)
  })

  it('should be able to to return guesses', () => {
    expect(turn.returnGuess()).to.equal(turn.guess);
    expect(turn.returnGuess()).to.equal('object')
  })

  it('should be able to to return the card', () => {
    expect(turn.returnCard()).to.deep.equal(card)
  })

  it('should be able to evalute guesses', () => {
    expect(turn.evaluateGuess()).to.be.true
  })

  it('should be able to give feedback', () => {
    expect(turn.giveFeedback()).to.equal('correct!')
  })




})