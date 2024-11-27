// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "1010E";
tinderUser.name = "Grithav";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularuser = {
  email: "sid1@gmail.com",
  fullname: {
    username: {
      firstnmae: "Siddhi",
      lastname: "Shelar",
    },
  },
};
console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.username.firstnmae);
