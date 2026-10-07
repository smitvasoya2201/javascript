 document.querySelector("button").onclick = function (){
            if(document.querySelector("button").innerText == "OFF"){
                document.querySelector("img").attributes.src.value = "/assests/off.png";

                document.querySelector("button").innerText = "ON";
            }else{
                document.querySelector("img").attributes.src.value = "/assests/on.png";
                document.querySelector("button").innerText = "OFF";
            }

        }