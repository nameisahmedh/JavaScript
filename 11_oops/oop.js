const user = {
    username: " Ahmed",
    userid : 142,
    signIn : true,
    getUserDetails : function(){
        console.log(`The username is ${this.username} with id as ${this.userid}`);
        
    }
}

console.log(user);
console.log(user.username);

user.getUserDetails()

