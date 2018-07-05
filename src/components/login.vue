<template>
	<div class="container">

		<form class="form-signin">
			<h2 class="form-signin-heading">Please sign in</h2>
			<label for="userName" class="sr-only">用户名:</label>
			<input type="text" id="userName" class="form-control" placeholder="请输入用户名"  v-model="userName" required autofocus>
			<label for="inputPassword" class="sr-only">Password</label>
			<input type="password" id="inputPassword" class="form-control" v-model="pwd" placeholder="请输入密码" required>
			<div class="checkbox text-left">
				<label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
			</div>
			<button class="btn btn-lg btn-primary btn-block" @click="login">Sign in</button>
		</form>

	</div>
</template>

<script>
	export default {
		"name": "login",
		data() {
			return {
				userName: "admin",
				pwd: "123456",
				msg: "showTime"
			}
		},
		methods: {
			login() {
				alert(this.pwd);
				if(this.userName == "" || this.pwd == "") {
					//---提示用户名与密码为必填项
					alert("输入用户名与密码");
				} else {
					//--路由跳转，
					this.$router.push('/detail')
				}
			}
		}
	}
</script>

<style>
html,body,#app{
	width:100%;
	height:100%;
	margin:0;
}

form input{
	margin-bottom:15px;
}
</style>