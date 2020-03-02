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
        $("#authorName > h3").text("BluePrint author: " + author);
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
                "<td id='tableName'>" + blueprint.name + "</td> " +
                "<td>" + blueprint.points + "</td> " +
                "<td><button class='btn' type='button' onclick='app.getBlueprintsByNameAndAuthor(\""+blueprint.name+ ", author.value)'>Pintar</button></td>"+
                "</tr>"
            );
        });
    };

    var getBlueprintsByNameAndAuthor = function (name, author) {
        alert(name + " "+ author);
        mock.getBlueprintsByNameAndAuthor(name, author, getCanvas);
    };

    var getCanvas = function (blueprint) {
        alert(blueprint.points)
    };

    return {
        get: getAuthorByName,
        getBlueprintsByNameAndAuthor : getBlueprintsByNameAndAuthor
    };
})();




