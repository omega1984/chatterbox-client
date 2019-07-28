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
        var $friend = $('<span>' + " @" + username + "@ " + '</span>');
        // hide all tags that don't have newFriend class
        $('.friend').not('div:contains("newFriend")').children().hide();
        $friend.toggleClass('newFriend');
        $friend.appendTo('.friend');
        $('span[class="newFriend"]').show();
    }
};