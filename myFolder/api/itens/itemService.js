const Item = require('./item')

//Create REST API, adds CRUD to Mongog's schema
Item.methods(['get', 'post', 'put', 'delete'])

//Return post/put methods updated
Item.updateOptions({new: true, runValidators: true})

//Middleware to intercept post/put methods
Item.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

module.exports = Item
