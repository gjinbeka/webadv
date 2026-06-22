funcion PrintNames(){
    docoument.write("My name is John");
    document.write("<br>");
    setTimeout(function(){document.write("ana")}, 2000);
    document.write("bob");

}

printNames();


var colors = ["red", "green", "blue", "yellow", "orange"];

function changebgcolor(){
    document.querySelector("body").style.backgroundColor = 
    colors[Math.floor(Math.random() * colors.length)];
}

var names = ["John", "Ana", "Bob", "Sara", "Tom"];

function changenames(){
    document.querySelector("p").innerHTML =
    names[Math.floor(Math.random() * names.length)];
}

setInterval(changebgcolor, 1000);
setInterval(changenames, 1000);