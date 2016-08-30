(function($){
	var data = [
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
		{
			item_name:"烤房群",
			item_code:"00001",
			item_address:"湖南省株洲市",
			reason:"设备过于老旧",
			time:"2016-8-29",
			county_note:"同意"
		},
	]
	$("#tTrolleys").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: true,//搜索
          language: {
            search: '',//右上角的搜索文本，可以写html标签
            zeroRecords: "没有内容",//table tbody内容为空时，tbody的内容。
            //下面三者构成了总体的左下角的内容。
            info: "",//左下角的信息显示，大写的词为关键字。
            infoEmpty: "",//筛选为空时左下角的显示。
            infoFiltered: ""//筛选之后的左下角筛选提示，
          },
          data:data,
          columns:[
            {data:'item_name'},
            {data:'item_code'},
            {data:'item_address'},
            {data:'reason'},
            {data:'time'},
            {data:"item_name",render:function(){
            	return "[图片]"
            }},
            {data:'county_note'},
            {data:'item_name',"sWidth":"100px",render:function(){
            	return '<a class="btn btn-primary">同意</a> <a class="btn btn-danger">拒绝</a>'
            }}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
})(jQuery)