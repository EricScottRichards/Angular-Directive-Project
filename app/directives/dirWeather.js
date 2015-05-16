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
		controller: function($scope, $timeout){
			$scope.$watch('currentUser', function(){
				$scope.dataShow = false;
				$scope.gifShow = true;
				$scope.weatherCall({data: $scope.currentUser.city})
					.then(function(results){
						$timeout(function(){
							$scope.temp = results.temp
							$scope.weather = results.weatherDesc
							$scope.gifShow = false;
							$scope.dataShow = true;
						}, 2000)
					})
						
			})
			// console.log($scope.currentUser)
			// console.log($scope.temp)
		}

	}
})