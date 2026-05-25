var wakeuptime;
var daytime;
var sleeptime;
var noon = 12;


function showCurrentTime() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= 12) {
        meridian = "PM";
    }       

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";   
    Clock.innerText = clockTime;

}


function changeimage() {

    var time = new Date().getHours();
    console.log (time);

    var image=document.getElementById('clockImage');
    image.src = 'img/ds.clock.png';


    if{(time == wakeuptime){
        image.src = 'img/wakeup.png';
        console.log('morning');
        else if(time == daytime){
            image.src = 'img/afternoon.png';

        }
        else if(time == sleeptime){
            image.src = 'img/night.png';
        }
    }   
}


