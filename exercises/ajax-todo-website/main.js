$.get("http://api.vschool.io/lucymaude/todo", function (response) {
    var displayItem = response;
    console.log(response);
    for (var i = 0; i < displayItem.length; i++) {
        $(".insertHere").append(`<li>${displayItem[i].title}</li>`);
    }
})


function Post(title, description, price, imgURL, completed) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgURL = imgURL;
    this.completed = completed;
}

$("#inputButton").click(function () {
    var title = $("#name").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var imgURL = "a string";
    var completed = true;
    console.log(title);
    var newPost = new Post(title, description, price, imgURL, completed);
    console.log(newPost);
//    $.post("http://api.vschool.io/lucymaude/todo", newPost, function () {})
})

//$("#inputButton").click(function () {
//    var newTodo = "<li class='newClass'><button class='deleteClass'>X</button>" + $("#inputValue").val() + "</li>";
//    console.log(newTodo);
//    $(".insertHere").append(newTodo);
//})

//$(document).on("click", ".deleteClass",function () {
//    console.log("firing!");
//    $(this).parent("li").remove();
//})
