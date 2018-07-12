<template>
	<div class="container" id="echarts">

		<!--<p>{{msg}}</p>
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->
		<header-nav></header-nav>
		<div class="container-fluid">
			<div class="row nav_row">
				<div class="col-md-4">
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;text-align:left;padding-left:20px">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-menu v-bind:class="{minWidth:isMinWidth}" default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span slot="title">基本图形</span>
							</template>
							<el-menu-item-group>
								<span slot="title">分组一</span>
								<el-menu-item class="default_click parentLi" index="1-1" @click="slideNav_change(0)" v-bind:class="{active:slideNavList[0]}">
									<router-link to="/Echarts/line">
										折线图
									</router-link>
								</el-menu-item>
								<el-menu-item index="1-2" class="parentLi" @click="slideNav_change(1)" v-bind:class="{active:slideNavList[1]}">
									<router-link to="/Echarts/bar">
										柱状图
									</router-link>

								</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2" >
								<el-menu-item index="1-3" class="parentLi" @click="slideNav_change(2)" v-bind:class="{active:slideNavList[2]}">
									<router-link to="/Echarts/pie">
										饼状图
									</router-link>
								</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<span slot="title">剩余之图形</span>
								<el-menu-item disabled index="1-4-1">剩余之图形</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item class="parentLi" index="2" @click="slideNav_change(3)" v-bind:class="{active:slideNavList[3]}">
							<i class="el-icon-menu"></i>
							<span slot="title" >
								<router-link to="/Echarts/spcialEchart">
									南丁格尔图
								</router-link>
							</span>
						</el-menu-item>
						<el-menu-item index="3" class="parentLi" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">带交互echarts</span>
						</el-menu-item>
						<el-menu-item class="parentLi" index="4" @click="slideNav_change(4)" v-bind:class="{active:slideNavList[4]}">
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
				isCollapse: false,
				isActive: false,
				isMinWidth:false,
				slideNavList:[false,false,false,false,false],
				
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			changeIcon() {
				$(".el-menu-item a").each(function() {
					
					
					if(window.location.hash=="#/Echarts"){
						$(".default_click").addClass("active");
						return;
					}
					$("default_click").removeClass("active");
					if($(this).attr("href").indexOf(window.location.hash) > -1) {
						$(this).parents(".parentLi").addClass("active");
					} else {
						$(this).parents(".parentLi").removeClass("active");
					}
				})
				
			},
			slideNav_change(index){
				$(".parentLi").removeClass("active");
				$("default_click").removeClass("active");
				this.slideNavList=[false,false,false,false,false];
				this.slideNavList[index]=true
				console.log(this.slideNavList);
			}
		},
		//--监测isCollapse属性变化
		watch: {
			isCollapse: function() {
				//--用that代替this
				const that=this;
				setTimeout(function(){
					that.isMinWidth=that.isCollapse;
				},50)
				

			}
		},
		mounted(){
			
			this.changeIcon()
		}
	}
</script>
<style>
	#echarts .el-menu-vertical-demo {
		width: 57%;
	}
	
	.el-menu--collapse {
		width: 20%;
	}
	
	#echarts .nav_row .col-md-4 {
		text-align: left;
		margin-left: -35px;
	}
	
	a {
		color: #337ab7;
	}
	
	.minWidth {
		width: 33%!important;
	}
	
	.active{
		
		background:#409EFF;
		min-width: 0!important;
	}
	.active a{
		color:#fff!important;
	}
</style>