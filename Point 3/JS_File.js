var input = prompt("please enter your desired string")
function palindrome(n){
  reverse = ""
  for(var index = 1; index <=n.length; index++){
      reverse = reverse + n.charAt(n.length-index)}
  if(reverse === n){return "you have entered correct palindrome string"}
  else{return "The string you have entered is not palindrome"}
}
console.log(palindrome(input.toLowerCase()))