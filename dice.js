var randomNumber1=Math.round(Math.random()*6)+1;

var randomImage="images/dice"+randomNumber1+".png";

var getImage=document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.round(Math.random()*6)+1;

var randomImage2="images/dice"+randomNumber2+".png";

var setImage=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 wins!!";
}
else if(randomNumber2>randomNumber1){
	document.querySelector("h1").innerHTML="Player 2 wins!!";

}
else{
	document.querySelector("h1").innerHTML="Draw!!";
}