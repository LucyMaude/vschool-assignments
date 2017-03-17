$("#inputButton").click(function () {
    var newTodo = "<li class='newClass'><button class='deleteClass'>X</button>" + $("#inputValue").val() + "</li>";
    console.log(newTodo);
    $(".insertHere").append(newTodo);
})

$(document).on("click", ".deleteClass",function () {
    console.log("firing!");
    $(this).parent("li").remove();
})
