<template>
	<div class="main">
		<!--导航栏-->
		<el-tabs :default-active="this.$router.path" type="border-card" @tab-click="handleClick">
			<el-tab-pane label="产品介绍" name="first">
				<router-link to="">
					产品介绍
				</router-link>
			</el-tab-pane>
			<el-tab-pane label="产品列表" name="second">
				<router-link to="/list">
					产品列表
				</router-link>
			</el-tab-pane>
			<el-tab-pane label="关于echarts" name="third">
				<router-link to="/Echarts">
					关于echarts
				</router-link>
			</el-tab-pane>
			<el-tab-pane label="联系我们" name="fourth">
				<router-link to="/productAbout">
					联系我们
				</router-link>
			</el-tab-pane>
			<el-tab-pane label="github地址" name="fifth">
				<a href="https://pangyaohua.github.io/my_project/dist/index.html#/">
					github地址
				</a>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {
				activeName2: 'first'
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar-inverse .navbar-nav>.active>a,
	.navbar-inverse .navbar-nav>.active>a:focus,
	.navbar-inverse .navbar-nav>.active>a:hover {
		color: #fff;
	}
</style>