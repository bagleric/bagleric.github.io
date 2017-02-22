function getTips()
{
    console.log("Function: getTips");
            data = new XMLHttpRequest();
            data.onreadystatechange = function () {
                if (data.readyState == 4 && data.status == 200) {
                 
                  console.log("AJAX: succesful");  
                    var object = JSON.parse(data.responseText);
                    console.log(object);
                    
                    sessionStorage.setItem("tips", object);
                }
                else{
                    console.log("AJAX: working");
                }
            }
            data.open("GET", "https://bagleric.github.io/CIT261/Project1-AJMusic/tasks.json", true);
            data.send();
        }
