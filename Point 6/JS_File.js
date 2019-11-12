var arr1 = [5,3,7]   //12344


function mirrorway(n){
var mirror = n;
mirror.push(n.slice(n.length-1))
for(var index = 3; index<=n.length; index = index +2){
    mirror.push(n.slice(n.length-(index),arr1.length-(index-1)))
}return mirror}
document.write(mirrorway(arr1))



