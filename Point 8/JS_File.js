var dt = new Date();
var dtOfBirth = new Date("08/13/1984")
var time = parseInt(dt.getTime() / 1000 / 60 /60 /24)
var birthTime = parseInt(dtOfBirth.getTime() / 1000 / 60 /60 /24)
var age = time - birthTime


var YMD = [365,30,1]
var YMDE = [" Years, "," Months, "," Days "]

function agedays(n){
var statement = "You are "
var value = n
for(var index = 0; value > 0; index++){
    statement = statement + Math.floor(value/YMD[index]) + YMDE[index] 
    value = Number(value - Math.floor(value/YMD[index])*YMD[index])
    
}
return statement}
console.log(agedays(age)+" old")
