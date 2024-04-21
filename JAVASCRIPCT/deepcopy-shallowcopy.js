// deep copy-do not copies value and referance
// let arr=[1,2,3,[4,5],6,7,8];
// let copid=arr;
// console.log(arr)
// copid[2]=100;
// console.log(arr)


// shallow copy-----value will be copy but differ memory
// spread oprater
let a=[1,2,3,[4,5,6],44,5,55];
let c=[...a];
c[3]=555;
console.log(a);
console.log(c)

// Object.assign()
let p=
{
    n:"ns",
    ln:"johan",
    add:{
        st:"north",
        city:"lko"
    },
};
let cp=Object.assign({},p);
cp.ln="singh";
console.log(p)
console.log(cp);


let cn={...p};

console.log(cn)

