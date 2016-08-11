(function(){
  angular.module('agaleaPanel.controllers', [])
  .controller('menuNavController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
		$scope.routeParams = $location.path();
    $scope.selected = 0;
		switch ($scope.routeParams) {
			case '/home-slider': $scope.selected = 1;  break;
      case '/products': $scope.selected = 2;  break;
      case '/blog-tips': $scope.selected = 3;  break;
		}
		$scope.changeNav = function(item){
			$scope.selected = item;
		};
  }])
  .controller('viewNavController', ['$scope', function($scope){
		$scope.item = 1;
		$scope.selectItem = function(item){
			$scope.item = item;
		};
  }])
  .controller('getImagesSliderHomeController', ['$scope', 'agaleaService', function($scope, agaleaService){
    $scope.listImages = [];
    $scope.loadImages = function(){
      agaleaService.getImagesSliderHome().then(function(data){
        $scope.listImages = data;
      });
    }
    $scope.loadImages();
  }])
  .controller('productDataController', ['$scope', 'agaleaService', function($scope, agaleaService){
    $scope.listProduct = [];
    $scope.listCategory = [];
    $scope.listSubCategory = [];
    $scope.loadProducts = function(){
      agaleaService.getProducts().then(function(data){
        $scope.listProduct = data;
      });
    }
    $scope.loadCategories = function(){
      agaleaService.getCategories().then(function(data){
        $scope.listCategory = data;
      });
    }
    $scope.loadSubCategories = function(){
      agaleaService.getSubCategories().then(function(data){
        $scope.listSubCategory = data;
      });
    }
    $scope.update = function(){
      $scope.loadProducts();
      $scope.loadCategories();
      $scope.loadSubCategories();
    }
    $scope.update();
    //This section is about fuction on change categories in add products.
    $scope.categorySelected = null;
    $scope.subCategorySelected = null;
  }])
  .controller('productDetailsController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idProduct = $routeParams.id;
    $scope.productDetails = [];
    $scope.loadProducts = function(){
      agaleaService.productByItem($scope.idProduct).then(function(data){
        $scope.productDetails = data;
      });
    }
    $scope.loadProducts();
  }])
  .controller('subcategoryDetailsController', ['$scope', '$routeParams', 'agaleaService', function($scope, $routeParams, agaleaService){
    $scope.idSubcategory = $routeParams.id;
    $scope.subcategoryDetails = [];
    $scope.loadSubCategories = function(){
      agaleaService.subcategoryByItem($scope.idSubcategory).then(function(data){
        $scope.subcategoryDetails = data;
      });
    }
    $scope.loadSubCategories();
  }])
  .controller('tinyController', ['$scope', function($scope){
    $scope.tinymceModel = 'Initial content';
    $scope.getContent = function() {
      console.log('Editor content:', $scope.tinymceModel);
    };
    $scope.setContent = function() {
      $scope.tinymceModel = 'Time: ' + (new Date());
    };
    $scope.tinymceOptions = {
      onChange: function(e) {
      },
      inline: false,
      plugins : 'advlist autolink link image lists charmap print preview table',
      skin: 'lightgray',
      theme : 'modern',
      height : 600,
      convert_urls:true,
      relative_urls:false,
      remove_script_host:false,
    };
  }])
  .controller('blogTipsController', ['$scope', 'agaleaService', function($scope, agaleaService){
    $scope.blogTipsList = [];
    $scope.loadList = function(){
      agaleaService.getBlogTips().then(function(data){
        $scope.blogTipsList = data;
      });
    }
    $scope.loadList();
  }])
  .controller('blogTipsDetailsController', ['$scope', '$routeParams', 'agaleaService', '$sce', function($scope, $routeParams, agaleaService, $sce){
    $scope.idBlogtip = $routeParams.id;
    $scope.NoteDetails = [];
    $scope.loadNoteDetails = function(){
      agaleaService.blogTipsByItem($scope.idBlogtip).then(function(data){
        $scope.NoteDetails = data;
      });
    }
    $scope.loadNoteDetails();
    $scope.trustAsHtml = function(html) {
      return $sce.trustAsHtml(html);
    };
  }])
  .controller('getImagesLibraryController', ['$scope', 'agaleaService', function($scope, agaleaService){
    $scope.listImages = [];
    $scope.loadList = function(){
      agaleaService.getImagesLibrary().then(function(data){
        $scope.listImages = data;
      });
    }
    $scope.loadList();
  }])
})();
