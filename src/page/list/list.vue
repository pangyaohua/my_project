<template>
	<div class="productList container">
		<header-nav></header-nav>
		<div class="listContainer container-fluid">
			<!--<p class="left" @click="loadMore"><button>加载更多</button></p>-->
			<div class="row">
				<div class="com-md-12">
					<p class="left">
						<el-button type="primary" icon="el-icon-edit" data-toggle="modal" data-target="#myModal" @click="add()">新加</el-button>
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4" v-for="(item,index) in dataList" :key="item.id">
					<div class="listBox">
						<p>{{index}}-{{item.name}}</p>
						<el-button data-toggle="modal" data-target="#myModal" @click="edit(index)">编辑</el-button>
					</div>
				</div>
			</div>

			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-show="dialogFormVisible">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header" style="">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="myModalLabel">请输入你要添加的内容</h4>
						</div>
						<div class="modal-body">
							<input type="text" v-model="title" placeholder="请输入内容" style="border-radius: 5%;width: 50%;" />
						</div>
						<div class="modal-footer" style="text-align: center;border-top:none;">
							<button type="button" class="btn btn-default" @click="dialogFormVisible = false" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" @click="editSure">Save changes</button>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				"msg": "产品列表简介",
				"title": "",
				"isAdd": false,
				"editIndex": "",
				"dataList": [
					{ name: "vue实例", id: "a" },
					{ name: "模板语法", id: "b" },
					{ name: "计算属性与和侦听器", id: "c" },
					{ name: "class与style绑定", id: "d" },
					{ name: "施蒂利克积分可适当", id: "e" }
				],
				dialogFormVisible: false,
				formLabelWidth: '120px'
			}
		},
		methods: {
			add() {
				this.title = "";
				this.isAdd = true;
				this.dialogFormVisible = true;
			},
			edit(val) {
				this.title = "";
				this.isAdd = false;

				this.dialogFormVisible = true;
				console.log(val);
				this.editIndex = val;

			},
			editSure() {
				if(this.title) {
					if(this.isAdd) {
						this.dataList.push({ "name": this.title });
						this.dialogFormVisible = false;
						$(".modal-backdrop").remove();
						return false;
					}
					this.dataList[this.editIndex].name = this.title;
				} else {
					alert("请输入内容哦！");
					return false;
				}

				$(".modal-backdrop").remove();
				this.dialogFormVisible = false;

			}
		}
	}
</script>

<style>
	
	.listContainer ul {
		margin: 0;
		padding: 0;
		text-align: left;
	}
	
	.listContainer p {
		width: 100%;
		text-align: center;
		padding-top: 10px;
	}
	
	p.left {
		text-align: left;
		padding-left: 15px;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		padding: 25px 0;
		margin-bottom: 10px;
	}
	
	.row-bg {
		padding: 10px 0;
	}
	
	.col-md-4 {
		margin-bottom: 8px;
	}
	
	.listBox {
		padding-top: 20px;
		padding-bottom: 20px;
		background: #e5e9f2;
	}
</style>