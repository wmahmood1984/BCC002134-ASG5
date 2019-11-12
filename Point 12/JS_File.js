var num = parseInt((Math.random()*100)+1)
var input1;


function Game(n){
function guessinGame(n){
var input1; 
var cond = false
var inputcount = ["first","Second","Third"]
for(var index = 1; index<=3; index ++){
    input = prompt("please enter "+inputcount[index-1]+" number")
    if(input == num){cond = true
    break;}}
return cond}

if(guessinGame(n)){input1 = prompt("You have won! Congratulations Would you like to play again?")}
else{input1 = prompt("you have lost! would you like to play again")}

if(input1.toLowerCase() === "yes"){Game(n)}
else{alert("Thanks for playing with us. ")}}

Game()
console.log(num)










