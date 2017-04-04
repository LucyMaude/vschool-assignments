var arr = ["cat", [1, 2, 3], "dog", 1, 4, {
    name: "john"
}, ["pie", "cake"]]

function returnType(arr) {
    var output = {
        numbers: [],
        strings: [],
        arrays: [],
        objects: []
    }

    
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            output.numbers.push(arr[i]);
        } else if (typeof arr[i] === "string") {
            output.strings.push(arr[i]);
        } else if (typeof arr[i] === "object") {
            if (arr[i] instanceof Array) {
                output.arrays.push(arr[i]);
            } else {
                output.objects.push(arr[i]);
            }
        }
        
    }
    console.log(output);
}
    returnType(arr);
