
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('scores').del(), 

    // Inserts seed entries
    knex('scores').insert({playerName: 'fluffy', score: 2}),
    knex('scores').insert({playerName: 'meow', score: 21}),
    knex('scores').insert({playerName: 'dkfjd', score: 12})
  );
};