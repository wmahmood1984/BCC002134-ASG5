var input = prompt("Please enter radius");
const pi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286
function calcCircumference(n){
  return 2 * pi * n
}
function calcArea(m){
    return pi * m
  }

console.log("Circumference of circle is "+calcCircumference(input))
console.log("Area of circle is "+calcArea(input))