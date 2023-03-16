const timer = document.querySelector('.timerNumber');
const start = document.querySelector('.buttonStart');
const pause = document.querySelector('.buttonPause');
const reset = document.querySelector('.buttonReset');

let timeHour = 00;
let timeMinute = 00;
let timeSecond = 00;
let pauseTimer = false;

start.addEventListener('click', function(event){
    setInterval(function(){
        if(timeSecond === 60 && pauseTimer !== false){
            timeSecond = 00;
            timeMinute++;
        }
        if (timeMinute === 60 && pauseTimer !== false){
            timeMinute = 00;
            timeHour++;
        }
        if (timeHour === 60 && pauseTimer !== false){
            timeHour = 00;
        }
        timer.textContent = `${addZero(timeHour)}:${addZero(timeMinute)}:${addZero(timeSecond)}`;
        timeSecond++;
    }, 1000);

    start.disabled = true;
});

pause.addEventListener('click', function(event){
    if(pauseTimer){
        pauseTimer = false;
    }else{
        pauseTimer = true;
    }
});





function addZero(time){
    if(time >= 0 && time <= 9){
        return `0${time}`;
    }
    return time;
}