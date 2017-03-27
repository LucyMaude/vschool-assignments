function createGrid(x, y){
for (var i = 0 ; i < x; i++){
    var newArray = [];
    for (var j = 0; j < y; j++){
        newArray.push(0);
    }
    console.log(newArray);
}
}


createGrid(3, 3);
createGrid(2, 5);
createGrid(4, 1);
// Given (and using) the following code, write a program that creates a two dimensional array that looks like this. [[0, 0 , 0], [0, 0 , 0], [0, 0 , 0]]

//num arrays, num in arrays