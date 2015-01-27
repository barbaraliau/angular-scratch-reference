var app = angular.module('weatherApp');

app.service('weatherService', function($q, $http){

	this.getWeather = function(lat, long) {
	 var deferred = $q.defer();
	 $http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" + long)
		.then(function(data){
			var obj = {
				temp: data.data.main.temp - 273.15,
				weather: data.data.weather[0].description
			}
			deferred.resolve(obj)
		})

		return deferred.promise;

	}

})