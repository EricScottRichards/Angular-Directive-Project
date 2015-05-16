var app = angular.module('directivePractice');
app.service('weatherService', function($http, $q){

	this.getWeather = function(city){
		var dfd = $q.defer();
		console.log(city)
		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
		})
		.then(function(data){
			console.log(data.data)
			var results = {};
			var tempK = data.data.main.temp;
			var temp = Math.round(((tempK - 273.15) * 1.8000) + 32);
			var weatherDesc = data.data.weather[0].description;
			results.temp = temp;
			results.weatherDesc = weatherDesc;
			console.log(results);
			dfd.resolve(results);
		})
		return dfd.promise;
	}
})