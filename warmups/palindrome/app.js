var punctuation = ["!", ",", ".", " ", "/", "?", "'"];


function isPalindrome(str) {
    var newArr = [];
    var oldArr = [];
    console.log(newArr);
    console.log(oldArr);
    for (var i = 0; i < str.length; i++) {
        if (punctuation.indexOf(str[i]) === -1) {
            newArr.push(str[i].toLowerCase());
            oldArr.unshift(str[i].toLowerCase());
        }
    }

    if (newArr.indexOf[i] === oldArr.lastIndexOf[i]) {
        console.log(newArr);
        console.log(oldArr);
        console.log("true");
    } else {
        console.log("false");
        return false;
    }


}

isPalindrome("Star Rats!");
isPalindrome("palindrome");
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");
