/**
 * outer scope  is lexiacally scope
 * outer scope always define function definition
 */

// Q_1
// let n=20;    //outer scope
// function fn(){
//      let n=10;    // this is local scope if local scope is not present the call outer scope
//     console.log(n);
// }fn();

// outer scope always define function definition

// let a=10;
// function f(){        // function definition
//     console.log(a);
// }
// function f2(){
//     let a=90;
//     f();         //function call
//     console.log(a);
// }
// f2();



// memorization  ->
function cal(n){
    let sum=0;
    for(let i in n){
        sum=sum+i;
    }
    return sum;
}
// let k=cal(3);
// console.log(k)

function memo(fn){
    let p={}
    return function (n){
        let k=Object.keys(p).includes(n);
        if(k){return p[n]}
        else{
            const ans=fn[n];
            p[n]=ans;
            return ans;
        }
    }
}
let d=memo(cal);
console.time();
d(5);
console.timeEnd();