//refernace to current instance
// can use anywhere

//console.log(this)
console.log(this=== globalThis)
function printthis(){
    //console.log(this)
    console.log(this=== globalThis)
}
printthis();
let obj={
    a:10,
    b:true,
    c:"abcds",
    d : printthis

}
obj.d()