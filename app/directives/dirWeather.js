var app = angular.module('directivePractice');
app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/directives/dirWeather.html',
		// restrict: 'AE',
		scope: {
			currentUser: '='

			
		}

	}
})