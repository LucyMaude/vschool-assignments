document.getElementById("submitButton").addEventListener("click", function () {
    var form = document.getElementById("formFlight");
    var name = form.name.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var diet = function () {
        if (form.elements["vegan"].checked === true) {
            return "vegan";
        } else
        if (form.elements["chocolate"].checked === true) {
            return "Lucy Diet";

        } else if (form.elements["glutenFree"].checked === true) {
            return "Gluten-Free";
        } else {
            return "None";
        }
    }
    var location = form.location.value;

    var formOutPut = `Name: ${name} Age: ${age} Gender: ${gender} Dietary Restrictions: ${diet()}`;

    alert(formOutPut);
});