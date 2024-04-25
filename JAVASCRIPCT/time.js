/**setTimeout() and cleartimeout() */
// console.log("before")
// function fn(){
//     console.log("i  will explosive")
// }
// setTimeout(fn,2000);
// console.log("after")



// cleartimeout()
console.log("before")
function cb1() {
    console.log("i  will explosive")
}
const id = setTimeout(cb1, 3000);
function cb2() {
    console.log("cancelling")
    clearTimeout(id)
}
setTimeout(cb2, 2000)
console.log("after")