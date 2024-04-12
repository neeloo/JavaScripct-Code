function person(name,age){
    this.name=name;
    this.age=age;
}

const x= new person("nilu",25);
console.log(x);



const y=person("ns",25);
console.log(y);              //undefined
console.log(globalThis.name)  //ns
console.log(globalThis.age)   //25