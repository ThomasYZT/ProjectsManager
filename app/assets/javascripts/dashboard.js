(function($){
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
  $(".search_place").click(function(){
    if($(".city").find('select').select2("val")  == "" ){
      $(".place_nav").text("湖南省数据统计分析")
    }else{
      if($(".county").find('select').select2("val") == ""){
        $(".place_nav").html('湖南省<small style="color:white;">／'+$(".city").find('select').select2("data")[0].text+'数据统计分析</small>')
      }else{
        $(".place_nav").html('湖南省<small style="color:white;">/'+$(".city").find('select').select2("data")[0].text+'</small><small style="color:white;">/'+$(".county").find('select').select2("data")[0].text+'统计分析</small>')
      }
    }
  });
  $(".year").change(function(){
    //alert($(".year").select2("data")[0].text)
    $('#container').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: $(".year").select2("data")[0].text+ ' 年度不同项目金额比例'
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
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '金额数量(万元)',
          data: [
              ['烟水配套工程',   52832],
              {
                  name: '烟叶调制设施',
                  y: 8575,
                  sliced: true,
                  selected: true
              },
              ['育苗大棚',  0],
              ['机耕路',   0],
              ['烟用机械',  0],
              ['其他',  0]
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
            text: $(".year").select2("data")[0].text+' 年度不同项目数量比例'
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
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '项目数量(个／条)',
            data: [
                ['烟水配套工程',   20907],
                {
                    name: '烟叶调制设施',
                    y: 5486,
                    sliced: true,
                    selected: true
                },
                ['育苗大棚',  0],
                ['机耕路',   0],
                ['烟用机械',  0],
                ['其他',  0]
            ]
        }]
    });
  })
  $(".select2").select2();
  $('#container').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: '2016 年度不同项目金额比例'
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
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '金额数量(万元)',
          data: [
              ['烟水配套工程',   52832],
              {
                  name: '烟叶调制设施',
                  y: 8575,
                  sliced: true,
                  selected: true
              },
              ['育苗大棚',  0],
              ['机耕路',   0],
              ['烟用机械',  0],
              ['其他',  0]
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
          text: '2016 年度不同项目数量比例'
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
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          type: 'pie',
          name: '项目数量(个／条)',
          data: [
              ['烟水配套工程',   20907],
              {
                  name: '烟叶调制设施',
                  y: 5486,
                  sliced: true,
                  selected: true
              },
              ['育苗大棚',  0],
              ['机耕路',   0],
              ['烟用机械',  0],
              ['其他',  0]
          ]
      }]
  });

  var dashboard_data = [
    {
      name: "合计",
      sum: 26393 ,
      water: 326406,
      net: 128.50,
      road: 0,
      total_cost: 61407.66,
      by_ci: 23501.80,
      province: 0.00,
      nation: 23501.8,
      area: 0
    },
    {
      name: "烟水配套工程",
      sum: 20907 ,
      water: 326406,
      net: 128.50,
      road: 3754.32,
      total_cost: 52832.10,
      by_ci: 20978.80,
      province: 0.00,
      nation: 20978.80,
      area: 52.15
    },
    {
      name: "烟叶调制设施",
      sum: 5486 ,
      water: 0,
      net: 0,
      road: 0,
      total_cost: 8575.56,
      by_ci: 2523.00,
      province: 0.00,
      nation: 2523.00,
      area: 8.32
    },
    {
      name: "机耕路",
      sum: 0 ,
      water: 0,
      net: 0,
      road: 0,
      total_cost: 0,
      by_ci: 0,
      province: 0.00,
      nation: 0,
      area: 0
    },
    {
      name: "烟用机械",
      sum: 0 ,
      water: 0,
      net: 0,
      road: 0,
      total_cost: 0,
      by_ci: 0,
      province: 0.00,
      nation: 0,
      area: 0
    },
    {
      name: "育苗大棚",
      sum: 0 ,
      water: 0,
      net: 0,
      road: 0,
      total_cost: 0,
      by_ci: 0,
      province: 0.00,
      nation: 0,
      area: 0
    },
    {
      name: "其他",
      sum: 0 ,
      water: 0,
      net: 0,
      road: 0,
      total_cost: 0,
      by_ci: 0,
      province: 0.00,
      nation: 0,
      area: 0
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
    data:dashboard_data,
    columns:[
      {data:'name'},
      {data:'sum'},
      {data:'water'},
      {data:'net'},
      {data:'road'},
      {data:'total_cost'},
      {data:'by_ci'},
      {data:'province'},
      {data:'nation'},
      {data:'area'}
    ]
  });
  $("#tTrolleys_filter input[type=search]").css({ width: "auto" });
  $("#tTrolleys_filter").find("input").wrap('<div class="box-tools"><div class="input-group input-group-sm" style="width:150px;"></div></div>');
  $("#tTrolleys_filter").find(".input-group").append('<div class="input-group-btn"><button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button></div>');
})(jQuery)