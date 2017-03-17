var goombasCost = 5;
var bobOmbsCost = 7;
var cheepCheepsCost = 11;

$("#addGoombas").click(function () {
    var goombasCaught = $("#goombasCaught").val();
    $("#addGoombaText").text((goombasCost * goombasCaught + " Coins"));
});

$("#addBobs").click(function () {
    var bobsCaught = $("#bobsCaught").val();
    $("#addBobText").text((bobOmbsCost * bobsCaught + " Coins"));
});

$("#addCheeps").click(function () {
    var cheepsCaught = $("#cheepsCaught").val();
    $("#addCheepText").text((cheepsCaught * cheepCheepsCost + " Coins"));
});

$("#calculateTotal").click(function () {
    var goombasCaught = $("#goombasCaught").val();
    var bobsCaught = $("#bobsCaught").val();
    var cheepsCaught = $("#cheepsCaught").val();
    var goombasTotal = goombasCost * goombasCaught;
    var bobsTotal = bobOmbsCost * bobsCaught;
    var cheepTotal = cheepCheepsCost * cheepsCaught;

    $("#addTotalText").text(goombasTotal + bobsTotal + cheepTotal + " Coins");
});

$("#addGoombas, #addBobs, #addCheeps, #calculateTotal").click(function () {
    var audio = $("#chaChing")[0];
    audio.play();
})


$("#clickMe").click(function(){
  $("body").toggleClass("newBodyLovesMe");
    $("body").toggleClass("none");
   })

//$("#clickMe").click(function(){
//   $("#clickMe").toggleClass("#newBodyLovesMe").text("night mode"); $("#nightMode").toggleClass("#newBodyLovesMe").text("Change Me");
//   })
