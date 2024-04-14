const inpinit = document.getElementById("init");
const inpdelta = document.getElementById("delta");

const btncounter = document.getElementById("btncounter");

const divcounter = document.getElementById("counters");

window.counters = [];

btncounter.onclick = function () {
    const counter = new Counter(inpinit.value, inpdelta.value);
    divcounter.appendChild(counter.el)
    counter.el.onclick = function () {
        counter.count();
    }
    window.counters.push(counter);
}


class Counter {
    constructor(init, delta) {
        this.init = Number(init);
        this.delta = Number(delta);
        ///create element
        this.el = document.createElement('div');
        this.el.innerText = `Count = ${init}`

    }
    get value() {
        return this.init;
    }
    set value(x) {
        this.el.innerText = `Count=${x}`
        this.init = x;

    }
    count() {
        this.value = this.value + this.delta;

    }

}