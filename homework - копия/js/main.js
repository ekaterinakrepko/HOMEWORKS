// $(document).ready(function(){
//    $(".formCard").validationEngine({
//       "#email":{
//          "required": {
//             "message": "Пошта має містити з @"
//          }
//       }
//    })
// });
$(document).ready(function(){
   $(".formCard").validationEngine({
      'custom_error_messages':{
         "#email":{
            "required": {
               "message": "Поле обов'язкове"
            },
            'custom[email]':{
               "message": "Пошта має містити символ @"
            }
         }
      }
   })
});

/*$(document).ready(
   () => {
      $(".formCard").validationEngine(
         {
            "#email" : {
               "required" : {
                  "message": "Пошта має містити з @"
                  }
               }
         }
      )
   }
);
*/