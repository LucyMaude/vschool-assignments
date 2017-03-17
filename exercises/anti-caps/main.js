antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa 

function isCaps(letter) {
    return letter === letter.toUpperCase();
}


function antiCaps(val) {
    var testArray = [];
    for (var i = 0; i < val.length; i++) {
        var letter = val[i];
        if (isCaps(letter)) {
            testArray.push(letter.toLowerCase());
        } else {
            testArray.push(letter.toUpperCase());
        }
    }
    console.log(testArray.join(""));
}