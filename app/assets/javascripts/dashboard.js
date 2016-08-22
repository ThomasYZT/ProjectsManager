(function($){
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
          name: '金额占比',
          data: [
              ['大棚',   45.0],
              ['烤房',       26.8],
              {
                  name: '农机',
                  y: 12.8,
                  sliced: true,
                  selected: true
              }
          ]
      }]
  });

})(jQuery)