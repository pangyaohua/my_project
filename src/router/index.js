import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login"
import Detail from "../page/detail"
import list from "../page/list"
import productAbout from "../page/productAbout"
import Echarts from "../page/echarts"
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
		},
		{
			path: "/Echarts",
			name: "echarts图标",
			component: Echarts,
			children: [
				{ path: "/", name: "折线图", component: Echarts.line },
				{ path: "line", name: "折线图", component: Echarts.line },
				{ path: "pie", name: "饼图", component: Echarts.pie },
				{ path: "bar", name: "柱形图", component: Echarts.bar },
				{ path: "spcialEchart", name: "特殊的echart", component: Echarts.spcialEchart },
				{path:"moreEchart",name:"更多Echarts",component:Echarts.moreEchart}
			]
		}
	]
})