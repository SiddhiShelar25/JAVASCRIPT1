// object Literals
const mySym = Symbol("key1");

const JSuser = {
  name: "Siddhi",
  city: "Pune",
  [mySym]: "myKey1",
  age: 22,
  email: "siddhishelar88@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};
console.log(JSuser.email);
console.log(JSuser["name"]);
console.log(JSuser[mySym]);
JSuser.name = "Siddhi Shelar";
Object.freeze(JSuser);
console.log(JSuser);
JSuser.greeting = function () {
  console.log("Hello JS User!!");
};
console.log(JSuser.greeting);
