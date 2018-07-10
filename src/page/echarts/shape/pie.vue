<template>
	<div id="pie" :style="{width:'300px',height:'300px'}">

	</div>
</template>

<script>
	import { getPieData } from '../api'
	export default {
		data() {
			return {
				lineChartData: {}
			}
		},
		methods: {
			setPieData() {
				this.$echarts.init(document.getElementById("pie")).setOption(getPieData())
			}
		},
		mounted() {
			this.setPieData()
		}
	}
</script>