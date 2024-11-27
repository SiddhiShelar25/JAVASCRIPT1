const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3={obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj2));

console.log(Object.entries(obj3));
console.log(obj1.hasOwnProperty("b"));
