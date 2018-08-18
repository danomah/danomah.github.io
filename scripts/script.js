/* *****************
Load Screen 
*******************/

$(function(){
				$( "#fcc" ).hide().delay(1000).fadeIn( 800 );
				$( "#codepen" ).hide().delay(1500).fadeIn( 800 );
				$( "#linkedin" ).hide().delay(2000).fadeIn( 800 );
				$( "#github" ).hide().delay(2500).fadeIn( 800 );
			});

/* *****************
Button Hover Code 
*******************/

  $(function() {
    $('#fcc').hover(function() {
      $(this).html('Free Code Camp');
    }, function() {
      $(this).html('<i class="fab fa-free-code-camp fa-2x" aria-hidden="true">');
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

  