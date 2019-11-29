"use strict"

//1

let ArrayWord = ['Кот', 'Собака', 'Жираф',"ігуана"];

searchArrayWord("Жираф",ArrayWord);

function searchArrayWord (name, mass)
{ 
   let result = false;
   // for(let i = 0; i < mass.length; i=i+1){
   //    if (name == mass[i] ){
   //       result=true;
   //    }else { 
   //       result=false;
   //    }
   // }
   
   let i = 0;
   while (!result) {
      if (name == mass[i] ){
         result=true;
      } 
      i++;     
      // код
      // также называемый "телом цикла"
   }
   return result;
} 


console.log(searchArrayWord("Жираф",ArrayWord));

 
 //ArrayWord =['Кот', 'Собака', 'Жираф'];
 
 /*
 some
some(callback[, thisObject])
Возвращает true хотя бы один элемент массива выполняет условие, в противном случае возвращает false.
 */