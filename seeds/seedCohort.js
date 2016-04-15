
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cohort').del(), 

    // Inserts seed entries
    knex('cohort').insert({name: 'ollie', image: 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/11755102_10207077597637783_135628108007763091_n.jpg?oh=1c43cc933976b98d8de0fcb2d60ae554&oe=57B0F69F&__gda__=1467224360_1bb275890cb5294929dbb9d941d861f9'}),
    knex('cohort').insert({name: 'vicken', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10156118_861187617242618_7083955535572245849_n.jpg?oh=249c4c683f5dc4329f7712b2a50d1761&oe=57B838C5'}),
    knex('cohort').insert({name: 'scully', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12195766_10206738472234464_2648511942900713497_n.jpg?oh=2167f08ea3bae690c084f6e1c18394f5&oe=577F1ED3'}),
    knex('cohort').insert({name: 'sam', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/552861_3380660118706_2068789465_n.jpg?oh=4ff18aeee86630eec1840bb3f5399116&oe=57BF8C1E'}),
    knex('cohort').insert({name: 'tony', image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12115477_10156272509795451_1369984710301991750_n.jpg?oh=3dffc50e14baec880f86b11b8f299cd6&oe=57B45DC5&__gda__=1467222152_db6c9f2b981c20c49cb074bf50c38da2'}),
    knex('cohort').insert({name: 'rahmona', image: 'https://avatars0.githubusercontent.com/u/15882785?v=3&s=400'}),
    knex('cohort').insert({name: 'maxine', image: 'https://avatars0.githubusercontent.com/u/16638694?v=3&s=400'}),
    knex('cohort').insert({name: 'jess', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'}),
    knex('cohort').insert({name: 'lizzie', image: 'https://avatars1.githubusercontent.com/u/12481990?v=3&s=400'}),
    knex('cohort').insert({name: 'heidi', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'}),
    knex('cohort').insert({name: 'george', image: 'https://avatars3.githubusercontent.com/u/16638647?v=3&s=400'}),
    knex('cohort').insert({name: 'andrew', image: 'https://avatars3.githubusercontent.com/u/16626969?v=3&s=400'}),
    knex('cohort').insert({name: 'rawad', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'}),
    knex('cohort').insert({name: 'ezra', image: 'https://avatars3.githubusercontent.com/u/12725412?v=3&s=400'}),
    knex('cohort').insert({name: 'keanu', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'}),
    knex('cohort').insert({name: 'james', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'}),
    knex('cohort').insert({name: 'rath', image: 'https://avatars3.githubusercontent.com/u/7039778?v=3&s=400'}),
    knex('cohort').insert({name: 'mahuta', image: 'https://avatars1.githubusercontent.com/u/14866662?v=3&s=400'}),
    knex('cohort').insert({name: 'mix', image: 'https://avatars3.githubusercontent.com/u/2665886?v=3&s=400'}),
    knex('cohort').insert({name: 'josh', image: 'https://avatars1.githubusercontent.com/u/72309?v=3&s=400'})
  );
};
