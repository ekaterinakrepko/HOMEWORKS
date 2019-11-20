"use strict";
//1


function isNumberInRunge(number){
if(number > 0 && number < 10){
return true;
}else{
    return false;
}
}
console.log(isNumberInRunge(5));




//2
function isEven(c){
   if(c % 2 == 0){
       return true;
   }else {
       return false;
   }
}
console.log(isEven(4));

//3

let value = +prompt("value?", "");
switch(value){
    case 0:alert("0");break;
    case 1:alert("1");break;   
    case 2: 
    case 3:alert("2,3");break;
    
}



//4

function min(a,b){
    if(a < b){
        return a;
    } else{
        return b;
    }
}

console.log(min (2,9));