var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newJon = [];

function playingWithWords(people, alphabet) {
    for (var j = 0; j < people.length; j++) {
        newJon.push(people[j]);
        for (var i = 0; i < alphabet.length; i++) {
            newJon.push(alphabet[i].toUpperCase());
        }
    }

}

playingWithWords(people, alphabet);
console.log(newJon);
