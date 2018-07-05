<template>

	<div class="list">
		<ul class="list-group" v-for="x in tableData" style="padding-top:20px">
			<li class="list-group-item text-left">
				{{x.name}}:{{x.address}}:{{x.date}}
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
					address: '快圣诞节疯狂时代峻峰可视对讲防守打法'
				}, {
					date: '2016-05-04',
					name: 'assd',
					address: '北京市朝阳区常营民族家园-27-03-502'
				}, {
					date: '2016-05-01',
					name: '欧尼',
					address: '上海市普陀区星光大厦28-05-1404'
				},{
					date: '2016-05-02',
					name: '王小虎',
					address: '快圣诞节疯狂时代峻峰可视对讲防守打法'
				}, {
					date: '2016-05-04',
					name: 'assd',
					address: '北京市朝阳区常营民族家园-27-03-502'
				}, {
					date: '2016-05-01',
					name: '欧尼',
					address: '上海市普陀区星光大厦28-05-1404'
				}]
			}
		}
	}
</script>