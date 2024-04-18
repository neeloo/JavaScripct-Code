let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showstep: function () {
        console.log(this.step);
        return this;

    }
};

// ladder.up();
// ladder.up();
// ladder.up();     //3
// ladder.down();      //3-1
// ladder.showstep();


ladder.up().up().up().down().showstep();