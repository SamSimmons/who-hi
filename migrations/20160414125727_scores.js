exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('scores', function(table) {
   table.increments() 
   table.string('playerName')
   table.integer('score')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('scores') 
};