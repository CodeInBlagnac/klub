Template.booksProposed.helpers({
  titles: () => new Library().nominees()
})
Template.gamesProposed.helpers({
  games: () => new Library().jnominees()
})
Template.videosProposed.helpers({
  videos: () => new Library().vnominees()
})

Template.itemsProposal.events({
  'click .suggestItem': () => {
    $('input#titleSubmit').val('')
    $('input#authorSubmit').val('')
    $('textarea#teaserSubmit').val('')
    $('input#siteSubmit').val('')
    $('input#originSubmit').val('')
  }
})
