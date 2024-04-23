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



function createcount(a,b){
    function count(){
        a=a+b;
        return a;
    }
    return count;
}
let c=createcount(10,5);
let d=createcount(3,2);
console.log(c());
console.log(d());
console.log(c());
console.log(d());