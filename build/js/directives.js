(function(){

	angular.module('agaleaSite.directives', [])

		// Header
		.directive('headertop', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/header-top.html',
				controller: function($document){

				}
			};
		})

		// Footer
		.directive('footerBottom', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/footer-bottom.html',
				controller: function($document){

				}
			};
		})

		// Main Slider
		.directive('swiperSlider', function(){
			return {
	      restrict: 'E',
	      templateUrl: './partials/swiper-slider.html',
				controller: function($document){

	        var mySwiper = new Swiper('.swiper-home',{
	          pagination: '.pagination-home',
	          loop:true,
	          grabCursor: false,
	          paginationClickable: true,
	          autoplay:false,
	          // speed:500
	        });

				}
			};
		})

		// Modal and background blur
		.directive('backgroundBlur', function(){
			return {
	      restrict: 'E',
	      templateUrl: './partials/background-blur.html',
				controller: function($document){

					var mySwiper2 = new Swiper('.swiper-modal',{
		        pagination: '.pagination-modal',
		        loop:true,
		        grabCursor: false,
		        paginationClickable: true,
		        autoplay:false,
		        // speed:500
		      });

					$( 'span.close-icon-button,.close-filter' ).click(function() {
					  $('.background-blur').css('opacity','0');
						setTimeout(function(){
						  $('.background-blur').css('z-index','-9');
						},235);

             $('html,body').css({
               "overflow-y" : "scroll",
								"position" : "static"
             })

					});

				}
			};
		})

		//Section description home
		.directive('descBox', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/desc-box.html',
				controller: function($document){

				}
			};
		})

		// Grid products
		.directive('gridBoxes', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/grid-boxes.html',
				controller: function($document){

				}
			};
		})

		//Section "/Nosotros"
		.directive('nosotrosContent', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/nosotros-content.html',
				controller: function($document){

				}
			};
		})

		//Section Menu "Productos"
		.directive('productsMenu', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/products-menu.html',
				controller: function($document){
					
				}
			};
		})

		//Section "Hombres"
		.directive('productosHombres', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/productos-hombres.html',
				controller: function($document){

				}
			};
		})

		//Section "Mujeres"
		.directive('productosMujeres', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/productos-mujeres.html',
				controller: function($document){

				}
			};
		})

		//Section "Niños"
		.directive('productosNinos', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/productos-ninos.html',
				controller: function($document){

				}
			};
		})

		//Grid section "Tips"
		.directive('gridTips', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/grid-tips.html',
				controller: function($document){
					$( 'li.box-flex' ).click(function() {
					  $('.background-blur').css('z-index','9');
						$('html').css('overflow','hidden');
						if ($(window).width() <= 768) {
	             $('html,body').css({
	               "overflow-y" : "hidden",
								 "position" : "fixed"
	             })
		        }
						setTimeout(function(){
						  $('.background-blur').css('opacity','1');
						}, 150);
					});
				}
			};
		})

		//Contact Form
		.directive('contactForm', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/contact-form.html',
				controller: function($document){
				}
			};
		})

		//Google Maps Settings
		.directive('googleMap', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/google-map.html',
				controller: function($document){

				}
			};
		})
			//Vista de un solo producto
		.directive('productItem', function(){
			return {
				restrict: 'E',
				templateUrl: './partials/product-item.html',
				controller: function($document){
					var mySwiper = new Swiper('.swiper-item',{
	          pagination: '.pagination-item',
	          loop:true,
	          grabCursor: false,
	          paginationClickable: true,
	          autoplay:false,
	          // speed:500
	        });
				}
			};
		})

})();
