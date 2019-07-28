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

    $('#chats').on('click', '.username', function(){
      Friends.toggleStatus();
    });
    $('button').on('click', function(){
      Rooms.add();
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      data.results.forEach((item) => {
        var msg = MessageView.render({username: item.username, text: item.text, roomname: item.roomname});
        $('#chats').append(msg);
      });
      // retrieve roomname from data and push them into roomNames array
      var roomNames = [];
      data.results.forEach(item => {
        if (item.roomname) roomNames.push(item.roomname);
      });
      // filter out duplicated roomnames and push the rest into html body
      Array.from(new Set(roomNames)).forEach(room => RoomsView.renderRoom(room));
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
