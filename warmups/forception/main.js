var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newJon = []

function playingWithWords() {
    for (var i = 0; i < 1; i++) {
        newJon.push(people[i]);
        for (var i = 0; i < alphabet.length; i++) {
            newJon.push(alphabet[i]);
            newJon.toUpperCase();
        }
        console.log(newJon);
    }
}

playingWithWords();