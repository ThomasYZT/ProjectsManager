(function($){
	$(".xls_info").click(function(){
            $(".suggest").css({display:"none"})
            $(".doc").css({display:"none"})
            $(".xls").css({display:""})
      })
	$(".doc_info").click(function(){
            $(".suggest").css({display:"none"})
            $(".doc").css({display:""})
            $(".xls").css({display:"none"})
      })

      $(".nopass").click(function(){
            $("#suggests").modal("toggle");
      })
})(jQuery)