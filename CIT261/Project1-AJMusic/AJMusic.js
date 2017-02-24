function loadTasks() {
    if (sessionStorage.getItem("tasks") !== undefined) {
        return;
    }
    console.log("Function: getTips");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log("AJAX:succesful");
            var object = JSON.parse(xmlhttp.responseText);
            console.log(object);
            sessionStorage.setItem("tasks", object);
        } else {
            console.log("AJAX: working");
        }
    };
    xmlhttp.open("GET", "https://bagleric.github.io/CIT261/Project1-AJMusic/tasks.json", true);
    xmlhttp.send();
}

function getTask(itemId) {
    var tasks, i;
    
    tasks = sessionStorage.getItem("tasks");
    i = Math.round(Math.random());
    document.getElementById("data").innerHTML = tasks[itemId][i].value + tasks[itemId][i].body;
}