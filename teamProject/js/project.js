/* Group 7 Team Project
* Created: 11.12.2021
* @author Logan Flansaas, Dylan Kolvenbach, Akilah Bussey, and Nkem Ndidi.
* @since  11.12.2021
* License: Public Domain.
*/

//add buttons for solar display
$("#solar-intro").append("<button id='solarBtn-economics'>Economics</button>");
$("#solar-intro").append("<button id='solarBtn-challenges'>Challenges</button>");
$("#solar-intro").append("<button id='solarBtn-myths'>Myths</button>");

//add subordinate buttons for the solar economics display
$("#solar-cost").before("<button id='solarBtn-cost'>Cost</button>");
$("#solarBtn-cost").after("<button id='solarBtn-materials'>Materials</button>");
$("#solarBtn-materials").after("<button id='solarBtn-land'>Land</button>");

//add subordinate buttons for the solar challenges display
$("#solar-challenge1").before("<button id='solarBtn-challenge1'>Challenge1</button>");
$("#solarBtn-challenge1").after("<button id='solarBtn-challenge2'>Challenge2</button>");
$("#solarBtn-challenge2").after("<button id='solarBtn-challenge3'>Challenge3</button>");

//add subordinate buttons for the solar myths display
$("#solar-myth1").before("<button id='solarBtn-myth1'>Myth1</button>");
$("#solarBtn-myth1").after("<button id='solarBtn-myth2'>Myth2</button>");
$("#solarBtn-myth2").after("<button id='solarBtn-myth3'>Myth3</button>");

//toggle button for the solar economics display
$("#solarBtn-economics").click(function(){
  if ($("#solar-economics").is(":visible")){
    $("#solar-economics").slideToggle();
  }
  else {
    $(".solarL1").slideUp();
    $("#solar-economics").slideToggle();
  }
  //hide subordinates
  $(".solarL2").hide();
})
//toggle button for solar cost display, subordinate to solar economics
$("#solarBtn-cost").click(function(){
  if ($("#solar-cost").is(":visible")){
    $("#solar-cost").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-cost").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})
//toggle button for solar materials display, subordinate to solar economics
$("#solarBtn-materials").click(function(){
  if ($("#solar-materials").is(":visible")){
    $("#solar-materials").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-materials").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})
//toggle button for solar land display, subordinate to solar economics
$("#solarBtn-land").click(function(){
  if ($("#solar-land").is(":visible")){
    $("#solar-land").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-land").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for the solar challenges display
$("#solarBtn-challenges").click(function(){
  if ($("#solar-challenges").is(":visible")){
    $("#solar-challenges").slideToggle();
  }
  else {
    $(".solarL1").slideUp();
    $("#solar-challenges").slideToggle();
  }
  //hide subordinates
  $(".solarL2").hide();
})

//toggle button for solar challenge1 display, subordinate to solar challenges
$("#solarBtn-challenge1").click(function(){
  if ($("#solar-challenge1").is(":visible")){
    $("#solar-challenge1").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-challenge1").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for solar challenge2 display, subordinate to solar challenges
$("#solarBtn-challenge2").click(function(){
  if ($("#solar-challenge2").is(":visible")){
    $("#solar-challenge2").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-challenge2").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for solar challenge3 display, subordinate to solar challenges
$("#solarBtn-challenge3").click(function(){
  if ($("#solar-challenge3").is(":visible")){
    $("#solar-challenge3").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-challenge3").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for the solar myths display
$("#solarBtn-myths").click(function(){
  if ($("#solar-myths").is(":visible")){
    $("#solar-myths").slideToggle();
  }
  else {
    $(".solarL1").slideUp();
    $("#solar-myths").slideToggle();
  }
  //hide subordinates
  $(".solarL2").hide();
})

//toggle button for solar myth1 display, subordinate to solar myths
$("#solarBtn-myth1").click(function(){
  if ($("#solar-myth1").is(":visible")){
    $("#solar-myth1").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-myth1").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for solar myth2 display, subordinate to solar myths
$("#solarBtn-myth2").click(function(){
  if ($("#solar-myth2").is(":visible")){
    $("#solar-myth2").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-myth2").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//toggle button for solar myth3 display, subordinate to solar myths
$("#solarBtn-myth3").click(function(){
  if ($("#solar-myth3").is(":visible")){
    $("#solar-myth3").slideToggle();
  }
  else {
    $(".solarL2").slideUp();
    $("#solar-myth3").slideToggle();
  }
  //hide subordinates
  $(".solarL3").hide();
})

//add buttons for wind display
$("#wind-intro").append("<button id='windBtn-economics'>Economics</button>");
$("#wind-intro").append("<button id='windBtn-challenges'>Challenges</button>");
$("#wind-intro").append("<button id='windBtn-myths'>Myths</button>");

//add subordinate buttons for the wind economics display
$("#wind-cost").before("<button id='windBtn-cost'>Cost</button>");
$("#windBtn-cost").after("<button id='windBtn-materials'>Materials</button>");
$("#windBtn-materials").after("<button id='windBtn-land'>Land</button>");

//add subordinate buttons for the wind challenges display
$("#wind-challenge1").before("<button id='windBtn-challenge1'>Challenge1</button>");
$("#windBtn-challenge1").after("<button id='windBtn-challenge2'>Challenge2</button>");
$("#windBtn-challenge2").after("<button id='windBtn-challenge3'>Challenge3</button>");

//add subordinate buttons for the wind myths display
$("#wind-myth1").before("<button id='windBtn-myth1'>Myth1</button>");
$("#windBtn-myth1").after("<button id='windBtn-myth2'>Myth2</button>");
$("#windBtn-myth2").after("<button id='windBtn-myth3'>Myth3</button>");

//toggle button for the wind economics display
$("#windBtn-economics").click(function(){
  if ($("#wind-economics").is(":visible")){
    $("#wind-economics").slideToggle();
  }
  else {
    $(".windL1").slideUp();
    $("#wind-economics").slideToggle();
  }
  //hide subordinates
  $(".windL2").hide();
})

//toggle button for wind cost display, subordinate to wind economics
$("#windBtn-cost").click(function(){
  if ($("#wind-cost").is(":visible")){
    $("#wind-cost").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-cost").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind materials display, subordinate to wind economics
$("#windBtn-materials").click(function(){
  if ($("#wind-materials").is(":visible")){
    $("#wind-materials").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-materials").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind land display, subordinate to wind economics
$("#windBtn-land").click(function(){
  if ($("#wind-land").is(":visible")){
    $("#wind-land").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-land").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})

//toggle button for the wind challenges display
$("#windBtn-challenges").click(function(){
  if ($("#wind-challenges").is(":visible")){
    $("#wind-challenges").slideToggle();
  }
  else {
    $(".windL1").slideUp();
    $("#wind-challenges").slideToggle();
  }
  //hide subordinates
  $(".windL2").hide();
})

//toggle button for wind challenge1 display, subordinate to wind challenges
$("#windBtn-challenge1").click(function(){
  if ($("#wind-challenge1").is(":visible")){
    $("#wind-challenge1").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-challenge1").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind materials display, subordinate to wind economics
$("#windBtn-challenge2").click(function(){
  if ($("#wind-challenge2").is(":visible")){
    $("#wind-challenge2").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-challenge2").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind land display, subordinate to wind economics
$("#windBtn-challenge3").click(function(){
  if ($("#wind-challenge3").is(":visible")){
    $("#wind-challenge3").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-challenge3").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})

//toggle button for the wind myths display
$("#windBtn-myths").click(function(){
  if ($("#wind-myths").is(":visible")){
    $("#wind-myths").slideToggle();
  }
  else {
    $(".windL1").slideUp();
    $("#wind-myths").slideToggle();
  }
  //hide subordinates
  $(".windL2").hide();
})

//toggle button for wind myth1 display, subordinate to wind myths
$("#windBtn-myth1").click(function(){
  if ($("#wind-myth1").is(":visible")){
    $("#wind-myth1").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-myth1").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind materials display, subordinate to wind economics
$("#windBtn-myth2").click(function(){
  if ($("#wind-myth2").is(":visible")){
    $("#wind-myth2").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-myth2").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})
//toggle button for wind land display, subordinate to wind economics
$("#windBtn-myth3").click(function(){
  if ($("#wind-myth3").is(":visible")){
    $("#wind-myth3").slideToggle();
  }
  else {
    $(".windL2").slideUp();
    $("#wind-myth3").slideToggle();
  }
  //hide subordinates
  $(".windL3").hide();
})

//add buttons for nuclear display
$("#nuclear-intro").append("<button id='nuclearBtn-economics'>Economics</button>");
$("#nuclear-intro").append("<button id='nuclearBtn-challenges'>Challenges</button>");
$("#nuclear-intro").append("<button id='nuclearBtn-myths'>Myths</button>");

//add subordinate buttons for the nuclear economics display
$("#nuclear-cost").before("<button id='nuclearBtn-cost'>Cost</button>");
$("#nuclearBtn-cost").after("<button id='nuclearBtn-materials'>Materials</button>");
$("#nuclearBtn-materials").after("<button id='nuclearBtn-land'>Land</button>");

//add subordinate buttons for the nuclear challenges display
$("#nuclear-challenge1").before("<button id='nuclearBtn-challenge1'>Challenge1</button>");
$("#nuclearBtn-challenge1").after("<button id='nuclearBtn-challenge2'>Challenge2</button>");
$("#nuclearBtn-challenge2").after("<button id='nuclearBtn-challenge3'>Challenge3</button>");

//add subordinate buttons for the nuclear myths display
$("#nuclear-myth1").before("<button id='nuclearBtn-myth1'>Myth1</button>");
$("#nuclearBtn-myth1").after("<button id='nuclearBtn-myth2'>Myth2</button>");
$("#nuclearBtn-myth2").after("<button id='nuclearBtn-myth3'>Myth3</button>");

//toggle button for the nuclear economics display
$("#nuclearBtn-economics").click(function(){
  if ($("#nuclear-economics").is(":visible")){
    $("#nuclear-economics").slideToggle();
  }
  else {
    $(".nuclearL1").slideUp();
    $("#nuclear-economics").slideToggle();
  }
  //hide subordinates
  $(".nuclearL2").hide();
})

//toggle button for nuclear cost display, subordinate to nuclear economics
$("#nuclearBtn-cost").click(function(){
  if ($("#nuclear-cost").is(":visible")){
    $("#nuclear-cost").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-cost").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear materials display, subordinate to nuclear economics
$("#nuclearBtn-materials").click(function(){
  if ($("#nuclear-materials").is(":visible")){
    $("#nuclear-materials").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-materials").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear land display, subordinate to nuclear economics
$("#nuclearBtn-land").click(function(){
  if ($("#nuclear-land").is(":visible")){
    $("#nuclear-land").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-land").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})

//toggle button for the nuclear challenges display
$("#nuclearBtn-challenges").click(function(){
  if ($("#nuclear-challenges").is(":visible")){
    $("#nuclear-challenges").slideToggle();
  }
  else {
    $(".nuclearL1").slideUp();
    $("#nuclear-challenges").slideToggle();
  }
  //hide subordinates
  $(".nuclearL2").hide();
})

//toggle button for nuclear challenge1 display, subordinate to nuclear challenges
$("#nuclearBtn-challenge1").click(function(){
  if ($("#nuclear-challenge1").is(":visible")){
    $("#nuclear-challenge1").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-challenge1").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear challenge2 display, subordinate to nuclear challenges
$("#nuclearBtn-challenge2").click(function(){
  if ($("#nuclear-challenge2").is(":visible")){
    $("#nuclear-challenge2").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-challenge2").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear challenge3 display, subordinate to nuclear challenges
$("#nuclearBtn-challenge3").click(function(){
  if ($("#nuclear-challenge3").is(":visible")){
    $("#nuclear-challenge3").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-challenge3").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})

//toggle button for the nuclear myths display
$("#nuclearBtn-myths").click(function(){
  if ($("#nuclear-myths").is(":visible")){
    $("#nuclear-myths").slideToggle();
  }
  else {
    $(".nuclearL1").slideUp();
    $("#nuclear-myths").slideToggle();
  }
  //hide subordinates
  $(".nuclearL2").hide();
})

//toggle button for nuclear myth1 display, subordinate to nuclear myths
$("#nuclearBtn-myth1").click(function(){
  if ($("#nuclear-myth1").is(":visible")){
    $("#nuclear-myth1").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-myth1").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear myth2 display, subordinate to nuclear myths
$("#nuclearBtn-myth2").click(function(){
  if ($("#nuclear-myth2").is(":visible")){
    $("#nuclear-myth2").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-myth2").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
//toggle button for nuclear myth3 display, subordinate to nuclear myths
$("#nuclearBtn-myth3").click(function(){
  if ($("#nuclear-myth3").is(":visible")){
    $("#nuclear-myth3").slideToggle();
  }
  else {
    $(".nuclearL2").slideUp();
    $("#nuclear-myth3").slideToggle();
  }
  //hide subordinates
  $(".nuclearL3").hide();
})
