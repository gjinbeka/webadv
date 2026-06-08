function validation(){
     
    var name = document.getElementById("name").value;

    var valid name_regex = /^[a-zA-Z]+$/;

    var age = document.getElementById("age").value;

    var valid age_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    var valid city_regex = /^[a-zA-Z]+$/;   


    if(!(name.match(valid name_regex)))||!(age.match(valid age_regex))||!(city.match(valid city_regex))) || (city--"")){


        if(!(name.match(valid name_regex))){
            document.getElementById("name_error").style.visibility = "visible";
            document.getElementById("name_error").innerHTML = "Name should only contain letters";
        }

       else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name_error").innerHTML = "";
    }   


    if(!(age.match(valid age_regex))){
            document.getElementById("age_error").style.visibility = "visible";
            document.getElementById("age_error").innerHTML = "Age should only contain numbers";
        }

       else{
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age_error").innerHTML = "";
    }   

    if(!(city.match(valid city_regex))){
            document.getElementById("city_error").style.visibility = "visible";
            document.getElementById("city_error").innerHTML = "City should only contain letters";
        }

       else{
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city_error").innerHTML = "";
    }   

    return false;

    }

    else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name_error").innerHTML = "";   
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age_error").innerHTML = "";   
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city_error").innerHTML = "";   
        return true;            
    }