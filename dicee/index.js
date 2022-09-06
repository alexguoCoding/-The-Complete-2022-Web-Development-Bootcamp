var  dice1=Math.ceil(Math.random() * (6));
    
console.log(dice1);
var dice1pic= "images/" +"dice"+dice1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1pic);

var  dice2=Math.ceil(Math.random() * (6));
console.log(dice2);
var dice2pic= "images/" +"dice"+dice2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2pic);

if(dice1>dice2){
    console.log('player1 win');
    document.querySelector('.result').innerHTML= "player1 win";
}
else if(dice1<dice2){
    console.log('player2 win');
    document.querySelector('.result').innerHTML= "player2 win";
}
else {
    console.log('no win');
    document.querySelector('.result').innerHTML= "no win";
}
