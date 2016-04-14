
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('highscores').del(), 

    // Inserts seed entries
    knex('highscores').insert({name: 'fluffy', score: 2}),
    knex('highscores').insert({name: 'meow', score: 213}),
    knex('highscores').insert({name: 'dkffjd', score: 122}),
    knex('highscores').insert({name: 'dkffdjd', score: 210}),
    knex('highscores').insert({name: 'gfhh', score: 14}),
    knex('highscores').insert({name: 'Cat', score: 762}),
    knex('highscores').insert({name: 'meow', score: 231}),
    knex('highscores').insert({name: 'dkthed', score: 172}),
    knex('highscores').insert({name: 'Data', score: 220}),
    knex('highscores').insert({name: 'Uni', score: 109}),
    knex('highscores').insert({name: 'Silly', score: 2342}),
    knex('highscores').insert({name: 'New York', score: 2145}),
    knex('highscores').insert({name: 'Bibel', score: 13432}),
    knex('highscores').insert({name: 'Adele', score: 22110}),
    knex('highscores').insert({name: 'Michal', score: 11313})
  );
};