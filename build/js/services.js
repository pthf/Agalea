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
    // function blogTipsByItem(id){
    //   var id = id;
    //   var deferred = $q.defer();
    //   getBlogTips().then(function(data){
    //     var result = data.filter(function(item){
    //       return item.idBlogtip === id;
    //     });
    //     if(result.length > 0 ){
    //       deferred.resolve(result[0]);
    //     } else {
    //       deferred.reject();
    //     }
    //   });
    //   return deferred.promise;
    // }
    // function getImagesLibrary(){
    //   var deferred = $q.defer();
    //   $http.get('./../php/services.php?namefunction=getImagesLibrary')
    //     .success(function(data){
    //         deferred.resolve(data);
    //     });
    //     return deferred.promise;
    // }
    return {
      getImagesSliderHome: getImagesSliderHome
    }
  }]);
})();
