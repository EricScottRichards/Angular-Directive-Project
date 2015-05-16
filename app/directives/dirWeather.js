var app = angular.module('directivePractice');
app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/directives/dirWeather.html',
		// restrict: 'AE',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		// link: function(scope, element, attrs){
			
		// },
		controller: function($scope){
			$scope.$watch('currentUser', function(){
				$scope.weatherCall({data: $scope.currentUser.city})
					.then(function(results){
						$scope.temp = results.temp
						$scope.weather = results.weatherDesc
					})
			})
			// console.log($scope.currentUser)
			// console.log($scope.temp)
		}

	}
})