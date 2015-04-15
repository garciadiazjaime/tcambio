var mintApp = angular.module('mintApp', ['ui.router', 'ui.bootstrap']);

mintApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$interpolateProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $interpolateProvider) {
	$urlRouterProvider.otherwise("/");
	 $stateProvider
    .state('home', {
		url: "/",
		templateUrl: '/partial/home',
		controller: 'mainCtrl'
    })
    .state('aboutus', {
      url: "/nosotros",
      templateUrl: "/partial/about-us",
      controller: 'mainCtrl'
    })
    .state('contact', {
      url: "/contacto",
      templateUrl: '/partial/contact',
		controller: 'mainCtrl'
    });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$interpolateProvider.startSymbol('{$').endSymbol('$}');
}]);

mintApp.controller('gralCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.mainMenu = [{
		'href': '',
		'title': 'inicio'
	}, {
		'href': 'nosotros',
		'title': 'Nosotros'
	}, {
		'href': 'contacto',
		'title': 'Contacto'
	}, ];

	$scope.changeSection = function(data) {
		$scope.currentSection = data.href;
	};

	var init = function() {
		console.log('fn: gralCtrl.init');
		var bits = $location.url().split('/');
		$scope.currentSection = bits[1];
	};

	init();
}]);

mintApp.controller('mainCtrl', ['$scope', function($scope) {

	var init = function() {
		console.log('fn: mainCtrl.init');
	};

	init();
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vbmF2aWdhdGlvbi5hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWludC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWludEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtaW50QXBwJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJ10pO1xuXG5taW50QXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsICckaW50ZXJwb2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL1wiKTtcblx0ICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdob21lJywge1xuXHRcdHVybDogXCIvXCIsXG5cdFx0dGVtcGxhdGVVcmw6ICcvcGFydGlhbC9ob21lJyxcblx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2Fib3V0dXMnLCB7XG4gICAgICB1cmw6IFwiL25vc290cm9zXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcGFydGlhbC9hYm91dC11c1wiLFxuICAgICAgY29udHJvbGxlcjogJ21haW5DdHJsJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdjb250YWN0Jywge1xuICAgICAgdXJsOiBcIi9jb250YWN0b1wiLFxuICAgICAgdGVtcGxhdGVVcmw6ICcvcGFydGlhbC9jb250YWN0Jyxcblx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwnXG4gICAgfSk7XG5cblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcblx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdHJlcXVpcmVCYXNlOiBmYWxzZVxuXHR9KTtcblx0JGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJ3skJykuZW5kU3ltYm9sKCckfScpO1xufV0pO1xuXG5taW50QXBwLmNvbnRyb2xsZXIoJ2dyYWxDdHJsJywgWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pIHtcblx0JHNjb3BlLm1haW5NZW51ID0gW3tcblx0XHQnaHJlZic6ICcnLFxuXHRcdCd0aXRsZSc6ICdpbmljaW8nXG5cdH0sIHtcblx0XHQnaHJlZic6ICdub3NvdHJvcycsXG5cdFx0J3RpdGxlJzogJ05vc290cm9zJ1xuXHR9LCB7XG5cdFx0J2hyZWYnOiAnY29udGFjdG8nLFxuXHRcdCd0aXRsZSc6ICdDb250YWN0bydcblx0fSwgXTtcblxuXHQkc2NvcGUuY2hhbmdlU2VjdGlvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHQkc2NvcGUuY3VycmVudFNlY3Rpb24gPSBkYXRhLmhyZWY7XG5cdH07XG5cblx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnZm46IGdyYWxDdHJsLmluaXQnKTtcblx0XHR2YXIgYml0cyA9ICRsb2NhdGlvbi51cmwoKS5zcGxpdCgnLycpO1xuXHRcdCRzY29wZS5jdXJyZW50U2VjdGlvbiA9IGJpdHNbMV07XG5cdH07XG5cblx0aW5pdCgpO1xufV0pO1xuXG5taW50QXBwLmNvbnRyb2xsZXIoJ21haW5DdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdmbjogbWFpbkN0cmwuaW5pdCcpO1xuXHR9O1xuXG5cdGluaXQoKTtcbn1dKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=