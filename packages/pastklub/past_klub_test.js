PastKlub = new Meteor.Collection('test-pastklub')

removeAll = function () {
  PastKlub.find().fetch().map(function (klub) {
    PastKlub.remove(klub._id)
  })
}

/*
 Test futureI
*/

removeAll()

Tinytest.add('futureI with no klub', function (test) {
  test.equal(futureI(), 1)
})

Tinytest.add('futureI with klubs with a max i equal to 13', function (test) {
  PastKlub.insert({i: 1})
  PastKlub.insert({i: 5})
  PastKlub.insert({i: 13})

  test.equal(futureI(), 14)

  removeAll()
})
