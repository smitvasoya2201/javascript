const arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiYVnSAT5Gv9hErvxZhuel6_SJu-6ATEYs4Qhr2QYkA&s=10", "https://static.vecteezy.com/system/resources/thumbnails/070/912/520/small_2x/colorful-hibiscus-flower-with-water-droplets-macrography-for-wallpaper-background-desktop-4k-hd-free-photo.jpg" ,"https://lifencolors.in/cdn/shop/files/pastel-paradise-wallpaper.webp?v=1753691252&width=1080","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JR5IOHW9Z4oQQIFBr-wWzC5M3-GkT9R30kfysld4tc3rDYgENnMP7GTK&s=10"];
let index = 0;
document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;

document.getElementById("bt1").onclick = function (){
    index--;
    if(index<0){
        index = arr.length-1;
    }
    console.log(index);
    document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;
}

document.getElementById("bt2").onclick = ()=>{
    index++;
    if(index>=arr.length){
        index = 0;
    }
    document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;
    console.log(index);
}