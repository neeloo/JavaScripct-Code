
// ***************gec************

// let cap  = {
//     //property
//     name:"smir",
//     //method
//     sayHi: function(){
//         console.log("hi ",this.name);

//     }
// }
// cap.sayHi();
// let hey=cap.sayHi;
//var name = "ramesh";
//hey();


// ************************** function **********************
// let cap = {
//     name: "mahi",
//     sayHi: function () {
//         console.log("i am first", this.name);
//         const inner = () => {
//             console.log("55", this.name);
//         }
//         inner();
//     }

// }
// cap.sayHi();

// *********************method***************

let cap = {
        name: "mahi",
        sayHi: function () {
            console.log("53", this.name);
            const inner = function() {
                console.log("55", this.name);
            }
            inner();
        }

    }
     cap.sayHi();




// ***************** arrarow function********************
// var name ="loki";
// let cap = {
//     name: "mahi",
//     sayHi: () => {
//         // arraro function will not its own this ,that will call outside
//         console.log("54", this.name);
//         const inner = () => {
//             console.log("55", this.name);
//         }
//         inner();
//     }

// }
// cap.sayHi();