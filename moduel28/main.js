var buttoni1=document.getElementById("buttoni1");


buttoni1.onclick=function(){
    alert("Hello ");
}

var buttoni2=document.getElementById("buttoni2");

buttoni2.onmouseover=function(){
    alert("bye");
}

var buttoni3=document.getElementById("buttoni3");

buttoni3.onmouseleave=function(){
    alert("goodbye");

}

var button=document.getElementById("buttoni1");
var txt1=document.getElementById("txt1");
button.onclick=function(){
    txt1.style.color="red";
    txt1.style.backgroundColor="lightgrey";
    txt1.style.textAlign="center";
    txt1.style.padding="20px";
    txt1.style.fontSize="100px";
}
 var button2=document.getElementById("buttoni2");

button2.onclick=function(){
    txt1.setAttribute("class","test");
}



