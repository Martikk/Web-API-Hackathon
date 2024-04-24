const timerDisplay = document.getElementById('timer');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById ('pause')

let minutes = 0;
let seconds = 0;
let timerInterval = null;

function updateDisplay() {
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function addMinute() {
    minutes++;
    updateDisplay();
}

function subtractMinute() {
    if (minutes > 0) {
        minutes--;
        updateDisplay();
    }
}

function startTimer () {
    if (timerInterval !== null) {
        return;
    }
    timerInterval=setInterval (()=>{
        if (seconds ===0) {
            if (minutes ===0){
                pauseTimer ();
                alert ('Your time is Gone Ha-ha-ha-ha');
            } else {
                minutes--;
                seconds=59;
            }
        } else {
            seconds --;
        }
        updateDisplay();
    },1000)
}

function pauseTimer() {
    console.log("pauseTimer()");
    if (timerInterval !== null) {
        clearInterval (timerInterval);
        timerInterval = null;
    }
}

addButton.addEventListener('click', addMinute);
subtractButton.addEventListener('click', subtractMinute);
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);

updateDisplay();