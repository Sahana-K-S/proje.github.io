function age_calculator(){
    var input1=document.getElementById("dob").value;
    var input2=document.getElementById("cd").value;
    var dateOfBirth=new Date(input1);
    var Age=new Date(input2);

    if(input1==null||input1==''||input2==null||input2=='')
    {
        alert("Please provide all the needs");
    }
    else{
        var dobyear=dateOfBirth.getYear();
        var dobmonth=dateOfBirth.getMonth();
        var dobdate=dateOfBirth.getDate();
        var cdyear=Age.getYear();
        var cdmonth=Age.getMonth();
        var cddate=Age.getDate();
        yearAge=cdyear-dobyear;

        //get months  
        if (cdmonth >= dobmonth)  
          //get months when  given month is greater  
          var monthAge = cdmonth - dobmonth;  
        else {  
          yearAge--;  
          var monthAge = 12 + cdmonth - dobmonth;  
        }  
      
        //get days  
        if (cddate >= dobdate)  
          //get days when the given date is greater  
          var dateAge = cddate - dobdate;  
        else {  
          monthAge--;  
          var dateAge = 31 + cddate - dobdate;  
      
          if (monthAge < 0) {  
            monthAge = 11;  
            yearAge--;  
          }  
        }
    document.write(yearAge + " years, " + monthAge + " months, and " + dateAge + " days old.");  
    }
}