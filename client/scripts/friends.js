var Friends = {
    friendList: {},
    toggleStatus: function(){
        var username;
        $('#chats').on('click', '.username', function(){
            username = $(this).text();
        });
        if (!Friends.friendList[username]){
            Friends.friendList[username] = username;
        }else{
            delete Friends.friendList[username];
        }
        console.log(Friends.friendList);
    }
};