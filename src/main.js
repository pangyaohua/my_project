// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import $ from "jquery"
import headerNav from '@/components/header_nav'
//--引入echarts
import echarts from "echarts"

//--引入bootstrap样式表
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


//全局样式表
import indexSheet from "./assets/index.css"

//引入本地阿里图标
import "./assets/iconfont/iconfont.css"

Vue.prototype.$echarts=echarts
Vue.config.productionTip = false
Vue.use(headerNav)
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
