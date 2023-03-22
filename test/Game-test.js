const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Game = require('../src/Game')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Game', () => {

  let deck,
  card1,
  card2,
  card3,
  card4,
  round;

  beforeEach(() => {
    game = new Game()
  })

  it('should be an instance of game', () => expect(game).to.be.an.instanceOf(Game))
  it('should keep track of current round', () => expect(game.currentRound).to.be.an.instanceOf(Round))
  it('it should be able to make a new deck', () => expect(game.createDeck()).to.be.an.instanceOf(Deck))

})