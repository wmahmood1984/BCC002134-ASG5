var withdraw = prompt("please enter your withdraw amount")
var notes = [100,50,10]
var currencyNotes = [" Hundred notes, "," Fifty notes, "," Ten notes "]

function cashWithdraw(n){
var statement = "you will have "
var value = n
for(var index = 0; value > 0; index++){
    statement = statement + Math.floor(value/notes[index]) + currencyNotes[index] 
    value = Number(value - Math.floor(value/notes[index])*notes[index])
    
}
return statement}
if(withdraw%10 === 0){console.log(cashWithdraw(withdraw))}
else{console.log("please enter amount in multipe of 10s")}
