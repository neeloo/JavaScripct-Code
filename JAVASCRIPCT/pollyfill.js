let cap={
    name:"steave",
    team:"cap",
    pteam:function(){
        console.log(`hey ${this.name} and team ${this.team}` );
    }
}
let ironman={
    name:"tony",
    team:"iron man"
}
//build pollyfills
// Function.prototype.mycall=function(){
//     console.log("hi i am invoked");
// }
// cap.pteam.mycall();

// function fn (){
//     console.log("Hellow i am");
// }
// fn.mycall();


Function.prototype.mycall=function(){
    //function is send as a this
    let req=this;
    //add that function to obj
    ironman.req=req;
   // with that obj your function
    ironman.req();
}
cap.pteam.mycall(ironman);