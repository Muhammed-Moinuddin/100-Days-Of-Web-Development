var i = 0;
var images = [];
var time = 1000;


images[0] = "/Slider/beach.jpg";
images[1] = "/Slider/desert.jpg";
images[2] = "/Slider/forest.jpg";
images[3] = "/Slider/snowfall.jpg";

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg;