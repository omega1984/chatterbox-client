var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room){
    $('#rooms select').append(`<div>${room}</div>`);
  }

};
