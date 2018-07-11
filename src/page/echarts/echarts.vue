<template>
	<div class="container" id="echarts">

		<!--<p>{{msg}}</p>
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->

		<div class="container-fluid">
			<header-nav></header-nav>
			<div class="row nav_row">
				<div class="col-md-4">
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;text-align:left;padding-left:20px">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span slot="title">基本图形</span>
							</template>
							<el-menu-item-group>
								<span slot="title">分组一</span>
								<el-menu-item index="1-1">
									<router-link to="/Echarts/line">
										折线图
									</router-link>
								</el-menu-item>
								<el-menu-item index="1-2">
									<router-link to="/Echarts/bar">
										柱状图
									</router-link>

								</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">
									<router-link to="/Echarts/pie">
										饼状图
									</router-link>
								</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4" >
								<span slot="title">剩余之图形</span>
								<el-menu-item disabled index="1-4-1">剩余之图形</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">
								<router-link to="/Echarts/spcialEchart">
									南丁格尔图
								</router-link>
							</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">带交互echarts</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">
								<router-link to="/Echarts/moreEchart">
									more**
								</router-link>
							</span>
						</el-menu-item>
					</el-menu>

				</div>
				<div class="col-md-8">
					<router-view></router-view>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				isCollapse: false
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style>
	#echarts .el-menu-vertical-demo {
		width: 60%;
	}
	
	.el-menu--collapse {
		width: 20%;
	}
	
	#echarts .nav_row {
		padding-top: 50px;
	}
	
	#echarts .nav_row .col-md-4 {
		text-align: left;
		margin-left: -35px;
	}
	a{
		color: #337ab7;		
	}
</style>