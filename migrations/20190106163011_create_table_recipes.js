
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('recipes').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('recipes', function(table) {
        table.increments();
        table.string('title');
        table.string('chef');
        table.text('ingredients');
        table.text('story');
        table.string('video_url');
        table.string('photo_url');
        table.text('preparation');

      })
    }
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
  
};
