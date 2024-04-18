let ladder = {
    step: 0,
    up() { this.step++; },
    down() { this.step--; },
    showstep: function () {
        console.log(this.step);

    }
};

// ladder.up();
// ladder.up();
// ladder.up();     //3
// ladder.down();      //3-1
// ladder.showstep();


ladder.up().up().up().down().showstep();