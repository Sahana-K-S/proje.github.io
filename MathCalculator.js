function math(){
    var no1=parseInt(document.getElementById("nm1").value);
    var no2=parseInt(document.getElementById("nm2").value);
    var r1=no1+no2;
    var r2=no1-no2;
    var r3=no1*no2;
    var r4=no1/no2;
    document.getElementById("res1").value=r1;
    document.getElementById("res2").value=r2;
    document.getElementById("res3").value=r3;
    document.getElementById("res4").value=r4;
}