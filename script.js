
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startButton = document.getElementById("main-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

let timer;
let isRunning = false; 
let minutes = 0;
let seconds = 0; 
let milliseconds = 0;

function updateDisplay(minutes, seconds, milliseconds) {
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
    millisecondsDisplay.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}


startButton.addEventListener("click", () => {
    if (isRunning) return; 
    isRunning = true;
    timer = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0; 
            seconds++; 
        }
        if (seconds === 60) {
            seconds = 0; 
            minutes++; 
        }
        updateDisplay(minutes, seconds, milliseconds);
    }, 10);
});

stopButton.addEventListener("click", () => {
    clearInterval(timer); 
    isRunning = false;
});


resetButton.addEventListener("click", () => {
    clearInterval(timer); 
    isRunning = false;
    minutes = 0; 
    seconds = 0; 
    milliseconds = 0; 
    updateDisplay(minutes, seconds, milliseconds); 
});
