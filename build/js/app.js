(function (){

	var app = angular.module('agaleaSite', [
    	'ngRoute',
    	'agaleaSite.controllers',
    	'agaleaSite.directives',
			'ngMap'
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
			.when('/productos/womens', {
				templateUrl: 'views/productos-mujeres.html',
			})
			.when('/productos/men', {
				templateUrl: 'views/productos-hombres.html',
			})
			.when('/productos/kids', {
				templateUrl: 'views/productos-ninos.html',
			})
			.when('/item', {
				templateUrl: 'views/product-view-item.html',
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
