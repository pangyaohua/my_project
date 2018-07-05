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
						<li>

							<router-link to="/productAbout">
								联系我们
							</router-link>

						</li>
					</ul>
				</div>

			</div>
		</nav>

		<!--<ul class="nav nav-pills">
			<li role="presentation" class="presentation active">
				<router-link to="/detail">
					产品介绍
				</router-link>
			</li>
			<li role="presentation" class="presentation">
				<router-link to="/list">
					产品列表
				</router-link>
			</li>
			<li role="presentation" class="presentation">
				<router-link to="/productAbout">
					联系我们
				</router-link>
			</li>
		</ul>-->
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
				$(".navbar-nav").find("li").each(function() {
					var a = $(this).find("a:first")[0];
					if($(a).attr("href").indexOf(window.location.hash) >-1 ) {
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
	
</style>