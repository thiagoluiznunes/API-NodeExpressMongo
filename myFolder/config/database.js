const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://user:password@localhost:2727/myDataBase',{useMongoClient: true})
