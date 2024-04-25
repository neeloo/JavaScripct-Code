/**setTimeout() and cleartimeout() */
// console.log("before")
// function fn(){
//     console.log("i  will explosive")
// }
// setTimeout(fn,2000);
// console.log("after")



// cleartimeout()
// console.log("before")
// function cb1() {
//     console.log("i  will explosive")
// }
// const id = setTimeout(cb1, 3000);
// function cb2() {
//     console.log("cancelling")
//     clearTimeout(id)
// }
// setTimeout(cb2, 2000)
// console.log("after")


// setInterval()
// console.log("before");
// function cb(){
//     console.log("interval call")
// }
// setInterval(cb,2000);
// console.log("after")

// clearInterval()
console.log("before");
function cb(){
    console.log("interval call")
}
const id=setInterval(cb,2000);
function cb2(){
    console.log("cancelling")
    clearInterval(id);
}
setTimeout(cb2,3000)
console.log("after")