// let cap = {
//     name: "steave",
//     team: "cap",
//     pteam: function () {
//         console.log(`hey ${this.name} and team ${this.team}`);
//     }
// }
// let ironman = {
//     name: "tony",
//     team: "iron man"
// }


//build pollyfills

// Function.prototype.mycall=function(){
//     console.log("hi i am invoked");
// }
// cap.pteam.mycall();

// function fn (){
//     console.log("Hellow i am");
// }
// fn.mycall();


// Function.prototype.mycall = function () {
//     //function is send as a this
//     let req = this;
//     //add that function to obj
//     ironman.req = req;
//     // with that obj your function
//     ironman.req();
// }
// cap.pteam.mycall(ironman);
// // or same as like that
// cap.pteam.call(ironman);



// pollyfill of call method*******************
let cap = {
    name: "steave",
    team: "cap",
    pteam: function (m1, m2) {
        console.log(`hey ${this.name} and team ${this.team} and member is ${m1} and ${m2}`);
    }
}
let ironman = {
    name: "tony",
    team: "iron man"
}
Function.prototype.mycall = function (reqobj, ...arg) {
    //function is send as a this
    let req = this;
    //add that function to obj
    reqobj.req = req;
    // with that obj your function
    reqobj.req(...arg);
    // deleted tha add function
    //delete reqobj.req;
}
// use of pollyfil()***************
let pteamf = cap.pteam;
pteamf.mycall(ironman, "loki", "thor");

//work same as write like that
// call()*************
cap.pteam.call(ironman, "subham", "madhu");

// apply()*************
cap.pteam.apply(ironman, ["samir", "sma"])

// bind()************
let pt = cap.pteam.bind(ironman);
pt("asma", "kirti");
pt("aakaskh", "anusaka");