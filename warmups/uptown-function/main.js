var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function first() {
    console.log(lyrics.join(" "));
}

function second() {
    lyrics.reverse();
    console.log(lyrics.join(" "));
}

function third () {
    for (var i = 0; i < lyrics.length; i += 2) {
            console.log(lyrics[i]);
    }
}

first();
second();
third();