var test = require('tape')
var cheerio = require('cheerio')

var chooseAnswer = require('./')
var chooseOption = require('./')

var buildDropdownElement = requrie('./')
var setAnswer = require('./')
var insertDom = require('./')
var populate = require('./')


var testAns = {name: 'andrew', image: 'https://avatars3.githubusercontent.com/u/16626969?v=3&s=400'}
var testOptions = [
  {name: 'ollie', image: 'https://www.facebook.com/photo.php?fbd7c2f29f80'},
  {name: 'vicken', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10156118_861187617242618_7083955535572245849_n.jpg?oh=249c4c683f5dc4329f7712b2a50d1761&oe=57B838C5'},
  {name: 'scully', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12195766_10206738472234464_2648511942900713497_n.jpg?oh=2167f08ea3bae690c084f6e1c18394f5&oe=577F1ED3'}
]

var testCohort = [
  {name: 'ollie', image: 'https://www.facebook.com/photo.php?fbd7c2f29f80'},
  {name: 'vicken', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10156118_861187617242618_7083955535572245849_n.jpg?oh=249c4c683f5dc4329f7712b2a50d1761&oe=57B838C5'},
  {name: 'scully', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12195766_10206738472234464_2648511942900713497_n.jpg?oh=2167f08ea3bae690c084f6e1c18394f5&oe=577F1ED3'},
  {name: 'sam', image: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/552861_3380660118706_2068789465_n.jpg?oh=4ff18aeee86630eec1840bb3f5399116&oe=57BF8C1E'},
  {name: 'tony', image: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12115477_10156272509795451_1369984710301991750_n.jpg?oh=3dffc50e14baec880f86b11b8f299cd6&oe=57B45DC5&__gda__=1467222152_db6c9f2b981c20c49cb074bf50c38da2'},
  {name: 'rahmona', image: 'https://avatars0.githubusercontent.com/u/15882785?v=3&s=400'},
  {name: 'maxine', image: 'https://avatars0.githubusercontent.com/u/16638694?v=3&s=400'},
  {name: 'jess', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'},
  {name: 'lizzie', image: 'https://avatars1.githubusercontent.com/u/12481990?v=3&s=400'},
  {name: 'heidi', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'},
  {name: 'george', image: 'https://avatars3.githubusercontent.com/u/16638647?v=3&s=400'},
  {name: 'andrew', image: 'https://avatars3.githubusercontent.com/u/16626969?v=3&s=400'},
  {name: 'rawad', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'},
  {name: 'ezra', image: 'https://avatars3.githubusercontent.com/u/12725412?v=3&s=400'},
  {name: 'keanu', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'},
  {name: 'james', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hello&w=550&h=550'},
  {name: 'rath', image: 'https://avatars3.githubusercontent.com/u/7039778?v=3&s=400'},
  {name: 'mahuta', image: 'https://avatars1.githubusercontent.com/u/14866662?v=3&s=400'}
]


test("Testing chooseAnswer function", function (t) {
  var ans = chooseAnswer(testCohort)
  t.ok(ans, 'returns something :)')
  t.true(ans typeof 'object', 'that something returned is an object')
  t.equal(Object.keys(ans).length, 2, 'returned answer has 2 keys')
  Object.keys(testAns).forEach( function (key) {
    t.true(ans[key] !== undefined, "choosen answer has the correct key(s)")
  })
  t.end()
})


test("Testing chooseOptions function", function (t) {
  var options = chooseOption(testCohort, testAns)
  t.ok(options, 'returns something :)')
  t.true(options typeof 'object', 'that something returned is an object')
  t.equal(options.length, 3, 'returned array has x3 options')

  var includesAns = options.filter(function (each) {
    return testAns.name === each.name && testAns.image === each.image
  })
  t.true(includesAns[0].length === 0, 'the is NOT included in one of additional options')

  options.forEach( function (each) {
    Object.keys(testAns).forEach( function (key) {
      t.true(options[each][key] !== undefined, "every option has the correct keys")
    })
  })

  t.end()
})


test("Testing buildDropdownElement function", function (t) {
  var element = buildDropdownElement(testOptions, testAns)
  t.ok(element, 'returns something :)')

  var $ = cheerio.load(element)

  var sel = $('select')
  t.equal(sel.length, 1, 'there is x1 select in the element')

  var opts = $('option')
  t.equal(opts.length, 4, 'there are x4 options in the select in the element')

  // opts.forEach( function (each) {
    // TODO check there is some data within the element
  // })

  t.end()
})


test("Testing buildDropdownElement function", function (t) {
  var element = buildDropdownElement(testOptions, testAns)
  var ok = insertDom(element)
  t.ok(ok, 'not sure how to test inserting in to the dom. probs nightwatch :)')

  t.end()
})
