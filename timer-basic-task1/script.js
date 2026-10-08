let count =0;
// document.querySelector("span").innerText = count;
// setTimeout(() => {
//     // document.write("Hello World");
//     count++;
//     document.querySelector("span").innerText = count;
//     count +=100;
//     document.querySelector("span").innerText = count;
// }, 2000);

var id =setInterval(() => {
      count++;
    if(count == 10){
        clearInterval(id);
    }
  
    document.querySelector("span").innerText = count;
}, 1000);