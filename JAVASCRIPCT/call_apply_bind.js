// **********call()**********
// let cap = {
//     name: "steave",
//     team: "cap",
//     pteam: function (m1, m2) {
//         console.log(`i am  ${this.name} and member of team  ${this.team}`);
//         console.log(`i am working with  ${m1} and ${m2}`);

//     }
// }
// let ironman = {
//     name: "tony",
//     team: "Iron man"
// }
//cap.pteam(); 
//  o/p ->>> i am  steave and member of team  cap   
//  i am working with  undefined and undefined

//cap.pteam("black panther","spider man")  
//o/p>>>i am  steave and member of team  cap
//i am working with  black panther and spider man


//cap.pteam.call(ironman, 'nathasha', 'black panther');
//i am  tony and member of team  Iron man 
//i am working with  nathasha and black panther



// *************apply()**********************************

// let cap = {
//     name: "steave",
//     team: "cap",
//     pteam: function (m1, m2, ...otherM) {
//         console.log(`i am  ${this.name} and member of team  ${this.team}`);
//         console.log(`i am working with  ${m1} and ${m2} and ${otherM}`);

//     }
// }
// let ironman = {
//     name: "tony",
//     team: "Iron man"
// }

cap.pteam.apply(ironman, ["nathsa", "loki", "thor", "caption america", "spider man"]);

//   o/p->i am  tony and member of team  Iron man 
// i am working with  nathsa and loki and thor,caption america,spider man


// **********bind() copis function that yopu call latter************

let cap = {
    name: "steave",
    team: "cap",
    pteam: function (m1, m2, ...otherM) {
        console.log(`i am  ${this.name} and member of team  ${this.team}`);
        console.log(`i am working with  ${m1} and ${m2} and ${otherM}`);

    }
}
let ironman = {
    name: "tony",
    team: "Iron man"
}
let noteam = cap.pteam.bind(ironman);
noteam("nathasa","samira", "lokesh");


