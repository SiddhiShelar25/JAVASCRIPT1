const promise2= new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },100)
  }).then(function(){
    console.log("Async two resolved");
    
  })
    
