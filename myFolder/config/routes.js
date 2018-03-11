const express = require('express');
const itemQuerys = require('../api/itens/itemQuerys');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/api', router);

  //Registering API methods in router
  const itemService = require('../api/itens/itemService');
  itemService.register(router, '/item');

  //Search's routes
  router.get('/search-name/:name', itemQuerys.searchByName);

  const bagService = require('../api/bag/bagService');
  bagService.register(router, '/bag');

}

  // require('../api/itens/itemRoutes')(router, itemQuerys);
