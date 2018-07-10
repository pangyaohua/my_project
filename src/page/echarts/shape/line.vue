<template>

	<div id="main">
		<div id="line" class="line" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>

<script>
	//import echarts from "echarts"
	import { getLineData } from "../api"
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('line'))
				// 绘制图表
				myChart.setOption(getLineData());
			}
		}
	}
</script>