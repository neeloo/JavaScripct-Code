/**Object _creation -> there are 4 ways of object creation 
 * ****************************
 * 1-Object literal->properties and method
 * 2-object creation with parent and without parent
 * 3-function constructer
 * 4-class constructer.
 * 
 * 
 */

// 1-
// let obj={
//     // property
//     name:"nilu",
//     add:{
//         street:"newyork",
//         city:"UK"
//     },
//     // method
//     sayHi:function(){
//         console.log(`Hi  i am ${this.name}`);
//     }
// };
// console.log(obj)


// Hirerachy-inbuild functin
// let arr=[];
// console.log(arr)  


// 2- create obj whithout parent
// let obj2=Object.create(null);
// obj2.name="not name";
// console.log(obj2);

// create obj with parent
let obj={
    // property
    name:"nilu",
    add:{
        street:"newyork",
        city:"UK"
    },
    // method
    sayHi:function(){
        console.log(`Hi  i am ${this.name}`);
    }
};
//console.log(obj)
let obj2=Object.create(obj);
//console.log(obj2)
obj2.name="anu";
console.log(obj2.name)

// prototype
console.log(obj2.isPrototypeOf(obj));
console.log(obj.isPrototypeOf(obj2));


// using loop 
for(let i in obj2){
    console.log(i);
}