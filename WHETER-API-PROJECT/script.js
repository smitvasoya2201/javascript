const days = ["Sunday", "Monday", "Tuesday", "wensday", "thusday", "friday", "saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();

function getwhetherinfo(city) {
    let cityname = document.querySelector(".search").value || city ;
    const API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityname}`;
    fetch(API).then((res) => {
        res.json().then((data) => {
            console.log(data);
            var urlpoint = "day";
            var is_day = data.current.is_day;
            var code = data.current.condition.code;
            document.querySelector(".name").innerHTML = data.location.name;
            document.querySelector(".temp span").innerHTML = data.current.temp_c;
            document.querySelector(".condition").innerText = data.current.condition.text;
            document.querySelector(".icon").src = data.current.condition.icon;
            document.querySelector(".time").innerHTML = `${(today.getHours() > 12) ? today.getHours() - 12 : today.getHours()} :${today.getMinutes()} : ${today.getSeconds()}`;

            document.querySelector(".date").innerHTML = `${days[today.getDay()]} ${months[today.getMonth()]}  ${today.getDate()}`;
            document.querySelector(".cloud").innerText = data.current.cloud + "%";
            document.querySelector(".humidity").innerText = data.current.humidity + "%";
            document.querySelector(".wind").innerText = data.current.wind_kph + " km/h";

            if (!is_day) {
                urlpoint = "night";
            }

            if (code == 1000) {
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/clear.jpg)`;
            } else if (code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1169 ||
                code == 1187 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282) {
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/cloudy.jpg)`;
            } else if (code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252) {
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/rainy.jpg)`;
            } else {
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/snowy.jpg)`;
            }
        })
    })
}
getwhetherinfo("rajkot");
document.querySelector(".submit").onclick = function(){
    getwhetherinfo();
}

document.querySelector(".cities").onclick =function(e){
    if(e.target.tagName == "LI" ){
        console.log(e.target.tagName);
        document.querySelector(".search").value = e.target.innerHTML;
        getwhetherinfo();
    }
}
