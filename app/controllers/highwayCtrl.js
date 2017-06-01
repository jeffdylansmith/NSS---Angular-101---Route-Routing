"use strict";
console.log("highwayCtrl");
app.controller("highwayCtrl", function($scope, roadFactory){
	
	roadFactory.getRoads()
	.then(function(itemCollection){
		
        
        $scope.highwayName = itemCollection.roads[0].road;
		$scope.highwayDescription = itemCollection.roads[0].title;
        console.log("roads", $scope.highwayName, $scope.highwayDescription);
     });
});	
