function clock(){
    let now= new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "AM";

    if(hours >=12){
        ampm="PM";
    }
    if(hours >12){
       hours = hours-12;
    }

    if(hours<10){
        hours = "0"+ hours;
    }
     if(minutes<10){
        minutes = "0"+ minutes;
    }
     if(seconds<10){
        seconds = "0"+ seconds;
    }
    let time = hours+":"+minutes+":"+seconds ;

    document.getElementById("time").innerHTML=time;
    document.getElementById("ampm").innerHTML=ampm;

    let today = now.toDateString();
    document.getElementById("today").innerHTML=today;
}
setInterval(clock,1000);