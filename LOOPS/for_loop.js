// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <=10 ; j++) {
       console.log(i+' * '+j+' = '+i*j);
       
        
    }
    
}

let myArray=["siddhi","Monali","Yogita","Sakshi"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}
