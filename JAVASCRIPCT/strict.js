// var name="mnish";
// window.name="loki";
// console.log(name);



// "use strict";

// name="loki";
// console.log(name)

//   **************************Q-1***************
// global execution context**********(gec)  use of strict mode given ->window object
// "use strict";
// let cap  = {
//         //property
//         name:"smir",
//         //method
//         sayHi: function(){
//             console.log("hi ",this.name);

//         }
//     }
//     cap.sayHi();
//     let hey=cap.sayHi;
//     var name = "loki";
//     hey();


// /*************2************ */

// "use strict";

// method call***********  given ->>>undefind

// let cap = {
//         name: "mahi",
//         sayHi: function () {
//             console.log("53", this.name);
//             const inner = function() {
//                 console.log("55", this.name);
//             }
//             inner();
//         }

//     }
//      cap.sayHi();



// *************3***********
// "use strict";

//function call************   given->>> current object

// let cap={
//     name:"loki",
//     say:function(){
//         console.log("98",this.name);
//         const iamIneer=()=>{
//             console.log("99",this.name);
//         }
//         iamIneer();
//     }
// }
// cap.say();


// *****************Q-4*************

"use strict";

// Arrarow function  *****************given ->this from outer scope
let cap = {
    name: "nilu",
    sayHi: function () {
        console.log("11", this.name);
        const subineer = () => {
            console.log("12", this.name);
            const inner = () => {
                console.log("13", this.name);
                const outer = () => {
                    console.log("14", this.name);
                }
                outer();
            }
            inner();
        }
        subineer();
    }
}
cap.sayHi();