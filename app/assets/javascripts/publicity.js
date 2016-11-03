(function($){
	var data = [
		{
			item_code:"000001",
			item_type:"烟水烟路",
			total_cost:129381,
			subsidy:62412,
			apply_date:"2016-10-25",
			status:"县级审核中"
		},
		{
			item_code:"000002",
			item_type:"密集烤房",
			total_cost:129381,
			subsidy:91231,
			apply_date:"2016-10-25",
			status:"县级审核中"
		},
		{
			item_code:"000003",
			item_type:"育苗设施建设",
			total_cost:874524,
			subsidy:701237,
			apply_date:"2016-10-25",
			status:"县级审核不通过"
		},
		{
			item_code:"000004",
			item_type:"烟用机械",
			total_cost:35234,
			subsidy:35234,
			apply_date:"2016-10-25",
			status:"县级审核通过"
		},
		{
			item_code:"000005",
			item_type:"土地整理",
			total_cost:745734,
			subsidy:745734,
			apply_date:"2016-10-25",
			status:"县级审核中"
		},
		{
			item_code:"000006",
			item_type:"烟水烟路",
			total_cost:104742,
			subsidy:104742,
			apply_date:"2016-10-25",
			status:"县级审核不通过"
		}
	];

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
            {data:'item_code'},
            {data:'item_type'},
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'status'},
            {data:'apply_date',sWidth:'100px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">查看详情</button>'
            }}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $(".item_details").click(function(){
      	$(".modal").modal('toggle')
      })
})(jQuery)