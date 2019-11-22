"use strict"
function fib(n){
    let n1 = 1, n2 = 1;  
    var temp=0;
    for(let i = 2; i < n ; i++)
    {   
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n2;
}
console.log(fib(6));
//let n1 = 1; let n2 =1;  n > 0; n4 = n2 + n3
