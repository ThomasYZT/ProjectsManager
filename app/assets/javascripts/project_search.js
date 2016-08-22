(function($){

      var data = [
        {
          item_code: "00001",
          item_name: "烟基项目01",
          item_type: "水池",
          item_date: "2016-8-22",
          item_statu: "未提交"

        },
        {
          item_code: "00001",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_date: "2016-8-22",
          item_statu: "审核中"

        },
        {
          item_code: "00001",
          item_name: "烟基项目03",
          item_type: "管网",
          item_date: "2016-8-22",
          item_statu: "未通过"

        },
        {
          item_code: "00001",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_date: "2016-8-22",
          item_statu: "已通过"

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
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_date'},
            {data:'item_statu'},
            {data:'item_statu',render:function(data,row,full){
            	if(data == "未提交"){
            		return "<a href='#'>编辑</a><br /><a href='#'>提交</a>"
            	}else if(data == "审核中"){
            		return ""
            	}else if(data == "未通过"){
            		return "<a href='#'>编辑</a>"
            	}else if(data == "已通过"){
            		return ""
            	}
            }}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $("#date_search").click(function(){

      	$("#search_result").css({display:"block"});
      })

      $("#tTrolleys1").dataTable({
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
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_date'},
            {data:'item_statu'},
            {data:'item_statu',render:function(data,row,full){
            	if(data == "未提交"){
            		return "<a href='#'>编辑</a><br /><a href='#'>提交</a>"
            	}else if(data == "审核中"){
            		return ""
            	}else if(data == "未通过"){
            		return "<a href='#'>编辑</a>"
            	}else if(data == "已通过"){
            		return ""
            	}
            }}
          ]
      });
      $("#tTrolleys1_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys1_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys1_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
})(jQuery)