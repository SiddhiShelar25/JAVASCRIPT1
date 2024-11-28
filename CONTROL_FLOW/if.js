// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature === 50) {
//   console.log("Less than 50");
// } else {
//   console.log("Greater than 50");
// }

//nested if else

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedFromEmail = true;

if (isUserLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedFromEmail) {
  console.log("User Logged in");
}
