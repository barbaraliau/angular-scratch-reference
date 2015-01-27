var app = angular.module('weatherApp');

app.controller('homeCtrl', function($scope, $location){
	$scope.test = 'whatever';

	$scope.changeRoute = function() {
		$location.path('/weather/' + $scope.latitude + '/' + $scope.longitude);
	}



});