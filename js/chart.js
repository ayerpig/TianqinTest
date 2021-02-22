//柱状图
function tarChart(data) {
  const rightChart = echarts.init(document.querySelector('.right-chart'));
  rightChart.setOption({
    title: {
      text: "柱状图数据展示",
      left: 'center'
    },
    tooltip: {},
    legend: {
      data: ['商品数'],
      top: '6%',
      left: '0%',
      icon: 'none',
    },
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        name: '商品数',
        type: 'bar',
        barWidth: 15,
        data: []
      }
    ]
  })
  var nums = []
  var commoditys = []
  ajax({
    url: "https://edu.telking.com/api/?type=week",
    success: function (xhr) {
      const data = xhr.responseText;
      const json = JSON.parse(data);
      if (json) {
        for (let i = 0; i < json.data.xAxis.length; i++) {
          commoditys.push(json.data.xAxis[i])
        }
        for (let i = 0; i < json.data.series.length; i++) {
          nums.push(json.data.series[i])
        }
        rightChart.setOption({
          xAxis: {
            data: commoditys
          },
          series: [
            {
              data: nums
            }
          ]
        })
      }

    },
    error: function (xhr) {
      alert("请求失败!");
    }
  })
}
//饼状图
function pieChart() {
  const leftChart = echarts.init(document.querySelector('.left-chart'));
  leftChart.setOption({
    title: {
      text: "饼状图数据展示",
      left: 'center'
    },
    tooltip: {},
    legend: {
      data: " "
    },
    series: {
      name: "",
      type: "pie",
      data: []
    }
  })

  var datas = [];
  ajax({
    url: "https://edu.telking.com/api/?type=week",
    success: function (xhr) {
      const data = xhr.responseText;
      const json = JSON.parse(data);
      if (json) {
        for (let i = 0; i < json.data.xAxis.length; i++) {
          datas.push({ name: json.data.xAxis[i], value: json.data.series[i] })
        }
        leftChart.setOption({
          series: {
            data: datas
          }
        })
      }
    },
    error: function (xhr) {
      alert("请求失败!");
    }
  })
}
//曲线状图
function lineChart() {
  const topChart = echarts.init(document.querySelector('.top-chart'));
  topChart.setOption({
    title: {
      text: "曲线状图数据展示",
      left: 'center'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: []
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: "{value} (人)"
      }
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbolSize: 5,
        data: [],
        itemStyle: { normal: { label: { show: true } } }
      },
    ]
  })
  var nums = [];
  var dates = [];
  ajax({
    url: "https://edu.telking.com/api/?type=month",
    success: function (xhr) {
      const data = xhr.responseText;
      const json = JSON.parse(data);
      if (json) {
        for (let i = 0; i < json.data.series.length; i++) {
          nums.push(json.data.series[i])
        }
        for (let i = 0; i < json.data.xAxis.length; i++) {
          dates.push(json.data.xAxis[i])
        }
        topChart.setOption({
          xAxis: {
            data: dates
          },
          series:
          {
            data: nums
          }
        })
      }
    },
    error: function (xhr) {
      alert("请求失败!");
    }
  })
}

