// const cap={
//     name:"steave",
//     sayhi:function(){
//         console.log("53",this.name);
//         const iamInerr=()=>{
//             console.log("55",this.name);
//         }
//         iamInerr()
//     }
// }
// cap.sayhi();



// cap.sayhi();
// let sayHi=cap.sayhi;
// sayHi();





// const cap = {
//     name: "steave",
//     sayhi: function () {
//         console.log("53", this.name);
//         function iamInerr() {
//             console.log("55", this.name);
//         }
//         iamInerr();
//     }
// }
// cap.sayhi();




let cap = {
    name: "steave",
    sayhi: () => {
        console.log("53", this.name);
    }
}
cap.sayhi();
let sayHi = cap.sayhi;
sayHi();



