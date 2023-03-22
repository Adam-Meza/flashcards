class Card {
  constructor(id, question, options, answer) {
    this.id = id,
    this.question = question,
    this.correctAnswer = answer,
    this.answers = options
  }
}

module.exports = Card