let a = { p: 10 };
let c = { k: 34 };

let b = Object.create(a);
console.log(a, b);                  // o/p =>{p:10}{}
console.log(b.p)                    //10

console.log(a.isPrototypeOf(b))     //true
console.log(b.__proto__ == a)       //true
console.log(a.isPrototypeOf(c))     //false

console.log(a == b)                //false (beacuse b is inheritance of a  not equal of a)
console.log(a === b)              //false (strong check)

let num=10;
console.log(num.__proto__);
console.log("nimg".__proto__)