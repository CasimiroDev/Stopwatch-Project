const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const display = document.getElementById('display')

startButton.addEventListener("click",start)
stopButton.addEventListener("click",stop)
resetButton.addEventListener("click",reset)

let [milliseconds, seconds, minutes, hours] = [0,0,0,0]
let interval = null

function showDisplay(){
    let [dHours, dMinutes, dSeconds, dMilliseconds] = ["","","",""]
    hours < 10 ? dHours = "0" + hours : dHours = hours;
    minutes < 10 ? dMinutes = "0" + minutes : dMinutes = minutes;
    seconds < 10 ? dSeconds = "0" + seconds : dSeconds = seconds;
    milliseconds < 1000 ?
        milliseconds < 100 ?
            milliseconds < 10 ?
                dMilliseconds = "00" + milliseconds : dMilliseconds = "0" + milliseconds
        : dMilliseconds = milliseconds
    :dMilliseconds = milliseconds

    display.innerHTML = `${dHours}:${dMinutes}:${dSeconds}:${dMilliseconds}`
}

function timer() {
    milliseconds += 10
    if(milliseconds == 1000){
        milliseconds = 0
        seconds++
    }
    if(seconds == 60){
        seconds = 0
        minutes++
    }
    if(minutes == 60){
        minutes = 0
        hours++
    }
    if(hours == 25){
        hours = 0
    }
    showDisplay()
}

function start(){
    if(interval){
        return
    }
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
    interval = null
}

function reset(){
    stop()
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.innerHTML = "00:00:00:000"
}