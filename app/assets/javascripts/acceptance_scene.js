(function(){
	if($("#code").text().length == 6){
		$(".content").css({display:"none"});
		$(".content2").css({display:""})
	}

	if($("#code").text().length == 2){
		$(".content").css({display:"none"});
		$(".content2").css({display:"none"});
		$(".content3").css({display:""});

	}

	$(".count").click(function(){
        $.each( $(".list").find("li"), function(i, n){
          $(n).removeClass("active")
        });
        $(this).parent().addClass("active");

        $.each( $(".BOX"), function(i, n){
          $(n).css({display:"none"})
        });
        $.each( $(".list").find("li"), function(i, n){
          var index = i;
          var boxs = $(".BOX");
          if($(n).hasClass("active")){
            console.log(boxs[i]);
            $(boxs[i]).css({display:""})
          }
        });

      })
})()