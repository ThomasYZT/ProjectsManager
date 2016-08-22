(function($){
  $('.spin1 .btn:first-of-type').on('click', function() {
      $('.spin1 input').val( parseInt($('.spin1 input').val(), 10) + 1);
    });
    $('.spin1 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin1 input').val(), 10) > 0){
        $('.spin1 input').val( parseInt($('.spin1 input').val(), 10) - 1);
      }
    });
    $('.spin2 .btn:first-of-type').on('click', function() {
      $('.spin2 input').val( parseInt($('.spin2 input').val(), 10) + 1);
    });
    $('.spin2 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin2 input').val(), 10) > 0){
        $('.spin2 input').val( parseInt($('.spin2 input').val(), 10) - 1);
      }
    });
    $('.spin3 .btn:first-of-type').on('click', function() {
      $('.spin3 input').val( parseInt($('.spin3 input').val(), 10) + 1);
    });
    $('.spin3 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin3 input').val(), 10) > 0){
        $('.spin3 input').val( parseInt($('.spin3 input').val(), 10) - 1);
      }
    });
    $('.spin4 .btn:first-of-type').on('click', function() {
      $('.spin4 input').val( parseInt($('.spin4 input').val(), 10) + 1);
    });
    $('.spin4 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin4 input').val(), 10) > 0){
        $('.spin4 input').val( parseInt($('.spin4 input').val(), 10) - 1);
      }
    });
    $('.spin5 .btn:first-of-type').on('click', function() {
      $('.spin5 input').val( parseInt($('.spin5 input').val(), 10) + 1);
    });
    $('.spin5 .btn:last-of-type').on('click', function() {
      if(parseInt($('.spin5 input').val(), 10) > 0){
        $('.spin5 input').val( parseInt($('.spin5 input').val(), 10) - 1);
      }
    });
  
	var data = [
        {
          item_code: "00001",
          item_name: "烟基项目01",
          item_type: "水池"

        },
        {
          item_code: "00001",
          item_name: "烟基项目02",
          item_type: "水窖"

        },
        {
          item_code: "00001",
          item_name: "烟基项目03",
          item_type: "管网"

        },
        {
          item_code: "00001",
          item_name: "烟基项目04",
          item_type: "土壤改良"

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
            {data:'item_type'}
          ]
      });
      $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

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
            {data:'item_type'}
          ]
      });
      $("#tTrolleys1_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys1_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys1_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
})(jQuery)