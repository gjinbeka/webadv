var input=document.getElementById('input_id')
var button=document.getElementById('button_id')
var txt=document.getElementById('txt_id')


button.onclick=function(){
    if(input.value > 12
    ){
        txt.innerHTML="Value is greater than 12";
    }
    else if(input.value < 12){
        txt.innerHTML="Value is less than 12";
    }   
    else{
        txt.innerHTML="Value is equal to 12";
    }
}                 
