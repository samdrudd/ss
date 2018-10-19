var app = angular.module('ss', []);

app.factory('API', ['$http', function($http) {
	
	var API = {};
	var urlBase = "https://svcs.ebay.com/services/search/FindingService/v1";
		
	API.getFromStore = function(store) {
		return $http({
				url: urlBase + "search",
				params: {
					"OPERATION-NAME" : "findItemsIneBayStores",
					"SERVICE-VERSION" : "1.0.0",
					"SECURITY-APPNAME": "SamRudd-Suspensi-PRD-a660f6938-fe53efcc",
					"RESPONSE-DATA-FORMAT": "JSON",
					"REST-PAYLOAD" : "",
					"storeName" : store					
				},
				method: "GET"});
	};
	
	return API;
}]);
