function showTime(){
    const timeLabel=document.querySelector("p");
    const time = new Date();
    timeLabel.innerHTML = time.toLocaleTimeString()
}
setInterval(showTime,1000);