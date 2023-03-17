const timer = document.querySelector('.timerNumber');
const start = document.querySelector('.buttonStart');
const pause = document.querySelector('.buttonPause');
const reset = document.querySelector('.buttonReset');

let timeHour = 00;
let timeMinute = 00;
let timeSecond = 00;
let pauseTimer = true;
let counter;

start.addEventListener('click', function (event) {
    pauseTimer = false;
    counter = setInterval(timerCounter, 1000);
    start.disabled = true;
}, false);



function timerCounter() {
    if (pauseTimer === false) {
        if (timeSecond === 60) {
            timeSecond = 00;
            timeMinute++;
        }
        if (timeMinute === 60) {
            timeMinute = 00;
            timeHour++;
        }
        timer.textContent = `${addZero(timeHour)}:${addZero(timeMinute)}:${addZero(timeSecond)}`;
        timeSecond++;
    }
}

pause.addEventListener('click', function (event) {
    if (pauseTimer) {
        pauseTimer = false;
        pause.textContent = 'Pause';
    } else {
        pause.textContent = 'Resume';
        pauseTimer = true;
    }
});

reset.addEventListener('click', function (event) {
    pauseTimer = true;
    timeHour = 00;
    timeMinute = 00;
    timeSecond = 00;
    clearInterval(counter);
    timer.textContent = `${addZero(timeHour)}:${addZero(timeMinute)}:${addZero(timeSecond)}`;
    start.disabled = false;
});

function addZero(time) {
    if (time >= 0 && time <= 9) {
        return `0${time}`;
    }
    return time;
}