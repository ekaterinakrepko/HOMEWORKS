 "use strict";

// //1
let chelovek = 'stepan';
 chelovek = 'katya';

let a = '1';
 if (a === '1'){
    console.log("Верно2");
 } else {
     console.log("Не верно2");
 }
a = 1;

 if (a === '1'){
     console.log("Верно1");
 } else {
     console.log("Не верно1");
 }
 a = 3;
 if (a === '1'){
    console.log("Верно3");
 } else {
    console.log("Не верно3");
 }


//    //2

 let item = false;
   if(item != true){
     console.log("Верно");
   } else{
       console.log("Не верно");
  }


  //3
   let b = 1;

   if(b < 4 && b > 0){
    console.log("Верно");
  }
  else{
    console.log("Не верно");

  }

  //4

  let c = 4;
 let  d = 16;
if( c > 3 && c < 12 || d >= 7 && d < 15){
    console.log("Верно"); 
}
else{
    console.log("Не верно")       
    
}


//5


let month = 13;
if(month > 2 && month < 6 ){
    console.log ("Вена")
}
else if(month > 6 && month < 9 ){
    console.log ("Лето")
  } else if(month > 8 && month < 12 ){
        console.log ("Осень")

}  else if(month >= 1 && month < 3){
    console.log ("Зима")
}else if(month <= 12){
    console.log ("Зима")
}