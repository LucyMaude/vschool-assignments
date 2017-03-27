//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.

var strOne = "hello-moto";
var strTwo = "zoom-zoom";
var strThree = "yahoo-ooo";

function returnCamel (str){
   var newString="";
   for(var i = 0; i<str.length; i++){
       if(str[i] === "-" || str[i] === " " ||str[i] === "_"){
           newString += str[i+1].toUpperCase();
           i++;
       }else{
           newString += str[i];
       }
   }return newString;
}
console.log(returnCamel(strOne));
