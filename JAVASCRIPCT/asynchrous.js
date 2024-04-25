// console.log("before")
// function fn(){
//     console.log("write a minute code after");
// }
// setTimeout(fn,2000)
// console.log("after")

// 1-*************************
let a = true;
console.log("before")
setTimeout(() => {
    a = false;
    console.log("broke the while loop after 2 sec");
}, 2000);
console.log("after")
while  (a){

}


// 2-******************
// let a = true;
// console.log("before")
// setTimeout(() => {
//     a = false;
//     console.log("broke the while loop afetr 5 sec");
// }, 1000);
// console.log("after")
// let h=Date.now() +5000;
// while  (Date.now()<h){
// }

// 3-************************
// console.log("before")
// const cb2 = () => {
//     console.log("timeout");
//     while (1) { }
// }
// const cb1 = () => console.log("hellow");

// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);
// console.log("after")


// 4-
// console.log("before")
// const cb2 = () => {
//     console.log("timeout");
//     let h=Date.now() +5000;
//     while  (Date.now()<h){
//     }
//      }

// const cb1 = () =>  console.log("hellow");

// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);
// console.log("after")