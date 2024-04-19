let cap = {
    name: "steave",
    team: "Cap",
    pteam: function (m1, m2) {
        console.log(` hey ${this.name} and team of ${this.team}  and other member ${m1} and ${m2}`);
    }
}
let ironman = {
    name: "Tony",
    team: "iron man"

}

//use pteam methos ->> only once

//cap.pteam.call(ironman,);     //hey Tony and team of iron man
//cap.pteam.call(ironman,"thor","loki");    //hey Tony and team of iron man  and other member thor and loki



// apply()-borrow the method only once with n number of parameter

//cap.pteam.apply(ironman,["loki","thor"]);   //hey Tony and team of iron man  and other member loki and thor


// bind->making parameter copy of that method to used multiple time

let bindf = cap.pteam.bind(ironman);
bindf("loki", "thor");   //hey Tony and team of iron man  and other member loki and thor
bindf("namis", "tapan");//hey Tony and team of iron man  and other member namis and tapan


