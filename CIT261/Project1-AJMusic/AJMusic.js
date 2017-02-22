function showTip(myEvent)
{
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    alert("we're number 4");
                    document.getElementById('jsonFile').innerHTML = xmlhttp.responseText;
                }
                else if (xmlhttp.readyState == 3) {
                    document.getElementById('jsonFile').innerHTML = "we're number 3";
                    alert("we're number 3");
                }
                else if (xmlhttp.readyState == 2) {
                    document.getElementById('jsonFile').innerHTML = "we're number 2";
                    alert("we're number 2");
                }
                else if (xmlhttp.readyState == 1) {
                    document.getElementById('jsonFile').innerHTML = "we're number 1";
                    alert("we're number 1");
                }
                else {
                    document.getElementById('jsonFile').innerHTML = "Waiting for server Response ...";
                }
            }
            xmlhttp.open("GET", "https://bagleric.github.io/CIT261/Project1-AJMusic/tasks.json", true);
            xmlhttp.send();
        }

}