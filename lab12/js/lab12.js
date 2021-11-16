/* Lab 12: Conditionals
* Created: 11.15.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.15.2021
* License: Public Domain.
*/

//button variable
var buttonEl = document.getElementById("button");
//output variable
var outputEl = document.getElementById("output");

//sorts a name into a Hogwarts House
function sortingHat(str){
  var length = str.length;
  var mod = length % 4;
  let house = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
  return house[mod];
}

//event listener for button
buttonEl.addEventListener("click", function(){
  //variable for text field
  var name = document.getElementById("input");
  //outputs the sorted name to the page
  outputEl.innerHTML = "The Sorting Hat has sorted you into " + sortingHat(name.value);
})
