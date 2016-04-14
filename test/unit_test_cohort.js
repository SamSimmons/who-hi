var redtape = require('redtape')
var config = require('../knexfile').development;
var knex = require('knex')(config)

<<<<<<< HEAD
var db = require('../db')(knex)
=======


var db = require('../db/db')
>>>>>>> 081a4cc91e24b94cdb00ca30046cef39b99c5e19

// Setup: we need an initial empty tabel called cohort
// with the columns; id, name (string), image (string which is a url)

var testTableName = 'cohort'
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
  score: "http://www.ufcbetting.com/wp-content/uploads/2011/07/dan-henderson-275x395.jpg"
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
  db.getAll(testTableName).then(function (resp) {
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


test('gets a particular cohort members', function (t) {
  db.findOne(testTableName, testIdObj2).then(function (resp) {
    t.equal(resp.name, testEntry2.name, 'it got the cohort members name')
    t.equal(resp.image, testEntry2.image, 'it got the cohort members image url')
    t.true(String(resp.image).includes("http://"))
    t.end()
  })
})


test('it adds ' + testEntry3.name + ' to the ' + testTableName + 'database', function (t) {
  db.add(testTableName, testEntry3).then(function (resp) {
    db.findOne(testTableName, testIdObj3, function (resp) {
      Object.keys(testEntry3).forEach(function (key) {
        t.equal(testEntry3[key], resp[key], key + ': ' + testEntry3[key] + ' is equal')
      })
      t.end()
    })
  })
})
