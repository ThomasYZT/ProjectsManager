(function($){
	var data = [
		{
			item_code:"000001",
			item_type:"烟水烟路",
			total_cost:129381,
			subsidy:62412,
			apply_date:"2016-10-25",
			choose_point:true,
			design:true,
			status:"县级审核中"
		},
		{
			item_code:"000002",
			item_type:"密集烤房",
			total_cost:129381,
			subsidy:91231,
			apply_date:"2016-10-25",
			choose_point:true,
			design:false,
			status:"县级审核中"
		},
		{
			item_code:"000003",
			item_type:"育苗设施建设",
			total_cost:874524,
			subsidy:701237,
			apply_date:"2016-10-25",
			choose_point:false,
			design:false,
			status:"县级审核不通过"
		},
		{
			item_code:"000004",
			item_type:"烟用机械",
			total_cost:35234,
			subsidy:35234,
			apply_date:"2016-10-25",
			choose_point:true,
			design:true,
			status:"县级审核通过"
		},
		{
			item_code:"000005",
			item_type:"土地整理",
			total_cost:745734,
			subsidy:745734,
			apply_date:"2016-10-25",
			choose_point:true,
			design:false,
			status:"县级审核中"
		},
		{
			item_code:"000006",
			item_type:"烟水烟路",
			total_cost:104742,
			subsidy:104742,
			apply_date:"2016-10-25",
			choose_point:true,
			design:true,
			status:"县级审核不通过"
		}
	];

	$("#tTrolleys").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: false,//搜索
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
            {data:'apply_date'}
            /*{data:'choose_point',sWidth:'350px',render:function(data,type,row,meta){
            	if(row.choose_point == false){
            		return '<button class="btn edit_choose_point" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写选点报告书</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'+
            			   '<i class="fa fa-fw fa-long-arrow-right" style="color:gray;width:30px;"></i><button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写规划设计书</button>'
            	}else if(row.choose_point == true && row.design == false){
            		return '<button class="btn check_choose_point" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">查看选点报告书</button><i class="fa fa-fw fa-check-circle" style="color:green;"></i>'+
            			   '<i class="fa fa-fw fa-long-arrow-right" style="color:green;width:30px;"></i><button class="btn edit_design" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写规划设计书</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12"></i>'
            	}else if(row.choose_point == true && row.design == true){
            		return '<button class="btn check_choose_point" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">查看选点报告书</button><i class="fa fa-fw fa-check-circle" style="color:green;"></i>'+
            			   '<i class="fa fa-fw fa-long-arrow-right" style="color:green;width:30px;"></i><button class="btn check_design" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">查看规划设计书</button><i class="fa fa-fw fa-exclamation-circle" style="color:green"></i>'
            	}
            	return 'as';
            }},
            {data:'apply_date',sWidth:'100px',render:function(row, data, index){
            	return '<button class="btn btn-block btn-primary item_details" type="button">查看详情</button>'
            }}*/
          ]
      });
      

      $("#tTrolleys2").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: false,//搜索
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
            {data:'apply_date'}
          ]
      });

      $("#tTrolleys3").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: false,//搜索
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
            {data:'apply_date'}
          ]
      });

      $("#tTrolleys4").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: false,//搜索
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
            {data:'apply_date'}
          ]
      });

      $("#tTrolleys5").dataTable({
          paging: false,//分页
          ordering: false,//是否启用排序
          searching: false,//搜索
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
            {data:'apply_date'}
          ]
      });
      
      $(".item_details").click(function(){
      	$("#details").modal('toggle')
      })
      $(".edit_choose_point").click(function(){
      	$("#edit_choose_point").modal('toggle')
      })
      $(".edit_design").click(function(){
      	$("#edit_design").modal('toggle')
      })
      $(".check_design").click(function(){
      	$("#check_design").modal('toggle')
      })
      $(".check_choose_point").click(function(){
      	$("#check_choose_point").modal('toggle')
      })
      $(".edit").click(function(){
      	console.log(this)
      	//console.log($(this).parent().parent().parent().parent().find("input").length)/*.attr({"disabled":""})*/
      	$.each( $(this).parent().parent().parent().parent().find("input"), function(i, n){
    		  $(n).removeAttr("disabled");
    		  if($(this).parent().parent().parent().parent().find("textarea")){
    		  	$(this).parent().parent().parent().parent().find("textarea").removeAttr("disabled");
    		  }
    		});
  		  $(this).replaceWith('<button class="btn btn-success" >提交</button>');
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