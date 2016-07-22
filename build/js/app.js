(function (){

	var app = angular.module('agaleaSite', [
    	'ngRoute',
    	'agaleaSite.controllers',
    	'agaleaSite.directives'
  	]);

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeSliderController'
			})
			.when('/nosotros', {
				templateUrl: 'views/nosotros.html',
			})
			.when('/productos', {
				templateUrl: 'views/productos.html',
			})
			.when('/tips', {
				templateUrl: 'views/tips.html',
			})
			.when('/contacto', {
				templateUrl: 'views/contacto.html',
			})
			.otherwise({
				redirectTo: '/'
			});

	}]);

})();
