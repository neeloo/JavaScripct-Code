// // closure
// function out(){
//     let count=0;
//     function inner(){
//         count++;
//         return count;
//     }
//     return inner;
// }
// let c=out();
// console.log(c());   //1
// console.log(c());    //2



// function createcount(a,b){
//     function count(){
//         a=a+b;
//         return a;
//     }
//     return count;
// }
// let c=createcount(10,5);
// let d=createcount(3,2);
// console.log(c());
// console.log(d());
// console.log(c());
// console.log(d());


/**
 * nested closure-
 */

// function getname(firstname) {
//     console.log("i got first name");
//     return function getlastname(lastname) {
//         console.log("i got lastname");
//         return function geeter() {
//             console.log(`Hi i am ${firstname} ${lastname}`)
//         }
//     }
// }
// let c = getname("Nilu");
// // console.log(c)
// let d = c("Singh");
// // console.log(d);
// d();

// // short code like this
// getname("Swatnatra Praksha")("Verma")();




/** 
 * application of closure
 * 1-currying- talking one input at a time and use the input later
 */


// function  f1(firstname){
//     console.log("11");
//     return function f2(lastname){
//         console.log("12");
//         return function f3(){
//             console.log(` hi i am ${firstname} ${lastname}`);
//         }
//     }
// }
// const k=f1("anu");
// const h=k("patel");
// h();


// ashynchrounos code can not run without clouser

// console.log("Befour");
// function fn(){
//     console.log("i will explod");
// }
// setTimeout(fn,2000);
// console.log("after")


// Question 
// function outer() {
//     let arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function f() { console.log(i) });
//     }
//     return arr;
// }
// let arr = outer();
// arr[0](); //o/p->3
// arr[1]();  //o/p->3
// arr[2]();   //o/p->3

// q-2
// function out() {
//     let arr2 = [];
//     let i = 0;
//     for (i = 0; i < 3; i++) {
//         arr2.push(function f2() { console.log(i) });
//     }
//     return arr2;
// }
// let arr2 = out();
// arr2[0]();   //o/p->3
// arr2[1]();    //o/p->3
// arr2[2]();   //o/p->3

// q-3

// function oute(){
//     let a=[];
//     for(let i=0;i<3;i++){
//         a.push(function f3(){console.log(i)});
//     }
//     return a;
// }

// let a=oute();
// a[0]();       //o/p->0
// a[1]();        //o/p->1
// a[2]();         //o/p->2





// infinite curry
function counter(a) {
    let count = 0;
     if (a == 0) { count++; return count; }
     else {
        count++;
        return function inner(a) {
            count++;
            if (a == 0) { return count; }
            else { return inner; }

        }
    }
}
console.log(counter(0));  //1
console.log(counter()(0)) //2
console.log(counter()()(0))  //3




