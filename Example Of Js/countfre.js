//find max ele in array
/*
let arr=[1,2,4,2,3,4,3];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    
}console.log(max);


//count frequncy ele
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==max){
      count++;
    }
}
console.log( arr.length-count); 


//reverse array
let arr=[1,2,3,4,5];
let i=0;
let j=arr.length-1;
while(i<j){
    //swap element
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}console.log(arr);

*/


//reverse array given start and end  value
let a=[1,2,3,4,5,6,7,8,9];
let s=3;  let e=7;
while(s<e){
    let temp=a[s];
    a[s]=a[e];
    a[e]=temp;
    s++;
    e--;
}console.log(a);