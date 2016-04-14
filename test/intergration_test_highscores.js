var redtape = require('redtape')
var request = require('supertest')
var App = require('../../server')
var dbConfig = require('../../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../../db')(knex)
var app = App(db)

// Setup: we need an initial empty tabel called highscores
// with the columns; id (integer), name (string), score (number)

var testTableName = 'highscores'
var testSingleRow = 'player'
var testIdObj = { id: 1 }
var testIdObj2 = { id: 2 }
var testIdObj3 = { id: 3 }

var testEntry = {
  id: 1,
  name: "pickachu",
  score: 2000
}

var testEntry2 = {
  id: 2,
  name: "bono",
  score: 3000
}

var testEntry3 = {
  id: 3,
  name: "conor mcgregor",
  score: 1000
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest(config)
      .then(function () {
        return knex(testTableName).insert(testEntry)
      })
      .then(function () {
        return knex(testTableName).insert(testEntry2)
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
test('it gets ALL ' + testTableName, function (t) {
  request(app)
    .get('/api/v1/' + testTableName)
    .expect(200)
    .end(function (err, res) {
      t.ok(res.body.length)

      Object.keys(testEntry).forEach(function (key) {
        t.equal(testEntry[key], res.body[0][key], key + ': ' + testEntry[key] + ' is equal')
      })

      Object.keys(testEntry2).forEach(function (key) {
        t.equal(testEntry2[key], res.body[1][key], key + ': ' + testEntry2[key] + ' is equal')
      })

      t.true(resp.length === 2, 'there should only be x2 seed rows in table ' + testTableName)
      t.end()
    })
})


// GET /cohort/:id
test('it gets ONE ' + testSingleRow, function (t) {
  request(app)
    .get('/api/v1/' + testTableName + '/1')
    .expect(200)
    .end(function (err, res) {

      t.ok(res.body)

      t.equal(1, res.body.id, "id given same as " + testSingleRow + ".id returned")

      Object.keys(testEntry).forEach(function (key) {
        t.equal(testEntry[key], res.body[key], key + ': ' + testEntry[key] + ' is equal')
      })
      t.end()
    })
})


// POST /api/vi/artists
test('it adds ONE ' + testSingleRow, function (t) {
  request(app)
    .post('/api/v1/' + testTableName)
    .send(testEntry3)
    .expect(200)
    .end(function (err, res) {

      t.ok(res.body)

      knex.select().from(testTableName)
        .then(function (resp) {
          t.true(resp.length === 3, "there are now x3 " + testSingleRow + " in the table")

          Object.keys(testEntry3).forEach(function (key) {
            t.equal(testEntry3[key], resp[1][key], '' + key + ': ' + testEntry3[key] + ' is equal')
          })
          t.end()
        })
    })
})
