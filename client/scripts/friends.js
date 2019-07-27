var Friends = {
    toggleFriend: function(){
        var username = $(this).text();
        if (!Friends[username]){
            Friends[username] = username;
        }else{
            delete Friends[username];
        }
        console.log(Friends);
      }, 
};