document.getElementById("middleBox").addEventListener('mouseover', createBlue);

function createBlue() {
    document.getElementById("middleBox").className = "blue-box";
}

document.getElementById("middleBox").addEventListener("mousedown", createRed);

function createRed() {
    document.getElementById("middleBox").className = "red-box";
}


document.getElementById("middleBox").addEventListener("mouseup", createYellow);

function createYellow() {
    document.getElementById("middleBox").className = "yellow-box";
}

document.getElementById("bodyScroll").addEventListener("wheel", createOrange);

function createOrange() {
    document.getElementById("middleBox").className = "orange-box";
}


document.getElementById("middleBox").addEventListener("dblclick", createGreen);

function createGreen() {
    document.getElementById("middleBox").className = "green-box";
}


window.addEventListener("keydown", roygbv);

function roygbv() {
    switch (event.keyCode) {
    case 82:
        document.getElementById("middleBox").className = "red-box";
        break;
    case 79:
        document.getElementById("middleBox").className = "orange-box";
        break;
    case 89:
        document.getElementById("middleBox").className = "yellow-box";
        break;
    case 71:
        document.getElementById("middleBox").className = "green-box";
        break;
    case 66:
        document.getElementById("middleBox").className = "blue-box";
        break;
    }
}