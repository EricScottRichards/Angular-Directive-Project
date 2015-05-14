var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'app/appTmpl.html',
			controller: 'appCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})
});
