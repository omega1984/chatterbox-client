var Friends = {
    friendList: {},
    toggleStatus: function(){
        // username is not defined;
        var username;
        $('#chats').on('click', '.username', function(event){
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