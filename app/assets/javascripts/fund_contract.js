(function($){
	var data = [
		{
			item_code:"000001",
			item_type:"烟水烟路",			
			apply_date:"2016-10-25",
			input_status:true
		},
		{
			item_code:"000002",
			item_type:"密集烤房",			
			apply_date:"2016-10-25",
			input_status:false
		},
		{
			item_code:"000003",
			item_type:"育苗设施建设",
			apply_date:"2016-10-25",
			input_status:false
		},
		{
			item_code:"000004",
			item_type:"烟用机械",				
			apply_date:"2016-10-25",
			input_status:false
		},
		{
			item_code:"000005",
			item_type:"土地整理",
			apply_date:"2016-10-25",
			input_status:false
		},
		{
			item_code:"000006",
			item_type:"烟水烟路",
			apply_date:"2016-10-25",
			input_status:false
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
            {data:'apply_date'},
            {data:'input_status',"sWidth":"150px",render:function(data,type,row,meta){
            	if(row.input_status == false){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写项目补贴合同</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写项目补贴合同</button>';
            	}
            }}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $(".edit_publicity").click(function(){
      	$("#edit_publicity").modal('toggle');
      })
})(jQuery)