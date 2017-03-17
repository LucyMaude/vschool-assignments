function namedFunction(a, b, c) {
    var array = [a, b, c];
    var newNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (deDecomp(array[i])) {
            newNumber += array[i];
        } else {
            newNumber += 0
        };
    }
    console.log(newNumber);
}


function deDecomp(num) {
    if (num > 12  && num < 16 || num > 16 && num < 19) {
        return false;
    } else {
        return true;
    }
}

namedFunction(1, 2, 3);
namedFunction(2, 13, 1);
namedFunction(2, 1, 14);
namedFunction(2, 15, 14);
namedFunction(1, 1, 1);
namedFunction(1, 15, 18);
namedFunction(20, 20, 20);