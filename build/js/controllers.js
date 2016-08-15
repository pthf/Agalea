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
			if(category != null){
				agaleaService.getByCategory(category).then(function(data){
					$scope.listCategories = data;
				});
			}else{
				agaleaService.getAllCategories().then(function(data){
					$scope.listCategories = data;
				});
			}
		}])

		.controller('showProductsController', ['$scope', 'agaleaService', '$routeParams', function($scope, agaleaService, $routeParams){
			var category = $routeParams.categoria;
			var subcategory = $routeParams.subcategoria;
			agaleaService.getProductsByFilters(category, subcategory).then(function(data){
				$scope.listProducts = data;
			});
		}])

		.controller('showBlogTipsController', ['$scope', 'agaleaService', '$sce', function($scope, agaleaService, $sce){
			$scope.trustAsHtml = function(html) {
				return $sce.trustAsHtml(html);
			};
			$scope.detailInfo = [];
			agaleaService.getTipsBlog().then(function(data){
				$scope.listTips = data;
			});
			$scope.loadDetailsInfo = function(idBlogtip){
				agaleaService.getDetailTip(idBlogtip).then(function(data){
					$scope.detailInfo = data;
				});
			};
		}])

})();
