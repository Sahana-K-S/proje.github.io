
function btu_to_joules(){
    var input1=document.getElementById("energy1").value;
    var res1=input1*1055.06;
    document.getElementById("result4").value=res1;
}
function btu_to_wh(){
    var input2=document.getElementById("energy2").value;
    var res2=input2*0.293071;
    document.getElementById("result5").value=res2;
}
function j_to_kJ(){
    var input3=document.getElementById("energy3").value;
    var res3=(input3)/1000;
    document.getElementById("result6").value=res3;
}