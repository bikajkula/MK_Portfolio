var birth = new Date("2001-05-14");
var d = new Date();
var diff =(d.getTime() - birth.getTime()) / 1000;
diff /= (60 * 60 * 24);

diff = Math.abs(Math.floor(diff/365.25));
diff+="";
console.log(diff);
document.getElementById("age").innerHTML = diff;