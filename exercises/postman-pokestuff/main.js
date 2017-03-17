$("#pokeMe").click(function () {
    $.get("http://api.vschool.io:6543/pokemon.json", function (data) {
        var pokemonList = data.objects[0].pokemon;
        var nameLoop = [];
        for (var i = 0; i < pokemonList.length; i++) {
            nameLoop.push(pokemonList[i].name);
            var node = document.createElement("li");
            var textnode = document.createTextNode(nameLoop[i]);
            node.appendChild(textnode);
            document.getElementById("textHere").appendChild(node);
        }
    });
})