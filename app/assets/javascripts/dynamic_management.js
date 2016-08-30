(function($){
  $(".select2").select2({
    allowClear: true
  });

  initChart();
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

  $(".city").change(function(){
    if($(this).find("select").val() != ""){
      $(".county").css({display:""});
      switch($(this).find("select").val()){
        /*郴州市*/
        case "0":
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">北湖区</option><option value="1">苏仙区</option>'+
                                        '<option value="2">桂阳县</option><option value="3">宜章县</option>'+
                                        '<option value="4">永兴县</option><option value="5">嘉禾县</option>'+
                                        '<option value="6">临武县</option><option value="7">汝城县</option>'+
                                        '<option value="8">桂东县</option><option value="9">安仁县</option>'+
                                        '<option value="9">资兴市</option>')
          break;
        case "1":
          /*永州市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">祁阳县</option><option value="1">东安县</option>'+
                                        '<option value="2">双牌县</option><option value="3">宁远县</option>'+
                                        '<option value="4">江华县</option><option value="5">江永县</option>'+
                                        '<option value="6">道县</option><option value="7">新田县</option>'+
                                        '<option value="8">蓝山县</option>')
          break;
        case "2":
          /*湘西自治州*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">泸溪县</option><option value="1">凤凰县</option>'+
                                        '<option value="2">花垣县</option><option value="3">保靖县</option>'+
                                        '<option value="4">古丈县</option><option value="5">永顺县</option>'+
                                        '<option value="6">龙山县')
          break;
        case "3":
          /*长沙市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">长沙县</option><option value="1">宁乡县</option>')
          break;
        case "4":
          /*衡阳市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">衡阳县</option><option value="1">衡南县</option>'+
                                        '<option value="2">衡山县</option><option value="3">衡东县</option>'+
                                        '<option value="4">祁东县</option>')
          break;
        case "5":
          /*张家界市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">慈利县</option><option value="1">桑植县</option>')
          break;
        case "6":
          /*邵阳市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">邵东县</option><option value="1">新邵县</option>'+
                                        '<option value="2">邵阳县</option><option value="3">隆回县</option>'+
                                        '<option value="4">洞口县</option><option value="4">绥宁县</option>'+
                                        '<option value="4">新宁县</option><option value="4">城步苗族自治县</option>')
          break;
        case "7":
          /*常德市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">安乡县</option><option value="1">汉寿县</option>'+
                                        '<option value="2">澧县</option><option value="3">临澧县</option>'+
                                        '<option value="4">桃源县</option><option value="4">石门县</option>')
          break;
        case "8":
          /*怀化市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">中方县</option><option value="1">沅陵县</option>'+
                                        '<option value="2">辰溪县</option><option value="3">溆浦县</option>'+
                                        '<option value="4">会同县</option><option value="4">麻阳苗族自治县</option>'+
                                        '<option value="4">新晃侗族自治县</option><option value="4">芷江侗族自治县</option>'+
                                        '<option value="4">靖州苗族侗族自治县</option><option value="4">通道侗族自治县</option>')
          break;
        case "9":
          /*株洲市*/
          $('.county').find("select").empty();
          $(".county").find("select").val("").trigger("change");
          $('.county').find("select").append('<option></option><option value="0">中方县</option><option value="1">株洲县</option>'+
                                        '<option value="2">攸县</option><option value="3">茶陵县</option>'+
                                        '<option value="4">炎陵县</option>')
          break;
      }
    }
  });
  $(".p_type").change(function(){
    switch($(this).select2("val")){
      case "1":
        $(".projects").parent().parent().css({display:""});
        $(".projects").empty();
        $(".projects").val("").trigger("change");
        $(".projects").append('<option></option><option value="0">水池</option><option value="1">水窖</option>'+
                              '<option value="2">管网</option><option value="3">沟渠</option>'+
                              '<option value="4">机井</option><option value="5">堤灌站</option>'+
                              '<option value="6">塘垻</option>')
        break;
      case "2":
        $(".projects").parent().parent().css({display:"none"});
        break;
      case "3":
        $(".projects").parent().parent().css({display:""});
        $(".projects").empty();
        $(".projects").val("").trigger("change");
        $(".projects").append('<option></option><option value="1">2.7×8m密集烤房</option>'+
                              '<option value="2">改造为散叶烘烤的烤房</option><option value="3">改造为烟夹烘烤的烤房</option>'+
                              '<option value="4">晾房</option><option value="5">烘烤工场</option>')
        break;
      case "4":
        $(".projects").parent().parent().css({display:""});
        $(".projects").empty();
        $(".projects").val("").trigger("change");
        $(".projects").append('<option></option><option value="0">通用设备</option><option value="1">专用设备</option>')
        break;
      case "5":
        $(".projects").parent().parent().css({display:"none"});
        break;
      case "6":
        $(".projects").parent().parent().css({display:"none"});
        break;
    }
  })
  $(".search_place").click(function(){
    var startTime = $(".start_year").select2("data")[0].text
    var endTime = $(".end_year").select2("data")[0].text
    var year　= "";
    if(startTime == endTime){
      year = startTime;
    }else{
      year = startTime.slice(0,4) + ' - ' + endTime.slice(0,4) + " 年";
    }

    if($(".city").find('select').select2("val")  == "" ){
      $(".place_nav").text(year + "湖南省数据统计分析")
    }else{
      if($(".county").find('select').select2("val") == ""){
        $(".place_nav").html(year+'湖南省<small style="color:white;">／'+$(".city").find('select').select2("data")[0].text+'数据统计分析</small>')
      }else{
        $(".place_nav").html(year+'湖南省<small style="color:white;">/'+$(".city").find('select').select2("data")[0].text+'</small><small style="color:white;">/'+$(".county").find('select').select2("data")[0].text+'统计分析</small>')
      }
    }
    
    if($(".p_type").select2("data")[0].text){
      $(".charts").css({display:"none"});
    }else{
      $(".charts").css({display:""});
    }
    
    initChart();
    
  });
  
	var data_1 = [
        {
          item_code: "00001",
          item_name: "烟基项目01",
          item_type: "水池",
          item_cost: 20000,
          doc_statu: "闲置"
        },
        {
          item_code: "00002",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_cost: 20000,
          doc_statu: "闲置"
        },
        {
          item_code: "00003",
          item_name: "烟基项目03",
          item_type: "管网",
          item_cost: 20000,
          doc_statu: "闲置"
        },
        {
          item_code: "00004",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_cost: 20000,
          doc_statu: "闲置"
        }
      ];
  var data_2 = [
        {
          item_code: "00005",
          item_name: "烟基项目01",
          item_type: "水池",
          item_cost: 20000,
          doc_statu: "核销"
        },
        {
          item_code: "00006",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_cost: 20000,
          doc_statu: "核销"
        },
        {
          item_code: "00007",
          item_name: "烟基项目03",
          item_type: "管网",
          item_cost: 20000,
          doc_statu: "核销"
        },
        {
          item_code: "00008",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_cost: 20000,
          doc_statu: "核销"
        }
      ];
  var data_3 = [
        {
          item_code: "00009",
          item_name: "烟基项目01",
          item_type: "水池",
          item_cost: 20000,
          doc_statu: "未建"
        },
        {
          item_code: "00010",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_cost: 20000,
          doc_statu: "未建"
        },
        {
          item_code: "00011",
          item_name: "烟基项目03",
          item_type: "管网",
          item_cost: 20000,
          doc_statu: "未建"
        },
        {
          item_code: "00012",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_cost: 20000,
          doc_statu: "未建"
        }
      ];
  var data_4 = [
        {
          item_code: "00013",
          item_name: "烟基项目01",
          item_type: "水池",
          item_cost: 20000,
          doc_statu: "损毁"
        },
        {
          item_code: "00014",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_cost: 20000,
          doc_statu: "损毁"
        },
        {
          item_code: "00015",
          item_name: "烟基项目03",
          item_type: "管网",
          item_cost: 20000,
          doc_statu: "损毁"
        },
        {
          item_code: "00016",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_cost: 20000,
          doc_statu: "损毁"
        }
      ];
  var data_5 = [
        {
          item_code: "00017",
          item_name: "烟基项目01",
          item_type: "水池",
          item_cost: 20000,
          doc_statu: "已建"
        },
        {
          item_code: "00018",
          item_name: "烟基项目02",
          item_type: "水窖",
          item_cost: 20000,
          doc_statu: "已建"
        },
        {
          item_code: "00019",
          item_name: "烟基项目03",
          item_type: "管网",
          item_cost: 20000,
          doc_statu: "已建"
        },
        {
          item_code: "00020",
          item_name: "烟基项目04",
          item_type: "土壤改良",
          item_cost: 20000,
          doc_statu: "已建"
        }
      ];
  var analysis_data = [
    {
      name:"合计",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"烟田水利设施",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"水池",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"水窖",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"管网",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"沟渠",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"机井",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"堤灌站",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"塘垻",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"机耕路",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"烟叶调制设备",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"2.7×8m密集烤房",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"改造为散叶烘烤的",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"改造为烟夹烘烤的",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"凉房",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"烘烤工厂",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"田间机械化",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"通用设备",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"专用设备",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"育苗设施",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    },
    {
      name:"土地整理",
      xz_num: 12312,
      xz_cost: 123124,
      bf_num: 123,
      bf_cost: 87,
      wj_num: 9486,
      wj_cost: 912,
      sh_num: 1992,
      sh_cost: 12,
      yj_num: 390,
      yj_cost: 7215
    }
  ];

      $("#tTrolleys_a").dataTable({
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
          data:analysis_data,
          columns:[
            {data:'name'},
            {data:'xz_num'},
            {data:'xz_cost'},
            {data:'bf_num'},
            {data:'bf_cost'},
            {data:'wj_num'},
            {data:'wj_cost'},
            {data:'sh_num'},
            {data:'sh_cost'},
            {data:'yj_num'},
            {data:'yj_cost'}
          ]
      });
      $("#tTrolleys_a_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys_a_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys_a_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
      
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
          data:data_1,
          columns:[
            {data:'item_code'},
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_cost'},
            {data:'doc_statu'},
            {data:'doc_statu',sWidth:"90px",render:function(data){
              return '<a class="btn btn-primary doc_search">档案查询</a>';
            }}
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
          data:data_2,
          columns:[
            {data:'item_code'},
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_cost'},
            {data:'doc_statu'},
            {data:'doc_statu',sWidth:"90px",render:function(data){
              return '<a class="btn btn-primary doc_search">档案查询</a>';
            }}
          ]
      });
      $("#tTrolleys1_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys1_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys1_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $("#tTrolleys2").dataTable({
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
          data:data_3,
          columns:[
            {data:'item_code'},
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_cost'},
            {data:'doc_statu'},
            {data:'doc_statu',sWidth:"90px",render:function(data){
              return '<a class="btn btn-primary doc_search">档案查询</a>';
            }}
          ]
      });
      $("#tTrolleys2_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys2_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys2_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $("#tTrolleys3").dataTable({
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
          data:data_4,
          columns:[
            {data:'item_code'},
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_cost'},
            {data:'doc_statu'},
            {data:'doc_statu',sWidth:"90px",render:function(data){
              return '<a class="btn btn-primary doc_search">档案查询</a>';
            }}
          ]
      });
      $("#tTrolleys3_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys3_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys3_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

      $("#tTrolleys4").dataTable({
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
          data:data_5,
          columns:[
            {data:'item_code'},
            {data:'item_name'},
            {data:'item_type'},
            {data:'item_cost'},
            {data:'doc_statu'},
            {data:'doc_statu',sWidth:"90px",render:function(data){
              return '<a class="btn btn-primary doc_search">档案查询</a>';
            }}
          ]
      });
      $("#tTrolleys4_filter input[type=search]").css({ width: "auto" });
      $("#tTrolleys4_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
      $("#tTrolleys4_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');

function initChart(){
  $('#container').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '已建项目统计'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   53090],
              {
                  name: '机耕路',
                  y: 3526,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  66687],
              ['田间机械化',   23272],
              ['育苗设施',  885],
              ['土地整理', 15]
          ]
      }]
  });

  $('#container1').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '正常使用项目统计'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   42532],
              {
                  name: '机耕路',
                  y: 3210,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  55621],
              ['田间机械化',   20435],
              ['育苗设施',  822],
              ['土地整理', 15]
          ]
      }]
  });
  
  $('#container2').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '部分损毁可修复项目统计'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   6249],
              {
                  name: '机耕路',
                  y: 310,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  7103],
              ['田间机械化',   2837],
              ['育苗设施',  59],
              ['土地整理', 0]
          ]
      }]
  });
  $('#container3').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '完全损毁项目统计'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   4309],
              {
                  name: '机耕路',
                  y: 6,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  2217],
              ['田间机械化',   0],
              ['育苗设施',  1],
              ['土地整理', 0]
          ]
      }]
  });
  $('#container4').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '闲置项目'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   0],
              {
                  name: '机耕路',
                  y: 0,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  1746],
              ['田间机械化',   0],
              ['育苗设施',  3],
              ['土地整理', 0]
          ]
      }]
  });
  $('#container5').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '核销项目统计'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      credits: { enabled: false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  color: '#000000',
                  connectorColor: '#000000',
                  format: '<b>{point.name}</b>: {point.percentage:.2f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟田水利设施',   0],
              {
                  name: '机耕路',
                  y: 0,
                  sliced: true,
                  selected: true
              },
              ['烟叶调制设施',  1746],
              ['田间机械化',   0],
              ['育苗设施',  3],
              ['土地整理', 0]
          ]
      }]
  });
}
$(".doc_search").click(function(){
  $("#searchModal").modal("toggle")
})
})(jQuery)