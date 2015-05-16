var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'app/appTmpl.html',
			controller: 'appCtrl',
			resolve: function($scope, weatherService){
				return weatherService.getWeather(city)
			}
		})
		.otherwise({
			redirectTo: '/home'
		})
});
