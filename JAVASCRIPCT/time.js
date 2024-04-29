// /**setTimeout() and cleartimeout() */
// // console.log("before")
// // function fn(){
// //     console.log("i  will explosive")
// // }
// // setTimeout(fn,2000);
// // console.log("after")



// // cleartimeout()
// // console.log("before")
// // function cb1() {
// //     console.log("i  will explosive")
// // }
// // const id = setTimeout(cb1, 3000);
// // function cb2() {
// //     console.log("cancelling")
// //     clearTimeout(id)
// // }
// // setTimeout(cb2, 2000)
// // console.log("after")


// // setInterval()
// // console.log("before");
// // function cb(){
// //     console.log("interval call")
// // }
// // setInterval(cb,2000);
// // console.log("after")

// // clearInterval()
// // console.log("before");
// // function cb(){
// //     console.log("interval call")
// // }
// // const id=setInterval(cb,2000);
// // function cb2(){
// //     console.log("cancelling")
// //     clearInterval(id);
// // }
// // setTimeout(cb2,3000)
// // console.log("after")


// // create pollyfill  of setinterval

// function myfn(cb,d){
//     function fn(){
//         cb();
//         setTimeout(fn,d);
//     }
//     setTimeout(fn,d);
// }
// function cb(){
//     console.log("calling interval");
// }
// myfn(cb,1000)




// function fn(cb,delay){
//     let obj={flag:true};
//     function myfn(){
//         if(obj.flag==true){
//             cb();
//             setTimeout(myfn,delay);
//         }  
//     }
//     setTimeout(myfn,delay);
//     return obj;
// }
// function clinterval(obj){
//     obj.flag=false;
// }
// function cb(){
//     console.log("i will called")
// }
// let obj=fn(cb,1000);
// function cl(){
//     console.log("calles cb");
//     cl(obj);
// }
// setTimeout(cl,2000)




/**
 * reassign
 * create a prop
 * remove and create->seal
 * prevant,update,delete->freeze
 */


// reassign

let c={
    appname:"scaler",
    database:{
        name:"not",
        host:"210.0.0.1",
        pwd:"admin",
        user:"root"
    }
}
c.temp="127.0.018";
delete appname.database.pwd;
c.appname="interviewbit.com";
console.log(c)