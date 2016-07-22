(function(){

	angular.module('agaleaSite.controllers', [])

		.controller('homeSliderController', ['$scope', function($scope){

		}])

		//resaltar la opcion del menu resaltado
		.controller('itemSelectedController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location ){
			$scope.routeParams = $location.path();
			switch ($scope.routeParams) {
				case '/': $scope.itemselected = 0;  break;
	      case '/nosotros': $scope.itemselected = 1;  break;
	      case '/productos': $scope.itemselected = 2;  break;
	      case '/tips': $scope.itemselected = 3;  break;
	      case '/contacto': $scope.itemselected = 4;  break;
			}
			$scope.changerute = function(item){
				$scope.itemselected = item;
			}
		}])





})();
