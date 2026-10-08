function watch() {
    let min = 2;
let second = 60;

document.querySelector(".minute").innerHTML = min;
min--;
setTimeout(() => {

    document.querySelector(".minute").innerHTML = min;
}, 1000);


var id = setInterval(() => {
   
    second--;
    if (second < 0) {
        min--;
        second = 59;
        document.querySelector(".minute").innerHTML = min;
        
    }else if (min == 0 && second == 0) {
        clearInterval(id);
    }
   
    document.querySelector(".second").innerHTML = second;
}, 1000);


document.querySelector("button").onclick = function () {
    clearInterval(id);
}

}

document.querySelector("#bt1").onclick = function () {

    watch();
} 