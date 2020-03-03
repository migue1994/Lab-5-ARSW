var mock = apimock;

var app = (function () {
    var name;
    var list = [];

    var setName = function (author) {
        name = author;
    };

    var update = function (author) {
        setName(author);
        mock.getBlueprintsByAuthor(author, getTable());
    };

    var getAuthorByName = function (author) {
        setName(author);
        $("#authorName").text(author);
        mock.getBlueprintsByAuthor(author, getTable);
    };

    var getPoints = function (blueprints) {
        return blueprints.map(function (blueprint) {
            return {name: blueprint.name, points: blueprint.points.length};
        });
    };

    var getTable = function (blueprints) {
        blueprints = getPoints(blueprints);
        list = blueprints;

        $("#blueprintTableBody").empty();
        blueprints.map(function (blueprint) {
            $("#blueprintTableBody").append(
                "<tr> " +
                "<td>" + blueprint.name + "</td> " +
                "<td>" + blueprint.points + "</td> " +
                "<td><form><button type='button' class='btn-outline-success' onclick='app.getBlueprintsByNameAndAuthor( \"" +blueprint.name +'" , ' +"author.value)' >Open</button></form></td>"+
            "</tr>"
            );
        });
    };

    var getBlueprintsByNameAndAuthor = function (name, author) {
        mock.getBlueprintsByNameAndAuthor(name, author, getCanvas);
    };

    var getCanvas = function (blueprint) {
        $("#currentBluePrint").text("prueba: "+ blueprint.name);
        var can=document.getElementById("myCanvas");
        var ctx=can.getContext("2d");

        ctx.clearRect(0, 0, can.width, can.height);
        ctx.beginPath();

        var aux;

        blueprint.points.map(function(point){
            if(!aux){
                aux=point;
                ctx.moveTo(aux.x, aux.y);
            }
            else{
                ctx.lineTo(point.x, point.y);
                //draw
                ctx.stroke();
            }
        });
    };

    return {
        get: getAuthorByName,
        getBlueprintsByNameAndAuthor : getBlueprintsByNameAndAuthor
    };
})();




