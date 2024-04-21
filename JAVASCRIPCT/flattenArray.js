let a=[1,2,3,[4,5],[6,7,8,[9,10]]];


function flatten(arr){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        // check  element is - > array
        let ele=arr[i];
        let isEle=Array.isArray(ele);
        if(isEle){
            // flatten again
            let smallflatten=flatten(ele);
            // push to new array
            newarr.push(...smallflatten);
        }else{
            // push to new array
            newarr.push(ele);
        }
    }
    return newarr;
}
let f=flatten(a);
console.log(f);


// or short form of flatten array is using   ->>> Array.prototypa.flat();

let g=a.flat(1);
console.log(g);
let c=a.flat(2);
console.log(c)