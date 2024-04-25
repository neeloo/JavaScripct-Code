// serial

// const fs=require("fs");
// console.log("before");
// const buffer=fs.readFileSync("./f1.txt");
// console.log(buffer)
// console.log("after")

// paraller
// const k=require("k");
// console.log("before");
// k.readFile("./f1.txt",function (e,d){
//     console.log(d);
// })
// console.log("after")


const h=require("h");
console.log("b")
let c1=h.readFileSync("./f1.txt")
let c2=h.readFileSync("./f2.txt")
console.log(c1+" "+c2);
console.log(a)
