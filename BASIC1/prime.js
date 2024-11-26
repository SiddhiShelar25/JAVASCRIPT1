let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let flag = false;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] == 1) {
    console.log(`${arr[i]} Not Prime Number!!`);
    continue;
  }
  if (arr[i] == 2) {
    console.log(`${arr[i]} Prime Number!!`);
  } else {
    flag = true;
  }
  if (flag === true) {
    if (arr[i] % 2 != 0) {
      console.log(`${arr[i]}Not Prime!!`);
    }
  }
}
