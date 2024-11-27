// function calculateCartPrice(...num1){ //rest/ spread operator
// return num1
// }
// console.log(calculateCartPrice(200,300,400));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));
