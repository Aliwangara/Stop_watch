
const watchDisplay = document.querySelector('.watch-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');


let seconds = 0;
let minute = 0;
let hours = 0;
let timer;
let isRunning = false;

function display(){
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minute++;
    }
    if(minute === 60){
        minute = 0;
        hours++
    }
    
    const sec = seconds <10 ? '0'+seconds:seconds;
    const min = minute<10 ? '0' + minute : minute;
    const hrs = hours<10 ? '0' + hours:hours

    
    watchDisplay.textContent = `${hrs} : ${min} : ${sec}`


}


startBtn.addEventListener('click', ()=>{
    if(!isRunning){
        timer = setInterval(display, 1000)
        isRunning = true
    }


})

pauseBtn.addEventListener('click', ()=>{
    if(isRunning){
        clearInterval(timer)
        isRunning=false
    }

})

resetBtn.addEventListener('click', ()=>{
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
        hours = 0;
        minute = 0;
        seconds = 0;
    }

    watchDisplay.textContent = `00 : 00 : 00`

})