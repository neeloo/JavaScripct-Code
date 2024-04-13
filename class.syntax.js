class person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    isAdult(){
        return this.age>=18;
    }
    //setter and getter
    get firstname(){
        return this.name.split('  ')[0];
    }
    set firstname(value){
        const newn= this.name.split('')
        newn[0]=value;
        this.name=newn.join('');

    }
}
const p1=new person(" nilu singh",7);
console.log(p1)

console.log(p1.firstname);

p1.firstname='smir singh'
console.log(p1)



