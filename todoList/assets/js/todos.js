// JavaScript File

/*The syntax checker in Cloud9 will complain if this 
is not present...*/

/* global $,jQuery */

console.log("js connected...");

// Check jQuery
var jQueryConnect = jQuery ? "js jQuery connected..." : "js jQuery FAILED connect!";
console.log(jQueryConnect);


/*check off specific todos by clicking
   By selecting the UL we get auto event 
   propagation for new elements. 
   
*/
$("#todoList").on("click", "li", function() {

   console.log("clicked: " + $(this).text());
   
   //the specific li that was clicked...
   $(this).toggleClass("completed");

   /*  This also might work, remember you cant say text-decoration. JS dissalows
     hypens for property names. use camel case textDecoration instead 
      or ["text-decoration"]
     $(this).css({
        opacity: 0.3,
       ["text-decoration"]: "line-through"
     });*/

});


/* this targets the li span but stops propagation to li click */
$("#todoList").on("click", "span", function(event) {
   
   console.log("clicked delete button");
   
   // jQuery event bubble suppression
   event.stopPropagation();

   /* fade out and remove the parent li */
   $(this).parent().fadeOut(500, function() {
      //this now refers to parent li, not span...
      $(this).remove();
   });
});



//var listElement = "<li><span class='btnDelete'>X </span>hello</li>"
var deleteIcon = "<i class='fa fa-trash' aria-hidden='true'></i>";

$("#container input[type='text']").keypress(function(event) {
   if (event.which === 13) {

      //console.log($(this).val());

      /* collect the value entered in input */
      var txtTodo = $(this).val();
      //clear the input control
      $(this).val("");

      //Showing 2 different ways to do this here:
      //var $newListElement = $("<li><span class='btnDelete'>X </span>" + txtTodo + "</li>");
      //$("#todoList").append($newListElement);
      $("#todoList").append("<li><span class='btnDelete'>" + deleteIcon + "</span>" + txtTodo + "</li>");

   }
});

$("#plus").on("click",function(){
   $("#container input").slideToggle("slow");
});