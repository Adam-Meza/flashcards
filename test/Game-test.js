const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Game = require('../src/Game')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

describe('Game', () => {
  it('should be an instance of game', () => expect(game).to.be.an.instanceOf(Game))
  it('should keep track of turn', () => expect(game.turn).to.equal(1))
  it
})