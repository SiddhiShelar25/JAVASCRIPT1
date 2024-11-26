const arr = [1, 2, (3)[(4, 5, 6)], 7, 8, [6, (7)[(5, 4)]]];
const another_arr = arr.flat(Infinity);
console.log(another_arr);
