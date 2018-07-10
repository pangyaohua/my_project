//--设置饼图数据
export const getPieData = () => {
	return {
		series: {
			title: {
				text: 'ECharts 入门示例之饼图'
			},
			type: 'pie',
			data: [
				{ name: '羊毛', value: 70 },
				{ name: '骆驼毛', value: 40 },
				{ name: '貂皮', value: 50 }
			]
		}
	}
}
//设置南丁格尔图数据
export const getspecialData = () => {
	return {
		series: [{
				name: "访问来源",
				type: "pie",
				radius: "55%",
				roseType: "angle",
				data: [
					{ value: 235, name: '视频广告' },
					{ value: 274, name: '联盟广告' },
					{ value: 310, name: '邮件营销' },
					{ value: 335, name: '直接访问' },
					{ value: 400, name: '搜索引擎' }
				],
				label: {
					normal: {
						textStyle: {
							//---单分支字体颜色
							color: 'rgba(0, 0, 0, 0.5)'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							//--单分支指向箭头颜色
							color: 'rgba(0, 0, 0, 0.3)'
						}
					}
				},
				itemStyle: {
					
					normal: {
						//背景颜色
						color: '#c23531',
						//---阴影部分
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.1)'
					}
				}
			}

		]
	}
}
//设置折线图形数据
export const getLineData = () => {
	return {
		title: { text: '在Vue中使用echarts' },
		tooltip: {},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {

		},
		series: [{
			name: '销量',
			type: 'line',
			data: [5, 20, 36, 10, 10, 20]
		}]
	}
}
//设置柱状图数据
export const getBarData = () => {
	return {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}]
	}
}