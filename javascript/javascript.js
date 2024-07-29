var count=0;
var total=50;
function m1(){
    var msg = document.getElementById("text1");  
    count++;
    document.getElementById("i1").innerText=count;
    var remaining=total-count;
    document.getElementById("i2").innerText=remaining;
    if(count>50){
        alert("you cant enter more than 50 charcters");
    }
}