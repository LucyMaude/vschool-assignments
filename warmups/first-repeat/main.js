var str = "ggggggggxkljfvlsjkfg";
var newStr = "abcdabcgabcdabc"

function firstRepeat (str) {
    var strArray = []; 
    for (var j = 0; j < str.length; j++){
     strArray.push(str[j]);
    }
    for (var i = 0; i < strArray.length; i++){
        var findIndex = strArray.indexOf(strArray[i]);
        var findLast = strArray.lastIndexOf(strArray[i])
        if (findIndex === findLast) {
            console.log(strArray[i]);
            return(strArray[i]);
        }
    }
}

firstRepeat(str);
firstRepeat(newStr);