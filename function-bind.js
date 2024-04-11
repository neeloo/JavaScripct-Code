function f1(){
    console.log(this);
}
f1();
let obj={a:10,b:"absdhhfk"};
const f2=f1.bind(obj)
f2();