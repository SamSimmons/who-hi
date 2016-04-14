exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cohort', function(table) {
   table.increments() 
   table.string('name')
   table.string('image')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohort') 
};