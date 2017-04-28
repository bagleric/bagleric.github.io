//var timer = {
//    title: ""
//    , startTime: new Date()
//    , endTime: new Date()
//    , runTime: ""
//    , running: false
//    , seconds: 0
//    , minutes: 0
//    , hours: 0
//};
//
//document.getElementById("start").addEventListener("click", start);
//document.getElementById("pause").addEventListener("click", pause);
//document.getElementById("stop").addEventListener("click", stop);
//
//function getDate() {
//    document.getElementById("time").innerHTML = new Date();
//}
//
//function start() {
//    console.log("Function:Start");
//    timer.running = true;
//    timer.startTime = new Date();
//}
//
//function pause() {
//    console.log("Function:Pause");
//    timer.running = false;
//}
//
//function stop() {
//    console.log("Function:Stop");
//    timer.running = false;
//    timer.endTime = new Date();
//}
//
//function renderTime() {
//    getDate();
//    var time = calcTime();
//    displayTimer(time);
//}
//
//function displayTimer(time) {
//    //    console.log(timer.endTime);
//    document.getElementById("stopwatch").innerHTML = (timer.hours+ time[0]) + " : " + (timer.minutes+ time[1])+ " : " + (timer.seconds + time[2]);
//}
//
//function calcTime() {
//    if (timer.running === true) {
//        timer.endTime = new Date();
//        var total = timer.endTime - timer.startTime;
//        var seconds = (total / 1000);
//        var minutes = (seconds / 60);
//        var hours = (minutes / 60);
//        hours = Math.floor(hours) % 24;
//        minutes = Math.floor(minutes) % 60;
//        seconds =Math.floor(seconds) % 60;
//        var myArray = {hours, minutes, seconds};
//        return myArray;
//    }
//}
//
//
//function addSecond(){
//    if(timer.seconds === 60)
//        timer.seconds = 0;
//    timer.seconds++;
//}

//
//
//var start = setInterval(addSecond, 1000);
//
//document.getElementById(start).addEventListener("click", set)
//










































var timer = {
    on: false
    , startTime: 0
    , endTime: new Date()
    , pause: 0
    , pauseOn: false
    , totalTime: 0
    , getTotalTime: function () {
        timer.totalTime = (this.endTime - this.startTime + pause) / 1000
        return timer.totalTime;
    }
};
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("pause").addEventListener("click", pause);

function start() {
//    if (timer.pauseOn === true) timer.pauseOn = false;
//    if (timer.on === false) {
        timer.on = true;
        timer.startTime = new Date() - 0;
        console.log("Timer: ");
         console.log("start:" +timer.startTime );
         console.log("end: " +timer.endTime );
         console.log("pause: "+timer.pause );
         console.log("total: "+ timer.totalTime);
//        var canvas = drawCanvas();
//        //get the canvas URL and set the image value to the canvas
//        var dataURL = canvas.toDataURL();
//        document.getElementById("myImage").src = dataURL;
   // }
}

function pause() {
//    if (timer.on === false) {
//        timer.pauseOn = true;
        //        end = new Date();
        timer.pause = (timer.endTime - timer.startTime + timer.pause);
        var end = new Date();
        var pauseTime = end - timer.startTime;
        timer.pause = timer.pause + pauseTime;
        timer.startTime = 0;
        console.log("Timer: ");
         console.log("start:" +timer.startTime );
         console.log("end: " +timer.endTime );
         console.log("pause: "+timer.pause );
         console.log("total: "+ timer.totalTime);
//    }
}

function stop() {
    if (timer.on === true) {
        timer.on = false;
        if (timer.pauseOn === true) {
            timer.totalTime = timer.pause / 1000;
            return;
        }
        else {
            end = new Date();
                 console.log("Timer: ");
         console.log("start:" +timer.startTime );
         console.log("end: " +timer.endTime );
         console.log("pause: "+timer.pause );
         console.log("total: "+ timer.totalTime);
            timer.totalTime = (end - timer.startTime + timer.pause) / 1000;
        }
        //    if (timer.startTime === 0)
        //        timer.totalTime = timer.pause;
        //    else{
        //    timer.totalTime = timer.pause + timer.endTime - timer.startTime; 
        //    }
        var canvas = drawCanvas();
        var dataURL = canvas.toDataURL();
        document.getElementById("myImage").src = dataURL;
        //    timer.pause = 0;
    }
}

function degToRad(degree) {
    var factor = Math.PI / 180;
    return (degree * factor);
}

function renderTime() {
    if (timer.on === false) {
        timer.on = true;
        timer.startTime = new Date();
    }
    var canvas = drawCanvas();
    //get the canvas URL and set the image value to the canvas
    var dataURL = canvas.toDataURL();
    document.getElementById("myImage").src = dataURL;
}

function drawCanvas() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#28d1fa';
    ctx.lineWidth = 17;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds + (milliseconds / 1000);
    //background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 500, 500);
    //hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours % 12) * 30 - 90));
    ctx.stroke();
    //minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes % 60) * 6 - 90));
    ctx.stroke();
    //seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds % 60) * 6 - 90));
    ctx.stroke();
    // Date
    ctx.font = "25px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText("Total Time:" + timer.getTotalTime(), 100, 250);
    // Time
    ctx.font = "15px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText("End Time: " + timer.endTime, 100, 300);
    ctx.font = "15px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText("Start time:" + timer.startTime, 100, 270);
    ctx.font = "15px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText("Pause time:" + timer.pause, 100, 330);
    return canvas;
}