// serial

// const fs=require("fs");
// console.log("before");
// const buffer=fs.readFileSync("./f1.txt");
// console.log(buffer)
// console.log("after")

// paraller
// const fs=require("fs");
// console.log("before");
// fs.readFile("./f1.txt",function (e,d){
//     console.log(d);
// })
// console.log("after")

//concate two file if used synchrous
// const fs=require("fs");
// console.log("before")
// let c1=fs.readFileSync("./f1.txt")
// let c2=fs.readFileSync("./f2.txt")
// console.log(c1+" "+c2);
// console.log("after")


// Async
// const fs=require("fs");
// console.log("before");
// fs.readFile("./t1.txt",f1cb);
// function f1cb(e,d){
//     let c1=d;
//     fs.readFile("./f2.txt",f2cb);
//     function f2cb(e,d){
//         let c2=d;
//         console.log(c1+" "+c2);
//     }
// }console.log("after")



// or
const fs=require("fs");
console.log("before");

fs.readFile("./f1.txt",function(err,data){
    console.log(data)
});
fs.readFile("./f2.txt",function(err,data){
    console.log(data)
});
console.log("after")

