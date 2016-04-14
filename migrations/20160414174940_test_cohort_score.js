exports.up = function(knex, Promise) {
  return Promise.all([
	  knex.schema.createTableIfNotExists('highscores', function(table) {
	   table.increments() 
	   table.string('name')
	   table.integer('score')
	  }),

	  knex.schema.createTableIfNotExists('cohort', function(table) {
	   table.increments() 
	   table.string('name')
	   table.integer('image')
	  })
  ]) 
};

exports.down = function(knex, Promise) {
 return Promise.all([
  	knex.schema.dropTableIfExists('highscores'),
  	knex.schema.dropTableIfExists('cohort')
  ]) 
};