/**
 * promise-> in js promise is object and object have two property
 * 1-state-> it have two type
 *      a-pending
 *       b-fullfield
 * 2-value->two
 *     a-undefind
 *     b-value from creater
 */

/*

let fs=require("fs");
console.log("before");
 const p=fs.promises.readFile("./f1.txt");
//  console.log(p);
 console.log("after");
 setTimeout(()=>{
    console.log("after promise")
    console.log("file:"+p)
 },20000);
 */


/**
 *  use of "then" and "catch"
 * then->is an event listener over promises ->function when promises is resolved(task is done)
 * catch-> is also a event listerner on promises ->when function promises is rejected(task is fail)
 * /
 /*
 

const fs = require("fs");
const p = fs.promises.readFile("./f1.txt");
p.then(function (futureV) {
    console.log("file" + futureV);
})
p.catch(function (error) {
    console.log("file" + error);
})

*/



// chaining promises****************

/*
const fs = require("fs");
console.log("before");
const p = fs.promises.readFile("./f1.txt");
p.then(function (future) {
    console.log("file:" + future);
}).catch(function (error) {
    console.log("file:" + error);
})
console.log("after")
*/


// nested then************
/*
const fs = require("fs");
console.log("Before")
const p = fs.promises.readFile("./f1.txt");
p.then(function (d) {
    console.log("file:" + d);
    const p2 = fs.promises.readFile("./f2.txt")
    p.then(function (d) {
        console.log("file:" + d);
        const p3 = fs.promises.readFile("./f3.txt");
        p.then(function (d) {
            console.log("file:" + d);
        })
    })
})
console.log("After")
*/

// chaining then*************
/*
let fs = require("fs");
const p = fs.promises.readFile("./f1.txt");
p.then(function (d) {
    console.log("file:" + d);
    return fs.promises.readFile("./f2.txt");
}).then(function (d) {
    console.log("file:" + d);
    return fs.promises.readFile("./f3.txt");
}).then(function(d){
    console.log("file:"+d);
})

*/


// QUESTION ->promisifiy fs.readfile into a promises

let fs=require("fs");
console.log("before");
function fn(filepath){
    return new promises((resolve,reject)=>{
        fs.readFile(filepath,function(e,d){
            if(e){ reject(e)}
            else {resolve(d)}
        })
    })
}

const p=fn("./f1.txt");
p.then(function(fu){console.log("file:"+fu)})
p.catch(function(e){ console.log("file:"+e)})
console.log("after")