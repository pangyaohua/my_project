import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login"
import Detail from "../page/detail"
import list from "../page/list"
import productAbout from "../page/productAbout"
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: "/detail",
			name: "",
			component: Detail,
			children: [
				{ path: '/', name: "产品介绍", component: Detail.productDetail },
				{ path: 'productDetail', name: "产品介绍", component: Detail.productDetail },
				{ path: 'productList', name: "产品列表", component: Detail.productList },
				{ path: 'productAbout', name: "关于我们", component: Detail.productAbout },
				{ path: "myWork", name: "我的工作台", component: Detail.myWork }
			]
		},
		{
			path: "/list",
			name: "",
			component: list,
			children: []
		},
		{
			path: "/productAbout",
			name: "",
			component: productAbout,
			children: [
				{ path: "/", name: "电话", component: productAbout.aboutTel },
				{ path: "aboutTel", name: "电话", component: productAbout.aboutTel },
				{ path: "aboutAdd", name: "地址", component: productAbout.aboutAdd }
			]
		}
	]
})