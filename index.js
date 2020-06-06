  var randomnumber1=Math.random();
  randomnumber1=Math.floor(randomnumber1*6)+1;
  var randomDiceImage1="images/dice" + randomnumber1 + ".png";
  var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);


 var randomnumber2=Math.random();
 randomnumber2=Math.floor(randomnumber2*6)+1;
 var randomDiceImage2="images/dice" + randomnumber2 + ".png";
 var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


 if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="🚩 player 1 wins!";
 }
 else if(randomnumber2 > randomnumber1){
   document.querySelector("h1").innerHTML="🚩 player 2 wins!";
 }
 else{
   document.querySelector("h1").innerHTML="🚩 Draw!";
 }
