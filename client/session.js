Template.session.sessions = function(){
  return Sessions.find({statut: "past"});
};
Template.session.events = {

  'click .modifyLink': function () {
    console.log("Hi" ,this)
    Session.set('formLinkIdSession', this._idSession);
    Session.set('formLinkUsername', this.username);
    $("#linkSubmit").val("");
  },

};
