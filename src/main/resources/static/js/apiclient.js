const appUrl="http://localhost:8080/blueprints/"
	 
apiclient = (function(){
	
	var dataList=[]
	return {
		getBlueprintsByAuthor: function(name, callback){
			$.get(appUrl+name, function(data){
				dataList=data;
			});
			return callback(dataList);
		},
		
		getBlueprintsByNameAndAuthor: function(name, author, callback){
			
			jQuery.ajax({
				url: appUrl+author+"/"+name;
				success: function(result){
					callback(result);
				},
				async: true
			});
		}
	};
})();


 
  