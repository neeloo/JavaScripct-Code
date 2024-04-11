/*
function cc(f, s) {
    let a = f;
    let y = s;
    function count() {
        let x = 10; 
        let y = 5;
        x = x + y;
        return x

    } return count;
}
const c1 = cc(1, 6);
const c2 = cc(9, 9);
console.log(c1(), c1(), c1());
console.log(c2(), c2(), c2());

*/

function a() {
   // let x = 10;
    let p=1;
    console.log(x);
    function b() {
        //let x = 20;
        let q=2;
          console.log(x);
        function c() {
            //let x = 30;
            let r=3;
             console.log(x)
            function d() {
               // let x = 40;
                let s=p+q+r+4;
                console.log(x)

            }return d;

        }return c;

    }return b;

} a()()()();