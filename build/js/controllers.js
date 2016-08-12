(function(){

	angular.module('agaleaSite.controllers', [])

		.controller('homeSliderController', ['$scope', function($scope){
				$('.logo-header svg').on('click', function(){
					$('li.menu-item a').removeClass('selected');
				})
		}])

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

		.controller('getDataSiteController', ['$scope', 'agaleaService',  function($scope, agaleaService){
			//SliderHome
			$scope.loadingSliderHome = false;
			agaleaService.getImagesSliderHome().then(function(data){
				$scope.listSliderHome = data;
				$scope.loadingSliderHome = true;
			});

			//Subcategorias Home
			$scope.loadingSubcategoriesHome = false;
			agaleaService.getSubcategoriesHome().then(function(data){
				$scope.listSubcategoryHome = data;
				$scope.loadingSubcategoriesHome = true;
			});

			//Categories Products
			$scope.loadingCategoriesProducts = false;
			agaleaService.getCategoriesProducts().then(function(data){
				$scope.listCategoryProducts = data;
				$scope.loadingCategoriesProducts = true;
			});

		}])

		.controller('showByFiltersController', ['$scope', 'agaleaService', '$routeParams', function($scope, agaleaService, $routeParams){
			var category = $routeParams.categoria;
			$scope.loadDataFilters = false;
			if(category != null){
				agaleaService.getByCategory(category).then(function(data){
					$scope.listCategories = data;
					$scope.loadDataFilters = true;
				});
			}else{
				agaleaService.getAllCategories().then(function(data){
					$scope.listCategories = data;
					$scope.loadDataFilters = true;
				});
			}
		}])

})();
