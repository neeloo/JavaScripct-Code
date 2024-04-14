class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }

    // gettter function no need to any value
    get firstname() {
        return this.name.split(' ')[0];
    }

    //setter function need to a value
    set firstname(value) {
        const newname = this.name.split(' ');
        newname[0] = value;
        this.name = newname.join(' ');

    }

}

//function call
let p = new person("nilu", 25);
console.log(p);   //op=nilu,25

//get the name   using getter function
console.log(p.firstname);

//set the value using setter function
p.firstname = "spv"
console.log(p.firstname);
console.log(p)       //op=spv,25