function isLesser(i, j) {
    if (i < j) {
        return i;
    } else if (j < i) {
        return j;
    }
}

function monkeyTrouble(aSmile, bSmile) {
if (aSmile == bSmile) {
    return("true");
} else {
    return("false");
}
}

var d = new Date ();
var whatTime = d.getHours();

function greeting(whatTime) {
    if (whatTime <= 12) {
        return ("Good morning!");
    } else if (whatTime <= 18 && whatTime >= 12) {
        return ("Good afternoon!");
    } else {
        return ("Good evening!");
    }
}