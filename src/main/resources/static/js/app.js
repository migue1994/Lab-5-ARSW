var mock = apimock;

var app = (function () {
    var authorName;
    var list = [];

    var setName = function (author) {
    	authorName = author;
    };

    var update = function (author) {
        setName(author);
        mock.getBlueprintsByAuthor(author, getTable());
    };


    var getAuthorByName = function (author) {
        setName(author);
        $("#authorName").text(author);
        mock.getBlueprintsByAuthor(author, getTable);
        //var a = mock.getBlueprintsByAuthor(author, print);
    };

    var print = function (blueprint) {
        alert(blueprint.name)
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
                "<td><button type='button' class='btn-success' onclick='app.getOpen (\"" + blueprint.name +'" , "' + authorName + "\")'>Open</button></td>"+      
                "</tr>"
            );
        });
    };

    var getOpen = function (name, author) {
    	alert(name);
    	alert(author);

    	mock.getBlueprintsByAuthor(author, getCanvas);
    };

    var getCanvas = function (blueprints) {
    	$("#currentBluePrint").text("prueba: "+ blueprints[0].name);
    	
    	var blueprint=blueprints[0];
    	
    	var can=document.getElementById("myCanvas");
    	var ctx=can.getContext("2d");
    	
    	//Conversión de pixeles (x, y, width, height)
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
        update: update,
        getOpen : getOpen
    };
    
})();





