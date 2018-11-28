function configAssetPie(data) {
    var pie = document.getElementById("pie1");
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(pie);
    var dataArr = data;
    var option = {
        color: ["#789ce5", "#f99c2d", "#fb6749", "#4fcbff"],
        legend: {
            orient: 'vertical',
            bottom: 56,
            right: 80,
            itemGap: 30,
            itemWidth: 20,
            itemHeight: 20,
            icon: 'circle',
            formatter: function (name) {
                for (var i = 0; i < dataArr.length; i++) {
                    if(dataArr[i].name == name) {
                        return name + ' ('+dataArr[i].value+'元)';
                    }
                }
            },
            textStyle: {
                padding: [0, 0, 0, 14],
                fontSize: 16,
                color: '#282828'
            },
            data: [dataArr[0].name, dataArr[1].name, dataArr[2].name, dataArr[3].name]
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}元({d}%)"
        },
        series: [
            {
                name: '已配置的资产总价值',
                type: 'pie',
                radius: [55, 85],
                center: [212, 133],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 16,
                            color: "#282828"
                        }
                    }
                },
                labelLine: {
                    show: true,
                    length: 20,
                    length2: 40
                },
                data: dataArr,
                itemStyle: {
                    normal:{
                        label:{
                            show: true, // {b} data.name {c} data.value {d}% 百分比
                            formatter: '{d}%'
                        }
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
