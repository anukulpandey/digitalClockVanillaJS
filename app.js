console.log('This is my clock');
digitalClock = document.getElementById('digitalClock');

//Creating a function called Clock
setInterval(clock,1000)
function clock() {
    let date= new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    console.log(date);
    if(secs<10){
        secs = `0${secs}`;
    }
    else {
        secs= `${secs}`;
    }
    if(mins<10){
        mins = `0${mins}`;
    }
    else {
        mins= `${mins}`;
    }
    if(hrs<10){
        hrs = `0${hrs}`;
    }
    else {
        hrs= `${hrs}`;
    }
    if(hrs>12){
    let time = `0${hrs-12}:${mins}:${secs} PM`
    digitalClock.innerHTML=time;
}
else{
    let time = `${hrs-12}:${mins}:${secs} AM`
    digitalClock.innerHTML=time;
}
}


