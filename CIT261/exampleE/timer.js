var theTimer = new Timer(0, 0, 0)
document.getElementById("start").addEventListener("click", function () {
    theTimer.start()
})
document.getElementById("pause").addEventListener("click", function () {
    theTimer.pause()
})
document.getElementById("stop").addEventListener("click", function () {
    theTimer.stop()
    console.log("stop")
})
document.getElementById("delete").addEventListener("click", function () {
        theTimer.resetTimer()
    })
    //drag and drop features
function drag(ev) {
    if (theTimer.isTiming == true) {
        return;
    }
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setDragImage(ev.target, 100, 100);
}

function drop(ev) {
    ev.preventDefault();
    theTimer.stop();
    var storageName = ev.target.id;
    var newTimer = theTimer;
    if (localStorage[storageName]){
        var tempTimer = JSON.parse(localStorage.getItem(storageName));
        console.log(tempTimer);
        newTimer.seconds = newTimer.seconds + tempTimer.seconds;
        if(newTimer.seconds > 60){
            newTimer.seconds = newTimer.seconds%60;
            newTimer.minutes++;
            }
        newTimer.minutes = newTimer.minutes + tempTimer.minutes;
        if(newTimer.minutes > 60){
            newTimer.minutes = newTimer.minutes%60;
            newTimer.hours++;
            }
        newTimer.hours = newTimer.hours + tempTimer.hours;
        console.log(newTimer);
        localStorage.setItem("newTimer", JSON.stringify(newTimer));
    }
    else{
        localStorage.setItem(storageName, JSON.stringify(newTimer));
    }
    
    var data = ev.dataTransfer.getData("text");
    ev.target.innerHTML = newTimer.getTimerTime();
    theTimer.resetTimer();
}

function allowDrop(ev) {
    ev.preventDefault();
}
//timer features.
function Timer(someHours, someMinutes, someSeconds) {
    //console.log(this)
    this.hours = someHours
    this.minutes = someMinutes
    this.seconds = someSeconds
    this.isTiming = false
    this.interval = null
    this.timerTime = null
    this.isStopped = false
    this.addSeconds = function () {
        //console.log("Function addseconds " + this)
        theTimer.seconds++
            if (theTimer.seconds == 60) {
                theTimer.seconds = 0
                theTimer.minutes++
            }
        this.showTimer()
    }
    this.start = function () {
        theTimer.isStopped = false
        if (theTimer.isTiming == false) {
            theTimer.isTiming = true
                //console.log("Function: Start " + this)
            theTimer.interval = setInterval(function () {
                //console.log("YOUR HERE " + this)
                theTimer.seconds++
                    if (theTimer.seconds == 60) {
                        theTimer.seconds = 0
                        theTimer.minutes++
                    }
                theTimer.showTimer()
            }, 1000)
        }
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("pause").style.visibility = "visible";
        document.getElementById("start").style.zIndex = "-5";
        document.getElementById("pause").style.zIndex = "2";
    }
    this.pause = function () {
        theTimer.isStopped = false
        if (theTimer.isTiming == true) {
            theTimer.isTiming = false
                //console.log("Function: Pause")
            clearInterval(theTimer.interval)
        }
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("pause").style.visibility = "hidden";
        document.getElementById("start").style.zIndex = "2";
        document.getElementById("pause").style.zIndex = "-5";
    }
    this.stop = function () {
        theTimer.isStopped = true
        theTimer.isTiming = false
            //console.log("Function: Stop")
        clearInterval(theTimer.interval)
        var time = theTimer.getTimerTime()
        document.getElementById("stop").style.visibility = "hidden"
        document.getElementById("delete").style.visibility = "visible"
        document.getElementById("delete").style.zIndex = "2";
        document.getElementById("stop").style.zIndex = "-5";
    }
    this.getTimerTime = function (destination) {
        //console.log("Function Display " + this + theTimer.seconds)
        var hours, minutes, seconds, time
        if (theTimer.hours < 10) {
            hours = "0" + theTimer.hours
        }
        else {
            hours = theTimer.hours
        }
        if (theTimer.minutes < 10) {
            minutes = ":0" + theTimer.minutes
        }
        else {
            minutes = ":" + theTimer.minutes
        }
        if (theTimer.seconds < 10) {
            seconds = ":0" + theTimer.seconds
        }
        else {
            seconds = ":" + theTimer.seconds
        }
        return hours + minutes + seconds
    }
    this.showTimer = function () {
        document.getElementById("timeElapsed").innerHTML = theTimer.getTimerTime()
    }
    this.resetTimer = function () {
        theTimer.hours = 0
        theTimer.minutes = 0
        theTimer.seconds = 0
        theTimer.isStopped = false
        theTimer.isTiming = false
        document.getElementById("start").style.zIndex = "2";
        document.getElementById("pause").style.zIndex = "-5";
        document.getElementById("stop").style.zIndex = "2";
        document.getElementById("delete").style.zIndex = "-5";
        document.getElementById("start").style.visibility = "visible"
        document.getElementById("pause").style.visibility = "hidden"
        document.getElementById("stop").style.visibility = "visible"
        document.getElementById("delete").style.visibility = "hidden"
    }
}
// Canvas Elements for drawing time.
function renderTime() {
    if (timer.on === false) {
        timer.on = true;
        timer.startTime = new Date();
    }
    var canvas = drawCanvas();
    //get the canvas URL and set the image value to the canvas
    var dataURL = canvas.toDataURL();
    document.getElementById("dragItem").src = dataURL;
}

function degToRad(degree) {
    var factor = Math.PI / 180;
    return (degree * factor);
}

function drawDigitalClock() {
    if (timer.on === false) {
        timer.on = true;
        timer.startTime = new Date();
    }
    var canvas = drawCanvas();
    //get the canvas URL and set the image value to the canvas
    var dataURL = canvas.toDataURL();
    document.getElementById("digitalClock").src = dataURL;
}

function drawCanvas() {
    var canvas = document.getElementById('timer');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#28d1fa';
    ctx.lineWidth = 17;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
    //background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 300, 100);
    //
    ctx.font = "72px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(theTimer.getTimerTime(), 10, 90);
    //console.log(theTimer.getTimerTime());
    return canvas;
}