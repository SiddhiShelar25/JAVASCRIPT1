const user={
    username:"Siddhi",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);
        
    }

}
user.welcomeMsg()
user.username="Siddharth"
user.welcomeMsg()

// function hii(){
//     let username="Sid"
//     console.log(this.username);
    
// }
// hii()