// function fn(){
//     console.log("i am fn")
// }
// fn. count=0;

// fn. showfn=function(){
//     console.log("count",fn.count);

// }
// fn.showfn();

// variable- pass a parameter
// function fn(param){
//     console.log(param);
// }
// fn("hello");      // parameter
// fn([1,2,3,4]);   //array
// fn({name:"nilu"})    ///object


function fn(p){
    console.log(p)
    const vp=p();
    console.log(vp);
    return "outer fn"
}
fn(smaller);
function smaller(){
    console.log("i ams maller")
    return "hello";

}
