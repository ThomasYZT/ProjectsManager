(function($){
	
      
      
      $(".edit_publicity").click(function(){
      	$("#edit_publicity").modal('toggle');
      })

      $(".count").click(function(){
      	$.each( $(".list").find("li"), function(i, n){
    		  $(n).removeClass("active")
    		});
    		$(this).parent().addClass("active");

    		$.each( $(".box-widget"), function(i, n){
    		  $(n).css({display:"none"})
    		});
    		$.each( $(".list").find("li"), function(i, n){
    		  var index = i;
    		  var boxs = $(".box-widget");
    		  if($(n).hasClass("active")){
    		  	console.log(boxs[i]);
    		  	$(boxs[i]).css({display:""})
    		  }
    		});

      })
})(jQuery)