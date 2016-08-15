(function(){
  angular.module('agaleaSite.services', [])

  .factory('agaleaService', ['$http', '$q', function($http, $q){

    function getImagesSliderHome(){
      var deferred = $q.defer();
      $http.get('./admin/php/services.php?namefunction=getImagesSliderHome')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getSubcategoriesHome(){
      var deferred = $q.defer();
      $http.get('./php/services.php?namefunction=getSubcategoriesHome')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getCategoriesProducts(){
      var deferred = $q.defer();
      $http.get('./admin/php/services.php?namefunction=getCategories')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getByCategory(category){
      var deferred = $q.defer();
      $http.get('./php/services.php?namefunction=getByCategory&category='+category)
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getAllCategories(){
      var deferred = $q.defer();
      $http.get('./php/services.php?namefunction=getAllCategories')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getProductsByFilters(category, subcategory){
      var deferred = $q.defer();
      $http.get('./php/services.php?namefunction=getProductsByFilters&category='+category+'&subcategory='+subcategory)
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getTipsBlog(){
      var deferred = $q.defer();
      $http.get('./php/services.php?namefunction=getTipsBlog')
        .success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    function getDetailTip(idBlogtip){
      var deferred = $q.defer();
      getTipsBlog().then(function(data){
        var result = data.filter(function(item){
          return item.idBlogtip === idBlogtip;
        });
        if(result.length > 0 ){
          deferred.resolve(result[0]);
        } else {
          deferred.reject();
        }
      });
      return deferred.promise;
    }


    return {
      getImagesSliderHome: getImagesSliderHome,
      getSubcategoriesHome: getSubcategoriesHome,
      getCategoriesProducts: getCategoriesProducts,
      getByCategory: getByCategory,
      getAllCategories: getAllCategories,
      getProductsByFilters: getProductsByFilters,
      getTipsBlog: getTipsBlog,
      getDetailTip: getDetailTip
    }

  }]);

})();
