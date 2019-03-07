<template>
	<div class="main">
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
          			</button>
					<a class="navbar-brand" href="#">Project name</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav" style="width:80%;">
						<li class="active">

							<router-link to="/detail">
								产品介绍
							</router-link>

						</li>
						<li>

							<router-link to="/list">
								产品列表
							</router-link>

						</li>
						<li class="active">

							<router-link to="/Echarts">
								关于echarts
							</router-link>

						</li>
						<li>

							<router-link to="/productAbout">
								联系我们
							</router-link>

						</li>
						<li class="">

							<a href="https://pangyaohua.github.io/my_project/dist/index.html#/">
								github地址
							</a>

						</li>
					</ul>
				</div>

			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {

			}
		},
		methods: {
			changeIcon() {
				//根据地址栏参数判断设置icon的选中状态
				$(".navbar-nav").find("li").each(function() {
					var a = $(this).find("a:first")[0];
					if($(a).attr("href").indexOf(window.location.hash) > -1) {
						$(a).parent("li").addClass("active");
					} else {
						$(a).parent("li").removeClass("active");
					}
				})
			}
		},
		//--进行初始化数据，一般用于渲染页面之后请求数据
		mounted() {
			this.changeIcon()
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