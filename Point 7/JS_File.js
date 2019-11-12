var dt = new Date("11/12/19");
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.write("<h1> Today is "+dt.getDate()+" "+month[dt.getMonth()]+" "+dt.getFullYear()+"<\h1><br/>")

if(dt.getDay() == 0 || dt.getDay() == 6){document.write("Today is weekend")}
else{document.write("Sorry!, you have to wait for "+Number(6-dt.getDay())+" more days")}

