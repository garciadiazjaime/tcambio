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