function loadTasks() {
    console.log("Function: loadTasks");
    //if (sessionStorage.getItem("myTasks") !== undefined) {
      //  return;
    //}
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log("AJAX:succesful");
            var object = JSON.parse(xmlhttp.responseText);
            console.log(object);
            sessionStorage.setItem("myTasks", xmlhttp.responseText);
        } else {
            console.log("AJAX: working");
        }
    };
    xmlhttp.open("GET", "https://bagleric.github.io/CIT261/Project1-AJMusic/tasks.json", true);
    xmlhttp.send();
}

function getTask(itemId) {
    console.log(itemId);
    console.log("Function: getTask()");
    var myTasks, i, object, size;
    
    object = sessionStorage.getItem("myTasks");
    myTasks = JSON.parse(object);
    console.log(myTasks);
    size = myTasks.tasks[itemId].quantity - 1;
    i = Math.round(Math.random() * size);
    document.getElementById("data").innerHTML = "<h1>" + myTasks.tasks[itemId].task[i].value + "</h1><h4>" + myTasks.tasks[itemId].task[i].body + "</h4>";
    
}

function workTimer(timing) {
    console.log("Function: Timer" +" : "+ timing)
    if (timing=== 't') {
    //start timer " : "+
        document.getElementById('timer').onclick = "workTimer('f')";
      timing = 'f';  
        console.log(timing);
    } else {
     //stop timer   
        document.getElementById('timer').onclick = "workTimer('true')";
              timing = 't';  
        console.log('f');
    }
}
