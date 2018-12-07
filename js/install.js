//待安装
(function () {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        color: ['#00CBC7', '#18B3ee', '#BDA0DA'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //      data: [ '0期:40台','1-36期:300台','37-72期:60台']
        // },
        series: [
            {
                name: '待安装',
                type: 'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        // position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '17',
                            fontWeight: 'bold'
                        }
                    }
                },
                // labelLine: {
                //     normal: {
                //         show: true
                //     }
                // },
                data: [
                    { value: 40, name: '0期' },
                    { value: 300, name: '1-36期' },
                    { value: 60, name: '37-72期' },
                ]
            }
        ]
    };
    myChart.setOption(option);
    //收费中
    var myChart = echarts.init(document.getElementById('charge'));
    option = {
        color: ['#18B3ee', '#00CBC7', '#BDA0DA', '#ffb673'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //      data: [ '0期', '1-36期','37-72期', '72期以上']
        // },
        series: [
            {
                name: '收费中',
                type: 'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        //position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '17',
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
                    { value: 40, name: '0期' },
                    { value: 300, name: '1-36期' },
                    { value: 60, name: '37-72期' },
                    { value: 500, name: '72期以上' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 待确认
    var myChart = echarts.init(document.getElementById('confirm'));
    option = {
        color: ['#18B3ee', '#00CBC7', '#BDA0DA'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data: ['37-72期:60台', '0期:40台', '1-36期:300台']
        // },
        series: [
            {
                name: '待确认',
                type: 'pie',
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        // position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '17',
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
                    { value: 100, name: '0期' },
                    { value: 300, name: '1-36期' },
                    { value: 60, name: '37-72期' },

                ]
            }
        ]
    };
    myChart.setOption(option);
    //机器归属情况
    var myChart = echarts.init(document.getElementById('machine'));
    option = {
        color: ['#00CBC7', '#BDA0DA'],
        title: {
            // text: '机器归属情况',
            left: '20%',
            top: 10,
            x: 'center',
            textStyle: {
                color: '#999'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'left',
            data: ['平台机器', 'DIV机器']
        },
        series: [
            {
                name: '机器归属情况',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                roseType: 'radius',
                data: [

                    { value: 3510, name: '平台机器' },
                    { value: 435, name: 'DIV机器' },
                ],
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
})()
