function sayHello() {
    console.log("Hello, Class");
}

var sir = "George";
var maam = "Eliza";
var buckaroo = "Jimmy John from Avalon"
var lilMiss = "Susie Que from Kathmandu"

function sayHowdy(i) {
    console.log("Hello, " + i);
}

sayHello();
sayHowdy(sir);
sayHowdy(maam);
sayHowdy(buckaroo);
sayHowdy(lilMiss);

function double(Number) {
    return Number * 2;
}
double(7);

//extra practice 1

var teachers = 10
var parents = .5

function ptaCookies(children) {
    function ptaParticipants(children) {
        var participants = (teachers + (children * parents));
        // console.log(teachers)
        var numCookies = (participants * 5);
        console.log(numCookies)
        return numCookies;

    }
    var results = ptaParticipants(children);
    if (results > 100) {
        return ("We have too many cookies!");
    } else {
        return ("We need to buy more cookies!");
    }
}

ptaCookies(100);


//extra practice 2
function favColor(color) {
    if (color === "blue") {
        return "That's my fave too!!!! OMG BESTIES!";
    } else {
        return "What a lame color!";
    }
}

favColor("pink");
favColor("orange");
favColor("blue");