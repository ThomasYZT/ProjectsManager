(function(){
	if($("#code").text().length == 6){
		$(".class_info").html("全市项目汇总表")
	}

	if($("#code").text().length == 2){
		$(".class_info").html("全省项目汇总表")

	}
})()