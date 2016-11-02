var app = angular.module('WikipediaApplication', []);

app.controller('WikipediaController', ['$scope', '$http', function($scope, $http) {
	$scope.results = [];

	$scope.searchWikipedia = function() {
		var api = 'http://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extracts&exintro&exsentences=1&exlimit=max&explaintext&gsrsearch=';
		var callback = '&format=json&callback=JSON_CALLBACK';
		$http.jsonp(api + $scope.searchTerm + callback
		).success(function(data) {
			document.getElementById('wiki').classList.remove('myvertical');
			$scope.results = data.query.pages;
		}).error(function(data) {
			console.log(data);
		});

		if ($scope.searchTerm === '') $scope.results = [];
	}
}]);