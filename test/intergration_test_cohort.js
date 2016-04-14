var redtape = require('redtape')
var request = require('supertest')
var App = require('../../server')
var dbConfig = require('../../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../../db')(knex)
var app = App(db)

// Setup: we need an initial empty tabel called cohort
// with the columns; id, name (string), image (string which is a url)

var testTableName = 'cohort'
var testSingleRow = 'cohor member'
var testIdObj = { id: 1 }
var testIdObj2 = { id: 2 }
var testIdObj3 = { id: 3 }

var testEntry = {
  id: 1,
  name: "Ben Scully",
  image: "http://i179.photobucket.com/albums/w298/Brakjones/cat-watermelon-helmet-img129d.jpg"
}

var testEntry2 = {
  id: 2,
  name: "Tony Luisi",
  image: "http://images.buycostumes.com/mgen/merchandiser/60697.jpg"
}

var testEntry3 = {
  id: 3,
  name: "Sam Simmons",
  image: "http://www.ufcbetting.com/wp-content/uploads/2011/07/dan-henderson-275x395.jpg"
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
