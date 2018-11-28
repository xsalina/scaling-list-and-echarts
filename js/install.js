function inastall() {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        color: ['#18B3ee', '#00CBC7', '#BDA0DA'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['37-72期:60台', '0期:40台', '1-36期:300台']
        },
        series: [
            {
                name: '待安装',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        // position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: [
                    { value: 60, name: '37-72期:60台' },
                    { value: 40, name: '0期:40台' },
                    { value: 300, name: '1-36期:300台' }
                ]
            }
        ]
    };
    myChart.setOption(option);
}
function confirm() {
    var myChart = echarts.init(document.getElementById('confirm'));
    option = {
        color: ['#18B3ee', '#00CBC7', '#BDA0DA'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['37-72期:60台', '0期:60台', '1-36期:460台']
        },
        series: [
            {
                name: '待安装',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        // position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: [
                    { value: 60, name: '37-72期:60台' },
                    { value: 40, name: '0期:60台' },
                    { value: 300, name: '1-36期:460台' }
                ]
            }
        ]
    };
    myChart.setOption(option);
}