const restful = require('node-restful')
const mongoose = restful.mongoose
const Teste = require('../itens/teste')

const bagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  itens: [Teste.schema]
})

module.exports = restful.model('Bag', bagSchema)