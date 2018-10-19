app.controller("ssCtrl", ['$scope', 'API',
	function($scope, API) {
		
		$scope.init = function() {
			API.getFromStore("Suspension Specialists")
				.then(
					(res) => {
						console.log(res);
					},
					(res) => {
						console.log(res);
					}
				);
		}
	}
]);