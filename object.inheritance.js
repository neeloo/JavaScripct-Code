let a={p:10};

let b=Object.create(a);
console.log(a,b);        // o/p =>{p:10}{}
console.log(b.p)         //10

console.log(a.isPrototypeOf(b))   //true
console.log(b.__proto__ == a)       //true