const inpinit=document.getElementById("init");
const inpdelta=document.getElementById("delta");

const btncounter=document.getElementById("btncounter");

const divcounter=document.getElementById("counter");


class Counter{
    constructor(init,delta){
        this.init=init;
        this.delta=delta;
    }
    count(){
        this.init += this.delta;
    }

}