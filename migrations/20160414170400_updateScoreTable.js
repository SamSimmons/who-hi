exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('highscores', function(table) {
   table.increments() 
   table.string('name')
   table.integer('score')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('highscores') 
};