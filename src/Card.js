class Card {
  constructor(numOfAnswers, question, options, answer) {
    this.question = question,
    this.correctAnswer = answer,
    this.answers = options
  }
}

module.exports = Card