var given = "this is a string";

function bookEnds (str){
    var newArray =[];
    for (var i = 0; i < str.length; i++){
        newArray.push(str[i]);
    }
    newArray.shift();
    newArray.pop();
    console.log(newArray.join(""));
} 

bookEnds(given);