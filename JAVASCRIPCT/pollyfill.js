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
Function.prototype.mycall=function(){
    console.log("hi i am invoked");
}
cap.pteam.mycall();

function fn (){
    console.log("Hellow i am");
}
fn.mycall();