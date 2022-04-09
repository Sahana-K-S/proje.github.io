function bmi(){
    var input1=document.getElementById("hgt").value;
    var input2=document.getElementById("wgt").value;
    var BMI=(input2)/(input1*input1/10000);
    document.getElementById("result1").value=BMI;
    if(BMI<=18.4)
    {
        document.getElementById("result2").value="Underweight";
        document.getElementById("result3").value="Malnutrition";
    }
    else if(BMI>18.4 && BMI<=24.9)
    {
        document.getElementById("result2").value="Normal Weight";
        document.getElementById("result3").value="No Risk";
    }
    else if(BMI>24.9 && BMI<=29.9)
    {
        document.getElementById("result2").value="Overweight";
        document.getElementById("result3").value="Enhanced risk";
    }
    else if(BMI>29.9 && BMI<=34.9)
    {
        document.getElementById("result2").value="Moderately obese";
        document.getElementById("result3").value="Medium risk";
    }
    else if(BMI>34.9 && BMI<=39.9)
    {
        document.getElementById("result2").value="Severely obese";
        document.getElementById("result3").value="High Risk";
    }
    else{
        document.getElementById("result2").value="Very Severely obese";
        document.getElementById("result3").value="Very High Risk";
    }
}