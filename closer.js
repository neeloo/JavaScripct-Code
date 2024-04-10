function creatcount(first,second){
    let a=first;
    let b=second;
    function count(){
        a=a+b;
        return a;
        
    }
    return count;


}
const c1=creatcount(10,5);
const c2=creatcount(15,6);

console.log(typeof c1);   //function
console.log(typeof c1());    //number

console.log(c1);  
console.log(c1());  

console.log(c1(),c1(),c1());

console.log(c2);
console.log(c2(),c2(),c2());