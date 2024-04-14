//sum of two number
function sumOfTwoNumbers(a,b){
    return (a+b);
}

console.log(sumOfTwoNumbers(2,3));

//Q-2Write a JavaScript program to find the maximum number in an array.

let arr=[2,3,4,5,6,7];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max)
//direct method
console.log(Math.max(...arr));


//Q-3 Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) { 

   // return str === str.split(”).reverse().join(”); 
  
  }
  let s=isPalindrome("abcba");
  