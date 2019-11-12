
var input = prompt("please enter your number")
function factorial(n){
  value = n 
  for (var index = 1; index <n; index++){
    value = value*(n-index)
  }
}
factorial(input)
console.log("Factorial of "+input+" is "+value)