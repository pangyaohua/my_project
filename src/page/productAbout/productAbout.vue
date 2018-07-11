<template>
	<div class="container" id="productAbout">
		<header-nav></header-nav>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4" style="height: 100%;margin-left:-60px">
					<ul class="seleceAll" style="padding-top:20px">

						<div class="list-group">
							<a href="#" class="list-group-item active">
								<h4 class="list-group-item-heading">
								<router-link to="/productAbout/aboutTel">联系方式</router-link>
							</h4>
							</a>
						</div>
						<div class="list-group">
							<a href="#" class="list-group-item active">
								<h4 class="list-group-item-heading">
								<router-link to="/productAbout/aboutAdd">地址管理</router-link>
							</h4>
							</a>
						</div>
					</ul>

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

			}
		}
	}
</script>

<style>
	h4 a {
		color: #fff;
	}
	
	h4 a:hover {
		color: #fff;
	}
	
	#productAbout a:-webkit-any-link {
		color: #fff;
	}
</style>