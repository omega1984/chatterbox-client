var Friends = {
    // friendList: {},
    toggleStatus: function(){
    //     $('#chats').on('click', '.username', function(event){
    //         var username = $(this).text();
    //         if (!Friends.friendList[username]){
    //             Friends.friendList[username] = username;
    //         }else{
    //             delete Friends.friendList[username];
    //         }
    //     });
    //     console.log(Friends.friendList);
    // }
        
        var username = App.name;
        $('span[data-user="' + username + '"]').remove();
        var $friend = $('<span>' + " @" + username + "@ " + '</span>');
        // add a class and attribute to the span we just created
        $friend.addClass('newFriend').attr('data-user', username);
        $friend.appendTo('.friend');
        // hide all tags that don't have newFriend class
        // $('.friend').not('span:contains("newFriend")').children().hide();
        // $('span[class="newFriend"]').show();
    }
};