(function($){
	var data = [
		{
			item_code:"000001",
			item_type:"烟水烟路",
			total_cost:129381,
			subsidy:62412,
			apply_date:"2016-10-25",
			statu:false,
			status:"县级审核中"
		},
		{
			item_code:"000002",
			item_type:"密集烤房",
			total_cost:129381,
			subsidy:91231,
			apply_date:"2016-10-25",
			statu:true,
			status:"县级审核中"
		},
		{
			item_code:"000003",
			item_type:"育苗设施建设",
			total_cost:874524,
			subsidy:701237,
			apply_date:"2016-10-25",
			statu:true,
			status:"县级审核不通过"
		},
		{
			item_code:"000004",
			item_type:"烟用机械",
			total_cost:35234,
			subsidy:35234,
			apply_date:"2016-10-25",
			statu:true,
			status:"县级审核通过"
		},
		{
			item_code:"000005",
			item_type:"土地整理",
			total_cost:745734,
			subsidy:745734,
			apply_date:"2016-10-25",
			statu:true,
			status:"县级审核中"
		},
		{
			item_code:"000006",
			item_type:"烟水烟路",
			total_cost:104742,
			subsidy:104742,
			apply_date:"2016-10-25",
			statu:true,
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
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'apply_date',render:function(){
              return '<div class="btn btn-default btn-file"><i class="fa fa-paperclip"></i>上传照片<input type="file" name="attachment"></div>'
            }},
            {data:'statu',render:function(data,type,row,meta){
            	if(row.statu == true){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button>';
            	}
            }},
            {data:'apply_date',sWidth:'150px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">补贴资金信息详情</button>'
            }}
          ]
      });

	$("#tTrolleys1").dataTable({
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
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'apply_date',render:function(){
              return '<div class="btn btn-default btn-file"><i class="fa fa-paperclip"></i>上传照片<input type="file" name="attachment"></div>'
            }},
            {data:'statu',render:function(data,type,row,meta){
            	if(row.statu == true){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button>';
            	}
            }},
            {data:'apply_date',sWidth:'150px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">补贴资金信息详情</button>'
            }}
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
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'apply_date',render:function(){
              return '<div class="btn btn-default btn-file"><i class="fa fa-paperclip"></i>上传照片<input type="file" name="attachment"></div>'
            }},
            {data:'statu',render:function(data,type,row,meta){
            	if(row.statu == true){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button>';
            	}
            }},
            {data:'apply_date',sWidth:'150px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">补贴资金信息详情</button>'
            }}
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
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'apply_date',render:function(){
              return '<div class="btn btn-default btn-file"><i class="fa fa-paperclip"></i>上传照片<input type="file" name="attachment"></div>'
            }},
            {data:'statu',render:function(data,type,row,meta){
            	if(row.statu == true){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button>';
            	}
            }},
            {data:'apply_date',sWidth:'150px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">补贴资金信息详情</button>'
            }}
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
            {data:'total_cost'},
            {data:'subsidy'},
            {data:'apply_date'},
            {data:'apply_date',render:function(){
              return '<div class="btn btn-default btn-file"><i class="fa fa-paperclip"></i>上传照片<input type="file" name="attachment"></div>'
            }},
            {data:'statu',render:function(data,type,row,meta){
            	if(row.statu == true){
            		return '<button class="btn edit_publicity" style="color:#3c8dbc;border:1px solid #3c8dbc;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button><i class="fa fa-fw fa-exclamation-circle" style="color:#f39c12;"></i>'   
            	}else{
            		return '<button class="btn disabled" style="color:gray;border:1px solid gray;padding:5px 5px;border-radius:5px;">填写补贴资金信息</button>';
            	}
            }},
            {data:'apply_date',sWidth:'150px',render:function(){
            	return '<button class="btn btn-block btn-primary item_details" type="button">补贴资金信息详情</button>'
            }}
          ]
      });

      $(".item_details").click(function(){
      	$("#infoModal").modal('toggle')
      })

      $(".edit_publicity").click(function(){
      	$("#editModal").modal('toggle')
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