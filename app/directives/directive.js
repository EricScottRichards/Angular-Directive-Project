var app = angular.module('directivePractice');
app.directive('dirDisplay', function(){
	return {
		templateUrl: 'app/directives/directiveTmpl.html',
		// restrict: '',
		link: function(scope, element, attrs){
			scope.showToggle = true;
			// var test;
			// var check;
			// console.log(element)
			// console.log(attrs)
			// console.log(scope)
			element.on('click', function(){
  			scope.showToggle = !scope.showToggle;
  			// console.log($scope.showToggle);
  			scope.$apply();
			})
			// console.log(scope)
		}
	}
})