(function(){
	angular.module('therappyPanel.directives', [])
	.directive('topNav', function(){
		return{
			restrict: 'E',
			templateUrl: './../partials/top-nav.php',
			controller: function($document){
				var open = true;
				$(window).resize(function(){
					open = true;
					if($(window).width()>1366){
						$('.menu-nav').css({'margin-left' : '0%'});
						$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
					}else{
						if($(window).width()>768){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '80%','left' : '20%'});
						}else{
							if($(window).width()>640){
								$('.menu-nav').css({ 'margin-left' : '0%'});
								$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
							}
						}
					}
				});
				$('#menuha').click(function(){
					if(open){
						if($(window).width()>1366){
							$('.menu-nav').css({'margin-left' : '-15%'});
							$('.panel-cont').css({'width' : '100%', 'left' : '0'});
						}else{
							if($(window).width()>768){
								$('.menu-nav').css({'margin-left' : '-20%'});
								$('.panel-cont').css({'width' : '100%','left' : '0'});
							}else{
								if($(window).width()>640){
									$('.menu-nav').css({ 'margin-left' : '-25%'});
									$('.panel-cont').css({ 'width' : '100%', 'left' : '0'});
								}
							}
						}
					}else{
						if($(window).width()>1366){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
						}else{
							if($(window).width()>768){
								$('.menu-nav').css({'margin-left' : '0%'});
								$('.panel-cont').css({'width' : '80%','left' : '20%'});
							}else{
								if($(window).width()>640){
									$('.menu-nav').css({ 'margin-left' : '0%'});
									$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
								}
							}
						}
					}
					open = !open;
				});
				$('.logout').click(function(){
					var namefunction = 'sessionDestroy';
					$.ajax({
						beforeSend: function(){
						},
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction : namefunction
						},
						success: function(result){
							location.reload();
						},
						error: function(error){
						},
						complete: function(){
						},
						timeout: 10000
					});
				});
			}
		};
	})
	.directive('menuNav', function(){
		return{
			restrict: 'E',
			templateUrl: './../partials/menu-nav.php',
			controller: function($document){
				$(window).resize(function(){
					if($(window).width()>1366){
						$('.menu-nav').css({'margin-left' : '0%'});
						$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
					}else{
						if($(window).width()>768){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '80%','left' : '20%'});
						}else{
							if($(window).width()>640){
								$('.menu-nav').css({ 'margin-left' : '0%'});
								$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
							}
						}
					}
				});
			}
		};
	})
	.directive('listHomeSlider', function(){
    return {
      restrict: 'E',
      templateUrl: './../partials/list-home-slider.html',
      controller: function($document){
        $(document).on('click', '.deleteImageSlider', function(){
          var idHomeBanner = $(this).attr('data-id');
          var namefunction = 'removeImageSlideHome';
          $.ajax({
						url: "../php/functions.php",
					  type: "POST",
					  data: {
              namefunction: namefunction,
              idHomeBanner: idHomeBanner
            },
						success: function(result){
							$('.bReload').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
        });
        $('#setImageForm').submit(function(){
          var ajaxData = new FormData();
    			ajaxData.append("namefunction","setBannerImage");
					ajaxData.append("data", $(this).serialize());
    			$.each($("#setImageForm input[type=file]"), function(i,obj){
    				$.each(obj.files, function(j, file){
    					ajaxData.append('setImage['+j+']', file);
    				})
    			});
          $.ajax({
            url: "../php/functions.php",
            type: "POST",
            data: ajaxData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,   // tell jQuery not to set contentType
            success: function(result){
              $('.bReload').trigger('click');
            },
            error: function(error){
              alert(error);
            }
          });
        });
      }
    }
  })
	.directive('listProducts', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-products.html',
			controller: function($document){
				$(document).on('click', '.deleteProduct', function(){
					var idProduct = $(this).attr('data-id');
					var namefunction = 'removeProduct';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idProduct: idProduct
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setProduct').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewProduct");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setProduct input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('detailProduct', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-product.html',
			controller: function($document){
				function readURL(input){
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function (e) {
					 		$('#imageSelector').attr('src', e.target.result);
			 			}
						reader.readAsDataURL(input.files[0]);
	 				}
				}
				$('#setImage').change(function(){
					readURL(this);
				});
				$('#changeImage').submit(function(){
					var productId = $('#productId').val();
					var ajaxData = new FormData();
					ajaxData.append("productId",productId);
					ajaxData.append("namefunction","modifyProductImage");
					$.each($("#changeImage input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							location.href = "#/products";
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#changeProduct').submit(function(){
					var data = $(this).serialize();
					var namefunction = "modifyProduct";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							location.href = "#/products";
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('listCategory', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-category.html',
			controller: function($document){
				$(document).on('click', '.deleteCategory', function(){
					var idCategory = $(this).attr('data-id');
					var namefunction = 'removeCategory';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idCategory: idCategory
						},
						success: function(result){
							if(result.length>0){
								$('.alertDeleteCat').css({'display' : 'block'});
								setTimeout(function(){
									$('.alertDeleteCat').css({'display' : 'none'});
								},5000);
							}else{
								$('.clickUpdate').trigger('click');
							}
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#addCategory').submit(function(){
					var data = $(this).serialize();
					var namefunction = "addCategory";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('listSubcategory', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-subcategory.html',
			controller: function($document){
				$(document).on('click', '.deleteSubcategory', function(){
					var idSubcategory = $(this).attr('data-id');
					var namefunction = 'removeSubcategory';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idSubcategory: idSubcategory
						},
						success: function(result){
							if(result.length>0){
								$('.alertDeleteSubCat').css({'display' : 'block'});
								setTimeout(function(){
									$('.alertDeleteSubCat').css({'display' : 'none'});
								},5000);
							}else{
								$('.clickUpdate').trigger('click');
							}
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#addSubcategory').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addSubcategory");
					ajaxData.append("data",$(this).serialize());
					$.each($("#addSubcategory input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('detailSubcategory', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-subcategory.html',
			controller: function($document){
				function readURL(input){
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function (e) {
					 		$('#imageSelector').attr('src', e.target.result);
			 			}
						reader.readAsDataURL(input.files[0]);
	 				}
				}
				$('#setImage').change(function(){
					readURL(this);
				});
				$('#changeImageSubcategory').submit(function(){
					var subcategoryId = $('#subcategoryId').val();
					var ajaxData = new FormData();
					ajaxData.append("subcategoryId",subcategoryId);
					ajaxData.append("namefunction","modifySubcategoryImage");
					$.each($("#changeImageSubcategory input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							location.href = "#/products";
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#changeSubcategory').submit(function(){
					var data = $(this).serialize();
					var namefunction = "modifySubcategory";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							location.href = "#/products";
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('insertBlogTips', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/insert-blog-tips.html',
			controller: function($document){
				$('.iconFloatClick').click(function(){
					$('#blockPop').css({ 'opacity': '1', 'z-index': '5' });
					$('#contendLoadImages').css({ 'opacity': '1', 'z-index': '10' });
				});
				$('#buttonSave').click(function(){
					$('#formAdd .formsubmit').trigger('click');
				});
				$('#formAdd').submit(function(e){
					e.preventDefault();
					var namefunction = "addNewBlogTip";
					var data = $(this).serialize();
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							data: data
						},
						success: function(result){
							location.reload();
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('listBlogTips', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-blog-tips.html',
			controller: function($document){
				$(document).on('click', '.deleteNote', function(){
					var idBlogtip = $(this).attr('data-id');
					var namefunction = 'removeBlogTip';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idBlogtip: idBlogtip
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('editBlogTips', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/edit-blog-tips.html',
			controller: function($document){
				$('.iconFloatClick').click(function(){
					$('#blockPop').css({ 'opacity': '1', 'z-index': '5' });
					$('#contendLoadImages').css({ 'opacity': '1', 'z-index': '10' });
				});
				$('#buttonSave').click(function(){
					$('#formEdit .formsubmit').trigger('click');
				});
				$('#formEdit').submit(function(e){
					e.preventDefault();
					var namefunction = "modifyBlogTip";
					var data = $(this).serialize();
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							data: data
						},
						success: function(result){
							location.reload();
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('contendLoadImages', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/contend-load-images.html',
			controller: function($document){
				$('#libraryImages').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","setImagesLibrary");
					$.each($("#libraryImages input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.ocultLoadInfoImages').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('.closePanel').click(function(){
					$('#blockPop').css({ 'opacity': '0', 'z-index': '-1' });
					$('#contendLoadImages').css({ 'opacity': '0', 'z-index': '-1' });
				});
				$(document).on('click', '.deleteImageLibrary', function(){
					var idImage = $(this).attr('data-id');
					var namefunction = 'deleteImageLibrary';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idImage: idImage
						},
						success: function(result){
							$('.ocultLoadInfoImages').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
})();
