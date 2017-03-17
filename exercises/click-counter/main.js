var numClick = 0;
$(document).click(function (event) {
    numClick++;
    $('#howMany').text(numClick);
    localStorage.setItem("numberClicked", numClick);
});

$("#didSave").click(function () {
   var storageThing = 
    storageThing;
    $("returnSave").text("you saved");
})
