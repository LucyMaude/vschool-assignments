var dictionary = {
    
}

function addWord(word, definition){
    word = word.toLowerCase();
    dictionary[word] = definition;
}

addWord("dog", "this is a definition of dog");
console.log(dictionary);







