const restful = require('node-restful')
const mongoose = restful.mongoose
const Item = require('../itens/item')

const bagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  itens: {type: [Item.schema], required:true}
})

module.exports = restful.model('Bag', bagSchema)