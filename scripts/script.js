/* *****************
Load Screen 
*******************/

$(function(){
				$( "#social_buttons" ).hide().delay(1000).fadeIn( 1300 );
				
			});

/* *****************
Button Hover Code 
*******************/

  $(function() {
    $('#fcc').hover(function() {
      $(this).html('Twitter');
    }, function() {
      $(this).html('<i class="fab fa-twitter fa-2x" aria-hidden="true">');
    });

    $('#codepen').hover(function() {
      $(this).html('Codepen');
    }, function() {
      $(this).html('<i class="fab fa-codepen fa-2x" aria-hidden="true">');
    });

    $('#linkedin').hover(function() {
      $(this).html('LinkedIn');
    }, function() {
      $(this).html('<i class="fab fa-linkedin fa-2x" aria-hidden="true">');
    });

    $('#github').hover(function() {
      $(this).html('Github');
    }, function() {
      $(this).html('<i class="fab fa-github fa-2x" aria-hidden="true">');
    });

  });

/* *****************
Intriguing Button Fade In
*******************/

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1300);
                    
            }
            
        }); 
    
    });
    
});
