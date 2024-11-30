const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Siddhi", password: "1223" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  }, 1000);
});
promise4.then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("The promise is either resolved or solved"))
