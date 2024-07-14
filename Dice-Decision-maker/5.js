
    
var imagelist =Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");


    
var n = Math.floor(Math.random()*6)+1;
document.getElementById("img1").setAttribute("src", imagelist[n]);



var m = Math.floor(Math.random()*6)+1;
document.getElementById("img2").setAttribute("src", imagelist[m]);

if (n > m){
    document.querySelector("h1").innerHTML = "Player 1 won.";
}

else if(n<m){
    document.querySelector("h1").innerHTML = "Player 2 won.";
}

else {
    document.querySelector("h1").innerHTML = "Draw.";
}