Template.nextKlubsView.helpers({
  klubs: () => NextKlub.find({}, {sort: {date: +1}})
})

Template.nextKlubView.helpers({
  proposedBooksCount: () => new Library().proposedCount('book')
})

Template.nextKlubView.helpers({
  typeIs: function(type) {
    return this.type === type
  },
  stateIs: function(state) {
    return this.state === state
  }
})
