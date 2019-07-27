var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // setInterval(App.fetch(), 3000);
  },

  toggleFriend: function(){
    $('#chats').on('click', '.username', function(event){
      var username = $(this).text();
      if (!Friends[username]){
        Friends[username] = username;
      }else{
        delete Friends[username];
      }
      console.log(Friends);
    });
  }, 

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      data.results.forEach(item => {
        var msg = MessageView.render({username: item.username, text: item.text, roomname: item.roomname});
        $('#chats').append(msg);
      });
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
