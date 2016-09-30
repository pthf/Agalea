(function(){
  var app = angular.module('agaleaPanel', [
		'ngRoute',
    'ngclipboard',
    'ngSanitize',
    'ui.tinymce',
		'agaleaPanel.controllers',
		'agaleaPanel.services',
		'therappyPanel.directives'
	]);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/home-slider', {
        templateUrl: './../views/home-slider.html',
        controller: 'menuNavController'
      })
      .when('/products', {
        templateUrl: './../views/products.html',
        controller: 'menuNavController'
      })
      .when('/product/:id', {
        templateUrl: './../views/product.html',
        controller: 'menuNavController'
      })
      .when('/subcategory/:id', {
        templateUrl: './../views/subcategory.html',
        controller: 'menuNavController'
      })
      .when('/blog-tips', {
        templateUrl: './../views/blog-tips.html',
        controller: 'menuNavController'
      })
      .when('/note/:id', {
        templateUrl: './../views/note.html',
        controller: 'menuNavController'
      })
      .otherwise({
				redirectTo: '/redirect'
			});
  }]);
})();
