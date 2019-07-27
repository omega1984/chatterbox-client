var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%=username %></div>
        <div class="message"><%-text %></div>
        <div class="rooms"><%=roomname %></div>
      </div>
    `)

};