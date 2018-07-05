<template>

	<div class="list">
		<ul class="list-group" v-for="x in tableData" style="padding-top:20px">
			<li class="list-group-item text-left">
				{{x.name}}:{{x.phone}}
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					phone: '13020089898'
				}, {
					date: '2016-05-04',
					name: 'assd',
					phone: '0310-09099900'
				}, {
					date: '2016-05-01',
					name: '欧尼',
					phone: '19809098729'
				}]
			}
		}
	}
</script>