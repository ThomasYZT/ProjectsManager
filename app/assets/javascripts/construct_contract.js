(function($){
  var data = [
  	{
  		contract_code:"00001",
  		first_part:"永州市烟草局",
  		second_part:"二号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00002",
  		first_part:"永州市烟草局",
  		second_part:"四号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00003",
  		first_part:"永州市烟草局",
  		second_part:"六号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00004",
  		first_part:"永州市烟草局",
  		second_part:"八号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00005",
  		first_part:"永州市烟草局",
  		second_part:"十号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00006",
  		first_part:"永州市烟草局",
  		second_part:"十二号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00007",
  		first_part:"永州市烟草局",
  		second_part:"十四号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00008",
  		first_part:"永州市烟草局",
  		second_part:"十六号村小组",
  		date:"2016-11-22",
      money:10000
  	},
  	{
  		contract_code:"00009",
  		first_part:"永州市烟草局",
  		second_part:"十八号村小组",
  		date:"2016-11-22",
      money:10000
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
            {data:'contract_code'},
            {data:'first_part'},
            {data:'second_part'},
            {data:'money'},
            {data:'date'}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
})(jQuery)