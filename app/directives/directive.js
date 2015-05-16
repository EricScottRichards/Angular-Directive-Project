var app = angular.module('directivePractice');
app.directive('dirDisplay', function(){
	return {
		templateUrl: 'app/directives/directiveTmpl.html',
		scope: {
			setUser: '&',
			user: '='
		},
		// restrict: '',
		link: function(scope, element, attrs){
			scope.showToggle = false;
			// var test;
			// var check;
			// console.log(element)
			// console.log(attrs)
			// console.log(scope)
			element.on('click', function(){
  			scope.showToggle = !scope.showToggle;
  			// console.log($scope.showToggle);
  			scope.setUser({user: scope.user});
  			scope.$apply();
			})
			// console.log(scope)
		}
	}
})