var tens = 0;
var seconds = 0;
var minutes = 0;
var tensPlayer = 0;
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
var intervalPlayer;
var isStarted = false;

function startTimer(){
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
        appendMinutes.innerHTML = "0"+ minutes;
    }
};

function startTimerPlayer(){
    tensPlayer++;

    if(tensPlayer < 9){
        appendTensPlayer.innerHTML = "0" + tensPlayer;
    }
    if(tensPlayer > 9){
        appendTensPlayer.innerHTML = tensPlayer;
    }
    if(tensPlayer > 99){
        secondsPlayer++;
        appendSecondsPlayer.innerHTML = "0" + secondsPlayer;
        tensPlayer = 0;
        appendTensPlayer.innerHTML = "0" + tensPlayer;
    }
    if(secondsPlayer > 9){
        appendSecondsPlayer.innerHTML = secondsPlayer;
    }
    if(secondsPlayer > 59){
        minutesPlayer++;
        appendMinutesPlayer.innerHTML = "0" + minutesPlayer;
        secondsPlayer = 0;
        appendSecondsPlayer.innerHTML = "0" + secondsPlayer;
    }
    if(minutesPlayer > 9){
        appendMinutesPlayer.innerHTML = "0"+ minutesPlayer;
    }
};

buttonStart.onclick = function(){
    if(!isStarted){
        interval = setInterval(startTimer, 10);
        intervalPlayer = setInterval(startTimerPlayer, 10);
        isStarted = true;
        buttonStart.style.display = "none";
        buttonStop.style.display = "block";
    }
};

buttonStop.onclick = function(){
    clearInterval(interval);
    clearInterval(intervalPlayer);
    isStarted = false;
    buttonStart.style.display = "block";
    buttonStop.style.display = "none";
};

buttonReset.onclick = function(){
    clearInterval(interval);
    clearInterval(intervalPlayer);
    
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";

    tensPlayer = 0;
    secondsPlayer = 0;
    minutesPlayer = 0;
    appendTensPlayer.innerHTML = "00";
    appendSecondsPlayer.innerHTML = "00";
    appendMinutesPlayer.innerHTML = "00";

    isStarted = false;
};

buttonPlus.onclick = function(){
    if(isStarted){
        secondsPlayer += 5;
    }
};

document.body.onkeyup = function(e){
    if(isStarted & e.keyCode == 32){
        secondsPlayer += 5;
    }
};

