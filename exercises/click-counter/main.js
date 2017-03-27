var numClick = 0;
if (localStorage.getItem("numberClicked")) {
        numClick = localStorage.getItem("numberClicked");
        $(document).click(function (event) {
            numClick++;
            $("#howMany").text(numClick);
            localStorage.setItem("numberClicked", numClick);
        });
    }

    $("#didSave").click(function () {
        var storageThing = parseInt(localStorage.getItem("numberClicked")) + 1;
        console.log(storageThing);
        $("#returnSave").text(storageThing);
    });
