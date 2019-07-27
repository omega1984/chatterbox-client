var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // this.render();
  },

  // render: function(){
  //   Parse.readAll((data) => {
  //     for (var val of data.results){
  //       this.renderMessage(val);
  //     }
  //   });
  // },

  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }

};