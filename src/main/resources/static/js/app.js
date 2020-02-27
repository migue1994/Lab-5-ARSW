 var mock = apimock;

var app = (function () {
    var name;
    var list = [];

    var setName = function (author) {
        name = author;
    }

    var update = function (author) {
        setName(author);
        mock.getBlueprintsByAuthor(author, getTable());
    }

    var getTable = function (blueprint) {

    }

    var getAuthorByName = function (author) {
        setName(author);
        $("#authorname").text(author);
        var a = mock.getBlueprintsByAuthor(author, print);
    }

    var print = function (blueprint) {
        alert(blueprint.name)
    }

    return{
        get : getAuthorByName,
        update : update
    };
})();