(function($){

    $('.spin1 .btn:first-of-type').on('click', function() {
    	$('.spin1 input').val( parseInt($('.spin1 input').val(), 10) + 1);
	  });
  	$('.spin1 .btn:last-of-type').on('click', function() {
  		if(parseInt($('.spin1 input').val(), 10) > 0){
  			$('.spin1 input').val( parseInt($('.spin1 input').val(), 10) - 1);
  		}
  	});
    $('.spin2 .btn:first-of-type').on('click', function() {
      $('.spin2 input').val( parseInt($('.spin2 input').val(), 10) + 1);
    });
    $('.spin2 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin2 input').val(), 10) > 0){
        $('.spin2 input').val( parseInt($('.spin2 input').val(), 10) - 1);
      }
    });
    $('.spin3 .btn:first-of-type').on('click', function() {
      $('.spin3 input').val( parseInt($('.spin3 input').val(), 10) + 1);
    });
    $('.spin3 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin3 input').val(), 10) > 0){
        $('.spin3 input').val( parseInt($('.spin3 input').val(), 10) - 1);
      }
    });
    $('.spin4 .btn:first-of-type').on('click', function() {
      $('.spin4 input').val( parseInt($('.spin4 input').val(), 10) + 1);
    });
    $('.spin4 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin4 input').val(), 10) > 0){
        $('.spin4 input').val( parseInt($('.spin4 input').val(), 10) - 1);
      }
    });
    $('.spin5 .btn:first-of-type').on('click', function() {
      $('.spin5 input').val( parseInt($('.spin5 input').val(), 10) + 1);
    });
    $('.spin5 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin5 input').val(), 10) > 0){
        $('.spin5 input').val( parseInt($('.spin5 input').val(), 10) - 1);
      }
    });

})(jQuery)