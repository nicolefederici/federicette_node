module.exports = function(app) {
  app.get('/api/recipes', function(request,response) {
    knex('recipes')
      .then(function(response){
        return response.json(response);

      })
      .catch(function(error) {
        console.error(error);
      });
  })
}