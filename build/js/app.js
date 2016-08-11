(function (){

	var app = angular.module('agaleaSite', [
    	'ngRoute',
    	'agaleaSite.controllers',
    	'agaleaSite.directives',
			'ngMap'
  	]);

	app.run(function($rootScope, $anchorScroll){
		//Scroll hacia arriba cada vez que cambie de ruta
		$rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
		    window.scrollTo(0, 0);
		});
	})

	app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeSliderController'
			})
			.when('/nosotros', {
				templateUrl: 'views/nosotros.html',
			})
			.when('/productos/:categoria', {
				templateUrl: 'views/productos.html',
			})
			.when('/productos/', {
				templateUrl: 'views/productos.html',
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
