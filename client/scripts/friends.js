var Friends = {
    friendList: {},
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

        $('#chats').on('click', '.username', function(event){
            var username = $(this).text();
            var $friend = $('<span>' + " @" + username + "@ " + '</span>');
            $friend.toggleClass(username);
            $friend.appendTo('.friend');
            // hide all tags that don't have newFriend class
            $('.friend').not('span:contains("' + username + '")').children().hide();
            $('span[class="' + username + '"]').show();
        });
    }
};