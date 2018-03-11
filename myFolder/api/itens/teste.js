const mongoose = require('mongoose');

const testeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  amount: { type: Number, min: 0, required: true }
  })

const Teste = mongoose.model('Teste', testeSchema);

module.exports = Teste;
