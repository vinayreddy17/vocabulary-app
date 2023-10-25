const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  synonyms: [String],
  examples: [String],
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
