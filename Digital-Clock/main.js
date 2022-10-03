function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "PM"
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (hours > 12) {
        hours = hours - 11; 
    }
    document.getElementById("hours").innerHTML = hours;
    if (hours >= 12) {
        document.getElementById("session").innerHTML = session
    } else {
        document.getElementById("session").innerHTML = "AM"
    }
}
setInterval(clock,1000);