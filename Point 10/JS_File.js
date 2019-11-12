var text = "To be or note to be and note";
          //0123456789
function searchVowel(n){
var searchText = ["a","e","i","o","u"]
var vowelsearch;
var count = 0

for(index1 = 0; index1<searchText.length; index1++){
    vowelsearch = searchText[index1]
for(index = 0; index <= n.length; index++){
    if(n.slice(index,index+1) === vowelsearch){count++}}

}
return console.log(count)}

searchVowel(text)