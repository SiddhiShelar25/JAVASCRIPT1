const promise3= new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({username:"Siddhi",email:"siddhi@gmail.com"})
    },1000)
  })
 promise3.then(function(user){
console.log(user);

 })