// default parameter**************
// function fn(p1,p2,p3){
//     console.log(p1,p2,p3);
// }
// fn("hi","hellow","hey");   //hi hellow hey
// fn ("hi","hellow");       //hi hellow undefined

function fn(p1,p2,p3="default"){
    console.log(p1,p2,p3);
}
fn("hi","hellow");      //output-hi hellow default
     


// *******spread oprater***************
// let arr=[1,2,3,4,5];
// let arr2=arr;
// arr2.pop();
// arr2.push(100);
// arr2[2]=200;
// console.log(arr);    ///o/p->>>[ 1, 2, 200, 4, 100 ]

// use spread
let arr=[1,2,3,4,5];
let arr2=[...arr];
arr2.pop();
arr2.push(100);
arr2[2]=200;
console.log(arr);   // output-[ 1, 2, 3, 4, 5 ]



