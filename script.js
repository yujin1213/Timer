var tens = 0;
var seconds = 0;
var minutes = 0;
var secondsPlayer = 0;
var minutesPlayer = 0;

var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendTensPlayer = document.getElementById("tens-player");
var appendSecondsPlayer = document.getElementById("seconds-player");
var appendMinutesPlayer = document.getElementById("minutes-player");

var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var buttonPlus = document.getElementById("btn-plus");

var interval;
var isStarted = false;
var cntPlus = 0;

function startTimer(){
    //basic timer
    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }

    //player timer
    min = parseInt((cntPlus * 5) / 60);
    minutesPlayer = minutes + min;

    sec = (cntPlus * 5) % 60;
    secondsPlayer = (seconds + sec) % 60;

    if(seconds + sec > 59){
        minutesPlayer += 1;
    }

    appendTensPlayer.innerHTML = ('00' + tens).slice(-2);
    appendSecondsPlayer.innerHTML = ('00' + secondsPlayer).slice(-2);
    appendMinutesPlayer.innerHTML = ('00' + minutesPlayer).slice(-2);
};

buttonStart.onclick = function(){
    if(!isStarted){
        interval = setInterval(startTimer, 10);
        isStarted = true;
        buttonStart.style.display = "none";
        buttonStop.style.display = "block";
    }
};

buttonStop.onclick = function(){
    clearInterval(interval);
    isStarted = false;
    buttonStart.style.display = "block";
    buttonStop.style.display = "none";
};

buttonReset.onclick = function(){
    clearInterval(interval);
    
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";

    appendTensPlayer.innerHTML = "00";
    appendSecondsPlayer.innerHTML = "00";
    appendMinutesPlayer.innerHTML = "00";

    isStarted = false;
    cntPlus = 0;

    buttonStart.style.display = "block";
    buttonStop.style.display = "none";
};

buttonPlus.onclick = function(){
    if(isStarted){
        cntPlus++;
    }
};

document.body.onkeyup = function(e){
    if(isStarted & e.keyCode == 32){
        cntPlus++;
    }
};

