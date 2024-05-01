// callback hell***************
/**
 * readFile is tha callback function it take a path of file and callback
 */

// let fs=require("fs");
// console.log("before");
// fs.readFile("./f1.txt",function(e,d){
//     if(e) console.log("error");
//     else console.log("contest:"+d);
// });
// console.log("after");

// hard code of  callback******************
/*
let fs = require("fs");
console.log("before");
fs.readFile("./f1.txt", function (e, d) {
    if (e) { console.log("e") }
    else {
        console.log("file f1:" + d);
        fs.readFile("./f2.txt", function (e, d) {
            if (e) console.log("e");
            else {
                console.log("file f2:" + d);
                fs.readFile("./f3.txt", function (e, d) {
                    if (e) { console.log("error") }
                    else {
                        console.log("file f3:" + d);
                    }
                })
            }
        })
    }
})
console.log("after");
*/

// simple code callback hell function***********
/*
let fs = require("fs");
console.log("befire");
fs.readFile("./f1.txt", f1cb);
function f1cb(e, d) {
    if (e) {
        console.log("error");
    } else {
        console.log("f1:" + d);
        fs.readFile("./f2.txt", f2cb);
    }
}
function f2cb(e, d) {
    if (e) {
        console.log("eror")
    } else {
        console.log("f2:" + d);
        fs.readFile("./f3.txt", f3cb);
    }
}
function f3cb(e, d) {
    if (e) console.log("error");
    else {
        console.log("f3:" + d);
    }
}
console.log("after")
*/




