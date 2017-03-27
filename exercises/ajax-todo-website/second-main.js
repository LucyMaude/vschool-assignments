$.get("http://api.vschool.io/lucymaude/todo/", function (response) {
    console.log(response.data);
    for (var i = 0; i < response.length; i++) {
        var thisResponse = response[i];
        $("#insertHere").append(`<div class="col-xs-12 panel-group">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 panel panel-default">
                <div class="panel-heading"><input class="checkMe" type="checkbox"><button class="btn btn-warning" type="button">Remove</button>
                    <span class="image-title now-done">
                ${response[i].title}</span>
                </div>
                <div class="col-xs-4 panel-body">
                    <div><img class="photo image-responsive this-image" src="${response[i].imgUrl}"></div>
                    <div class="panel-caption least-text">${response[i].description}</div>
                    <div class="panel-caption least-text">$${response[i].price}</div>
                </div>
            </div>
        </div>
    </div>`);
    }
});

$("#runGet").click(function () {
    var inputObj = {
        title: $("#title").val(),
        description: $("#description").val(),
        price: $("#price").val(),
        imgUrl: $("#url").val(),
        completed: false
    };

    console.log(inputObj);

    $.post("http://api.vschool.io/lucymaude/todo/", inputObj);

    var submitted = "http://api.vschool.io/lucymaude/todo/" + inputObj._id;

    $("#insertHere").append(`<div class="col-xs-12 panel-group">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 panel panel-default">
                <div class="panel-heading"><input  class="checkMe" type="checkbox">
                    <span class="image-title now-done">
                ${inputObj.title}</span>
                </div>
                <div class="panel-body">
                    <div><img class="photo image-responsive this-image" src="${inputObj.imgUrl}"></div>
                    <div class="panel-caption least-text">${inputObj.description}</div>
                    <div class="panel-caption least-text">$${inputObj.price}</div>
                </div>
            </div>
        </div>
    </div>`)
});


//$(".checkMe").clicked(function () {
//            if ($(".checkMe").is(":checked") {
//                    $("#now-done").css("text-decoration", "line-through");
//                })
//        };
