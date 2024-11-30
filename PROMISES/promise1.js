  const promise1= new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },100)
  })
  promise1.then(function(){
    console.log("Prmises Consumed");
    
  })