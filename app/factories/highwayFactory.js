"use strict";

app.factory('roadFactory', function($q, $http){
	let getRoads = () => {
		 
		return $q((resolve, reject) => {
			$http.get('./data/roads.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				console.log(itemCollection);
				resolve(itemCollection);

			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getRoads};

});