Template.bookCreate.helpers({
  buttonLabel: function () {
    return Session.get('formBookAuction');
  },
  titleLabel: function () {
    return Session.get('formTitle');
  }
});

Template.bookCreate.events({
  'submit form': function (event) {
    var _id = $("#_idSubmit").val(),
    book = $("input#bookSubmit").val(),
    author = $("input#authorSubmit").val(),
    teaser = $("input#teaserSubmit").val(),
    origin = $("input#originSubmit").val();

    event.preventDefault();
    if (!book) {
      throw alert("Il manque un titre !");
    }
    if (!author) {
      throw alert("Il manque un auteur !");
    }

    // Check to create a new book or update an old
    if (_id) {
      Books.update(_id, {
        title: book,
        author: author,
        teaser: teaser,
        origin: origin,
        statut: "proposed"
      });
    } else {
      Books.insert({
        title: book,
        author: author,
        teaser: teaser,
        origin: origin,
        statut: "proposed"
      });
    }
    $('#modalBook').modal('hide');
  }
});