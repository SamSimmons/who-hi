var redtape = require('redtape')
var request = require('supertest')

var app = require('../app')

var config = require('../knexfile').test
var knex = require('knex')(config)

var db = require('../db/db')


// Setup: we need an initial empty tabel called highscores
// with the columns; id (integer), name (string), score (number)

var highscores = 'highscores'
var highscoresSingle = 'player'

var cohort = 'cohort'
var cohortSingle = 'cohort member'

var highscoresEntry = {
  name: "pickachu",
  score: 3000
}

var highscoresEntry2 = {
  name: "bono",
  score: 2000
}

var highscoresEntry3 = {
  name: "conor mcgregor",
  score: 1000
}

var cohortEntry = {
  name: "Ben Scully",
  image: "http://i179.photobucket.com/albums/w298/Brakjones/cat-watermelon-helmet-img129d.jpg"
}

var cohortEntry2 = {
  name: "Tony Luisi",
  image: "http://images.buycostumes.com/mgen/merchandiser/60697.jpg"
}

var cohortEntry3 = {
  name: "Sam Simmons",
  image: "http://www.ufcbetting.com/wp-content/uploads/2011/07/dan-henderson-275x395.jpg"
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest(config)
      .then(function () {
        return knex(highscores).insert(highscoresEntry)
      })
      .then(function () {
        return knex(highscores).insert(highscoresEntry2)
      })
      .then(function () {
        return knex(cohort).insert(cohortEntry)
      })
      .then(function () {
        return knex(cohort).insert(cohortEntry2)
      })
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback(config)
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback(config)
    .then(function () {
      t.end()
    })
})


// GET cohorts
test('It gets Top 10 from ' + highscores + ' DB & sends as JSON to Browser', function (t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      t.ok(res.body.length, 'basic test; at least something is returning :)')

      Object.keys(highscoresEntry).forEach(function (key) {
        t.equal(highscoresEntry[key], res.body[0][key], key + ': ' + highscoresEntry[key] + ' is equal')
      })

      Object.keys(highscoresEntry2).forEach(function (key) {
        t.equal(highscoresEntry2[key], res.body[1][key], key + ': ' + highscoresEntry2[key] + ' is equal')
      })

      t.true(res.body.length === 2, 'there should only be x2 seed rows in table ' + highscores)

      // TODO should this 'res' be a JSON object?
      // TODO it would be ok for there to be no scores but lets seed the DB with 'computer' AI scores
      // TODO (such as Mix, Josh etc)
      // TODO add testing for max top 10 scores
      // TODO add testing for scores in order
      // TODO add testing that every score is the correct format
      t.end()
    })
})


// GET /start
test('It gets all x18 ' + cohortSingle + 's from DB & sends as JSON to Browser', function (t) {
  request(app)
    .get('/start')
    .expect(200)
    .end(function (err,res) {
     
      t.ok(res.body, 'basic test; at least something is returning :)')

      Object.keys(cohortEntry).forEach(function (key) {
        t.equal(cohortEntry[key], res.body[0][key], key + ': ' + cohortEntry[key] + ' is equal')
      })

      // TODO should this 'res' be a JSON object?
      // TODO add testing for must be x18 records / cohort members
      // TODO add testing that every cohort member is the correct format
      t.end()
    })
})


// POST /api/vi/artists
test('It adds ONE ' + highscoresSingle + ' to the ' + highscores + ' DB & sends JSON of new Top 10 to Browser', function (t) {
  request(app)
    .post('/finish')
    .send(highscoresEntry3)
    .expect(200)
    .end(function (err,res) {
      t.ok(res.body, 'basic test; at least something is returning :)')
      Object.keys(highscoresEntry).forEach(function (key) {

        t.equal(highscoresEntry[key], res.body[0][key], key + ': ' + highscoresEntry[key] + ' is equal')
      })

      Object.keys(highscoresEntry2).forEach(function (key) {
        t.equal(highscoresEntry2[key], res.body[1][key], key + ': ' + highscoresEntry2[key] + ' is equal')
      })

      knex.select().from(highscores)
        .then(function (res) {
          t.true(res.length === 3, "there are now x3 " + highscoresSingle + " in the table")

          var newlyAdded = res.filter( function (val) {
            return val.name === highscoresEntry3.name && val.score === highscoresEntry3.score
          })

          Object.keys(highscoresEntry3).forEach(function (key) {
            t.equal(highscoresEntry3[key], newlyAdded[0][key], '' + key + ': ' + highscoresEntry3[key] + ' is equal')
          })

          t.end()
        })

    // TODO should this 'res' be a JSON object?
    // TODO it would be ok for there to be no scores but lets seed the DB with 'computer' AI scores
    // TODO (such as Mix, Josh etc)
    // TODO add testing for max top 10 scores
    // TODO add testing for scores in order
    // TODO add testing that every score is the correct format

    // TODO should this 'res' be a JSON object?
    // TODO add testing added object shoudl now be in the highscores DB
    // TODO add testing that every cohort member is the correct format
    })
})
