function calculate1(){
    var input1=document.getElementById("hz1").value;
    var p=input1* 6.283185;
    document.getElementById("result1").value=p;
}
function calculate2(){
    var input1=document.getElementById("hz2").value;
    var q=input1/1000;
    document.getElementById("result2").value=q;
}
function calculate3(){
    var input1=document.getElementById("hz3").value;
    var r=input1/1000000;
    document.getElementById("result3").value=r;
}
