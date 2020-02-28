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
        $("#authorName > h3").text("BluePrint author: "+author);
        mock.getBlueprintsByAuthor(author, getTable);
        //var a = mock.getBlueprintsByAuthor(author, print);
    };

    var print = function (blueprint) {
        alert(blueprint.name)
    };
    
    var getPoints=function(blueprints){
    	return blueprints.map(function(blueprint){
    		return { name: blueprint.name, points: blueprint.points.length};
    	});
    };
    
   
    
    var getTable=function(blueprints){
    	blueprints=getPoints(blueprints);
    	list=blueprints;
    	
    	$("#blueprintTableBody").empty(); 
    	blueprints.map(function(blueprint){
    		$("#blueprintTableBody").append(
    				"<tr> <td>"+blueprint.name +"</td> <td>"+blueprint.points+"</td> </tr>"
    		);
    	});
    };

    return{
        get : getAuthorByName,
        update : update
    };
})();




