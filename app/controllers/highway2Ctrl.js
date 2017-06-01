"use strict";
console.log("highwayCtrl");
app.controller("highway2Ctrl", function($scope, roadFactory){
	
	roadFactory.getRoads()
	.then(function(itemCollection){
		
        
        $scope.highwayName = itemCollection.roads[1].road;
		$scope.highwayDescription = itemCollection.roads[1].title;
        console.log("roads", $scope.highwayName, $scope.highwayDescription);
     });
});	


