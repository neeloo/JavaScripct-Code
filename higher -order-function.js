const arr=[1,14,2,45,13,46,654,3,23,21]

function incomp(a,b){
  
    //return a-b        //sort arr increasing order
      //return b-a   //sort decreasing order
      return a<b
}

console.log(arr.sort(incomp))