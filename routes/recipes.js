const knex = require('../config/database.js');
module.exports = function(app) {
  app.get('/api/recipes', function(request,response) {
    knex('recipes')
      .then(function(data){
        return response.json(data);

      })
      .catch(function(error) {
        console.error(error);
      });
  })
}