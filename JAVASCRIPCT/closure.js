// closure
function out(){
    let count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
let c=out();
console.log(c());   //1
console.log(c());    //2