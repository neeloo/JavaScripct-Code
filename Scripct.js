const btn = document.getElementById("btn");

const status = document.getElementById('status');

const count = document.getElementById("count");

const counter = document.getElementById('counter');

let c = 0;


btn.onclick = function () {

    status.innerText = 'WAITING';

    const start = Date.now();

    while (Date.now() - start < 5000) { }

    status.innerText = 'DONE';
}

counter.onclick=function(){
    c++;
    console.log('counter=',c)
    count.innerText=c;
}