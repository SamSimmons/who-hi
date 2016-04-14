
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('highscores').del(), 

    // Inserts seed entries
    knex('highscores').insert({name: 'fluffy', score: 2}),
    knex('highscores').insert({name: 'meow', score: 21}),
    knex('highscores').insert({name: 'dkfjd', score: 12}),
    knex('highscores').insert({name: 'dkfjd', score: 20}),
    knex('highscores').insert({name: 'gfhh', score: 1})
  );
};