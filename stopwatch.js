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