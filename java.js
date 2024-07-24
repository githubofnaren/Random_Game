var randomNum1=Math.floor(Math.random()*10+1);
randoImg1="/images/"+randomNum1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randoImg1);

var randomNum2=Math.floor(Math.random()*10+1);
randoImg2="/images/"+randomNum2+".png";
document.querySelectorAll("img")[2].setAttribute("src",randoImg2);


if(randomNum1==randomNum2){
    document.querySelector("h1").innerHTML="Damn its a draw, click again!😅!"

}
else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 won 😆"
}
else if(randomNum1==10){
    document.querySelector("h1").innerHTML="JACKPOT!!, DUDE 1 WON"
}
else if(randomNum2==10){
    document.querySelector("h1").innerHTML="JACKPOT!! DUDE 2 WON"
}
else{
    document.querySelector("h1").innerHTML="Player 2 won 😆"
}