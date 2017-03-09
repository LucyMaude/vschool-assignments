var d = new Date();
var todayIs = d.getDay();
var timeIs = [d.getHours(), d.getMinutes(), d.getSeconds()];

function pushDate() {
    switch (new Date().getDay()) {
    case 0:
        weekday = "Today is Sunday";
        break;
    case 1:
        weekday = "Today is Monday";
        break;
    case 2:
        weekday = "Today is Tuesday";
        break;
    case 3:
        weekday = "Today is Wednesday";
        break;
    case 4:
        weekday = "Today is Thursday";
        break;
    case 5:
        weekday = "Today is Friday";
        break;
    case 6:
        weekday = "Today is Saturday";
        break;
    }

    document.getElementById("whatDay").innerHTML = weekday;
}

function pushTime() {
    var hourIs = d.getHours();
    var minutesAre = d.getMinutes();
    var secondsAre = d.getSeconds();
    var ampm;
    if (hourIs >= 12) {
        ampm = "PM"
        hourIs = 24 - hourIs;
    } else {
        ampm = "AM"
    }

    if (minutesAre < 10) {
        minutesAre = "0" + minutesAre;
    }

    var wombination = "Current time is: " + hourIs + ":" + minutesAre + ":" + secondsAre + ampm;
    console.log(wombination);
    document.getElementById("whatTime").innerHTML = wombination;
}