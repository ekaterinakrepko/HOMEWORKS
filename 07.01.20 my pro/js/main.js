$(document).ready(function(){
/*$('p').mouseenter(function(){
  $(this).toggleClass("blue")
});
});
*/
/*$("input").focus(function(){
    console.log('focus')
});*/
/*$("input").validate({
  rules:{
    email:{
      required:true,
      email:true,
      minlength:5
    },
  },
  submitHandler: function(){
    alert("valid");
  }
});*/

$('#myForm').validationEngine();
});