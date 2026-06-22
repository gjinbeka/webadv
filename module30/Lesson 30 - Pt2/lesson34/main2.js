var circle = document.getElementById("circle");
var showline = document.getElementById("showline");
var timeStart = new Date().getTime();

function showcircle(){
    circle.style.display = "block";
    circle.style.top = Math.random() * 400 + "px";
    circle.style.left = Math.random() * 400 + "px";
    circle.style.backgroundColor = RandomColor();
    timeStart = new Date().getTime();
}

showcircle();

function RandomColor(){
    var s = "0123456789ABCDEF";
    var color = "#";

    for(var i = 0; i < 6; i++){
        color = color + s[Math.floor(Math.random() * 16)];

    }

    return color;
}

