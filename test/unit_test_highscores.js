var redtape = require('redtape')
var App = require('../../server')
var dbConfig = require('../../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../../db')(knex)

// Setup: we need an initial empty tabel called highscores
// with the columns; id, name (string), score (integer)

var testTableName = 'highscores'
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


// db.getAll
test('gets all the rows from table = ' + testTableName + ' (in this case x1 entry)', function (t) {
  db.getAll(testTableName).then(function (err, resp) {
    Object.keys(testEntry).forEach(function (key) {
      t.equal(testEntry[key], resp[0][key], key + ': ' + testEntry[key] + ' is equal')
    })

    Object.keys(testEntry2).forEach(function (key) {
      t.equal(testEntry2[key], resp[1][key], key + ': ' + testEntry2[key] + ' is equal')
    })

    t.true(resp.length === 2, 'there should only be x2 seed rows in table ' + testTableName)
    t.end()
  })
})


test('gets a particular player & their highscore', function (t) {
  db.findOne(testTableName, testIdObj2).then(function (err, resp) {
    t.equal(resp.name, testEntry2.name, 'it got the players name')
    t.equal(resp.score, testEntry2.score, 'it got the player score')
    t.end()
  })
})


test('it adds ' + testEntry3.name + ' to the ' + testTableName + 'database', function (t) {
  db.add(testTableName, testEntry3).then(function (err, resp) {
    db.findOne(testTableName, testIdObj3, function (err, resp) {
      Object.keys(testEntry3).forEach(function (key) {
        t.equal(testEntry3[key], resp[key], key + ': ' + testEntry3[key] + ' is equal')
      })
      t.end()
    })
  })
})
