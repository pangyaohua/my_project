<template>

	<div id="specialEchart" :style="{width:'380px',height:'300px'}">
		
	</div>
</template>

<script>
	
	import {getspecialData} from "../api" 
	export default {
		data() {
			return {

			}
		},
		methods: {
			setSpecialEchart() {
				this.$echarts.init(document.getElementById("specialEchart")).setOption(getspecialData())
			}
		},
		mounted() {
			this.setSpecialEchart()
		}
	}
</script>

<style>

</style>