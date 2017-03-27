var name = $("#typeName").val();
var game = $("#typeGame").val();
var date = $("#typeDate").val();
var score = $("#typeDate").val();;
var phrase;
var feelBad = ["I am great!", "I can do it!", "I am better than you", "If you wanted to win, you should have been me", "I can't hear you over the sound of my won awesome", "It's all about me", "Don't talk to me, I'm busy winning"]

function pickAFinger() {
    var pickFeelBad = randomMath(0, 6);
    if (pickFeelBad === 0) {
        phrase = feelBad[0];
    } else if (pickFeelBad === 1) {
        phrase = feelBad[1];
    } else if (pickFeelBad === 2) {
        phrase = feelBad[2];
    } else if (pickFeelBad === 3) {
        phrase = feelBad[3];
    } else if (pickFeelBad === 4) {
        phrase = feelBad[4];
    } else if (pickFeelBad === 5) {
        phrase = feelBad[5];
    } else if (pickFeelBad === 6) {
        phrase = feelBad[6];
    }
}

function randomMath(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function () {
    $("#submitForm").click(function () {
        if (($("#typeGame").val()) === "" || ($("#typeScore").val()) === "" || ($("#typeName").val()) === "") {
            alert('you did not fill out one of the fields');
            return false;
        }
        if ($("#typeCheckThree").is(":checked")) {
            pickAFinger();
        } else {
            phrase = "nothing";
        } 
        if ($("#typeCheckTwo").is(":checked")){
             scoreExtra = " minutes";
        } else if ($("typeCheck").is(":checked")){
             scoreExtra = " points";
        }
        var scoreExtra;
        var name = $("#typeName").val();
        var game = $("#typeGame").val();
        var date = $("#typeDate").val();
        var score = $("#typeScore").val();
        console.log(phrase);
        var newRow = "<tr><td>" + name + "</td><td>" + game + "</td><td>" + date + "</td><td>" + score + scoreExtra + "</td><td>" + phrase + "</td></tr>";
        $(".tableClass").append(newRow);
    })
})
