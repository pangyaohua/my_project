webpackJsonp([1],{"+Ao1":function(t,e){},"/zbl":function(t,e){},"9/6z":function(t,e){},Bb6q:function(t,e){},N7pG:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("xJD8"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=function(t){a("9/6z")},o=a("VU/8")(i.a,n,!1,l,null,null).exports,r=a("/ocq"),c={name:"login",data:function(){return{userName:"admin",pwd:"123456",msg:"showTime"}},methods:{login:function(){alert(this.pwd),""==this.userName||""==this.pwd?alert("输入用户名与密码"):this.$router.push("/detail")}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{staticClass:"form-signin"},[a("h2",{staticClass:"form-signin-heading"},[t._v("Please sign in")]),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"userName"}},[t._v("用户名:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{type:"text",id:"userName",placeholder:"请输入用户名",required:"",autofocus:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"请输入密码",required:""},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",on:{click:t.login}},[t._v("Sign in")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox text-left"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),this._v(" Remember me\n          ")])])}]};var u=a("VU/8")(c,d,!1,function(t){a("+Ao1")},null,null).exports,m={data:function(){return{msg:"XX产品官网介绍",activeIndex:"1",activeIndex2:"1",componnet1:!1,componnet2:!1,"element-ui":!1}},methods:{handleSelect:function(t,e){console.log(t,e)}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("header-nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var p=a("VU/8")(m,v,!1,function(t){a("iIZ/")},"data-v-7b2c1d9a",null).exports,h=(a("mtWM"),{data:function(){return{msg:"产品列表简介",title:"",isAdd:!1,editIndex:"",dataList:[{name:"vue实例",id:"a"},{name:"模板语法",id:"b"},{name:"计算属性与和侦听器",id:"c"},{name:"class与style绑定",id:"d"},{name:"施蒂利克积分可适当",id:"e"}],dialogFormVisible:!1,formLabelWidth:"120px"}},methods:{add:function(){this.title="",this.isAdd=!0,this.dialogFormVisible=!0},edit:function(t){this.title="",this.isAdd=!1,this.dialogFormVisible=!0,console.log(t),this.editIndex=t},editSure:function(){if(this.isAdd)return this.dataList.push({name:this.title}),this.dialogFormVisible=!1,!1;this.dataList[this.editIndex].name=this.title,this.dialogFormVisible=!1}}}),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productList"},[a("p",{staticClass:"left"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.add}},[t._v("新加")])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},t._l(t.dataList,function(e,s){return a("el-col",{key:e.id,attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",[t._v(t._s(s)+"-"+t._s(e.name))]),t._v(" "),a("el-button",{on:{click:function(e){t.edit(s)}}},[t._v("编辑")])],1)])})),t._v(" "),a("el-dialog",{attrs:{title:"请输入你要添加的内容",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",[a("el-form-item",{attrs:{label:"内容","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editSure}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(h,f,!1,function(t){a("RvG6")},null,null).exports,b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row text-left"},[a("div",{staticClass:"col-md-12 col-xs-12"},[t._v("\n\n\t\t\t"+t._s(t.message)+"\n\n\t\t")])]),t._v(" "),a("div",{staticClass:"row text-left"},[a("div",{staticClass:"col-md-12 col-xs-12"},[t._v("\n\n\t\t\t"+t._s(t.detail)+"\n\n\t\t")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row text-left"},[e("div",{staticClass:"col-md-12 col-xs-12"},[this._v("\n\n\t\t\t详情见于\n\t\t\t"),e("a",{attrs:{href:"https://cn.vuejs.org/"}},[this._v("https://cn.vuejs.org/")])])])}]};var g=a("VU/8")({data:function(){return{message:"官方解读：vue.js",detail:"\tVue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。"}}},b,!1,function(t){a("Bb6q")},null,null).exports,C={data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticStyle:{"line-height":"60px"}},[t._v("\n\t\t详细信息如下\n\t")]),t._v(" "),a("el-container",[a("el-aside",[a("el-row",{staticClass:"tac"},[a("el-col",{attrs:{span:12}},[a("h5",[t._v("默认颜色")]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),t._v(" "),a("span",[t._v("导航一")])]),t._v(" "),a("el-menu-item-group",[a("template",{slot:"title"},[t._v("分组一")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),a("el-menu-item-group",{attrs:{title:"分组2"}},[a("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),a("el-submenu",{attrs:{index:"1-4"}},[a("template",{slot:"title"},[t._v("选项4")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),a("el-menu-item",{attrs:{index:"3",disabled:""}},[a("i",{staticClass:"el-icon-document"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-setting"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)],1)],1),t._v(" "),a("el-main")],1),t._v(" "),a("el-footer",[t._v("\n\t\t详情请咨询\n\t")])],1)},staticRenderFns:[]};var y=a("VU/8")(C,x,!1,function(t){a("ntsy")},null,null).exports;console.log(s.default);s.default.component("componnets-b",{template:"<p>全局组件注册：Vue.componnet('组件名称'，{'template':'需要的组件详情'})</p>"});var w={data:function(){return{}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},selectCode:function(t){console.log(t)}},components:{"components-a":{template:"<p>局部组件展示--data之后，componnets:{'组件名称'：组件变量名}。var 组件变量名={'template':'想要添加的组件详情'}</p>"}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{id:"app"}},[a("el-aside",{staticStyle:{"padding-top":"15px","padding-left":"15px","text-align":"left",width:"250px"}},[a("el-row",{staticClass:"tac"},[a("el-col",{staticStyle:{width:"100%"},attrs:{span:12}},[a("h5",[t._v("默认颜色")]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"},on:{open:function(e){t.handleOpen(t.index)},close:t.handleClose}},[a("el-menu-item",{attrs:{index:"1"},on:{click:function(e){t.selectCode(1)}}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("展示组件基础实例：")])]),t._v(" "),a("el-menu-item",{attrs:{index:"2"},on:{click:function(e){t.selectCode(2)}}},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),a("el-menu-item",{attrs:{index:"3",disabled:""}},[a("i",{staticClass:"el-icon-document"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),a("el-menu-item",{attrs:{index:"4"},on:{click:function(e){t.selectCode(4)}}},[a("i",{staticClass:"el-icon-setting"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)],1)],1),t._v(" "),a("el-main",{staticStyle:{"text-align":"left"}},[a("components-a"),t._v(" "),a("componnets-b")],1)],1)},staticRenderFns:[]};var k=a("VU/8")(w,V,!1,function(t){a("/zbl")},null,null).exports;p.productList=_,p.productDetail=g,p.productAbout=y,p.myWork=k;var F=p,A=a("o260"),N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productList container"},[a("header-nav"),t._v(" "),a("div",{staticClass:"listContainer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"com-md-12"},[a("p",{staticClass:"left"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit","data-toggle":"modal","data-target":"#myModal"},on:{click:function(e){t.add()}}},[t._v("新加")])],1)])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.dataList,function(e,s){return a("div",{key:e.id,staticClass:"col-md-4"},[a("div",{staticClass:"listBox"},[a("p",[t._v(t._s(s)+"-"+t._s(e.name))]),t._v(" "),a("el-button",{attrs:{"data-toggle":"modal","data-target":"#myModal"},on:{click:function(e){t.edit(s)}}},[t._v("编辑")])],1)])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogFormVisible,expression:"dialogFormVisible"}],staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.editSure}},[t._v("Save changes")])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("请输入你要添加的内容")])])}]};var L=function(t){a("N7pG")},R=a("VU/8")(A.a,N,!1,L,null,null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("header-nav"),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4",staticStyle:{height:"100%","margin-left":"-60px"}},[e("ul",{staticClass:"seleceAll",staticStyle:{"padding-top":"20px"}},[e("div",{staticClass:"list-group"},[e("a",{staticClass:"list-group-item active",attrs:{href:"#"}},[e("h4",{staticClass:"list-group-item-heading"},[e("router-link",{attrs:{to:"/productAbout/aboutTel"}},[this._v("联系方式")])],1)])]),this._v(" "),e("div",{staticClass:"list-group"},[e("a",{staticClass:"list-group-item active",attrs:{href:"#"}},[e("h4",{staticClass:"list-group-item-heading"},[e("router-link",{attrs:{to:"/productAbout/aboutAdd"}},[this._v("地址管理")])],1)])])])]),this._v(" "),e("div",{staticClass:"col-md-8"},[e("router-view")],1)])],1)},staticRenderFns:[]};var $=a("VU/8")({data:function(){return{}}},S,!1,function(t){a("zxYM")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},t._l(t.tableData,function(e){return a("ul",{staticClass:"list-group",staticStyle:{"padding-top":"20px"}},[a("li",{staticClass:"list-group-item text-left"},[t._v("\n\t\t\t"+t._s(e.name)+":"+t._s(e.address)+":"+t._s(e.date)+"\n\t\t")])])}))},staticRenderFns:[]},j=a("VU/8")({data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"快圣诞节疯狂时代峻峰可视对讲防守打法"},{date:"2016-05-04",name:"assd",address:"北京市朝阳区常营民族家园-27-03-502"},{date:"2016-05-01",name:"欧尼",address:"上海市普陀区星光大厦28-05-1404"},{date:"2016-05-02",name:"王小虎",address:"快圣诞节疯狂时代峻峰可视对讲防守打法"},{date:"2016-05-04",name:"assd",address:"北京市朝阳区常营民族家园-27-03-502"},{date:"2016-05-01",name:"欧尼",address:"上海市普陀区星光大厦28-05-1404"}]}}},E,!1,null,null,null).exports,I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},t._l(t.tableData,function(e){return a("ul",{staticClass:"list-group",staticStyle:{"padding-top":"20px"}},[a("li",{staticClass:"list-group-item text-left"},[t._v("\n\t\t\t"+t._s(e.name)+":"+t._s(e.phone)+"\n\t\t")])])}))},staticRenderFns:[]},M=a("VU/8")({data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",phone:"13020089898"},{date:"2016-05-04",name:"assd",phone:"0310-09099900"},{date:"2016-05-01",name:"欧尼",phone:"19809098729"}]}}},I,!1,null,null,null).exports;$.aboutTel=M,$.aboutAdd=j;var U=$;s.default.use(r.a);var q=new r.a({routes:[{path:"/",name:"Login",component:u},{path:"/detail",name:"",component:F,children:[{path:"/",name:"产品介绍",component:F.productDetail},{path:"productDetail",name:"产品介绍",component:F.productDetail},{path:"productList",name:"产品列表",component:F.productList},{path:"productAbout",name:"关于我们",component:F.productAbout},{path:"myWork",name:"我的工作台",component:F.myWork}]},{path:"/list",name:"",component:R,children:[]},{path:"/productAbout",name:"",component:U,children:[{path:"/",name:"电话",component:U.aboutTel},{path:"aboutTel",name:"电话",component:U.aboutTel},{path:"aboutAdd",name:"地址",component:U.aboutAdd}]}]}),D=a("zL8q"),P=a.n(D),W=(a("tvR6"),a("7t+N"),a("a1TI")),T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("nav",{staticClass:"navbar navbar-inverse navbar-fixed-top"},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[e("ul",{staticClass:"nav navbar-nav",staticStyle:{width:"80%"}},[e("li",{staticClass:"active"},[e("router-link",{attrs:{to:"/detail"}},[this._v("\n\t\t\t\t\t\t\t\t产品介绍\n\t\t\t\t\t\t\t")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/list"}},[this._v("\n\t\t\t\t\t\t\t\t产品列表\n\t\t\t\t\t\t\t")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/productAbout"}},[this._v("\n\t\t\t\t\t\t\t\t联系我们\n\t\t\t\t\t\t\t")])],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})]),this._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[this._v("Project name")])])}]};var z=function(t){a("SO9z")},O=a("VU/8")(W.a,T,!1,z,"data-v-455e8804",null).exports,B={install:function(t){t.component("header-nav",O)}};a("qb6w"),a("Bb4J"),a("NYWk");s.default.config.productionTip=!1,s.default.use(B),s.default.use(P.a),new s.default({el:"#app",router:q,components:{App:o},template:"<App/>"})},NYWk:function(t,e){},RvG6:function(t,e){},SO9z:function(t,e){},a1TI:function(t,e,a){"use strict";(function(t){e.a={name:"Detail",data:function(){return{}},methods:{changeIcon:function(){t(".navbar-nav").find("li").each(function(){var e=t(this).find("a:first")[0];t(e).attr("href").indexOf(window.location.hash)>-1?t(e).parent("li").addClass("active"):t(e).parent("li").removeClass("active")})}},mounted:function(){this.changeIcon()}}}).call(e,a("7t+N"))},"iIZ/":function(t,e){},ntsy:function(t,e){},o260:function(t,e,a){"use strict";(function(t){var s=a("mtWM");a.n(s);e.a={data:function(){return{msg:"产品列表简介",title:"",isAdd:!1,editIndex:"",dataList:[{name:"vue实例",id:"a"},{name:"模板语法",id:"b"},{name:"计算属性与和侦听器",id:"c"},{name:"class与style绑定",id:"d"},{name:"施蒂利克积分可适当",id:"e"}],dialogFormVisible:!1,formLabelWidth:"120px"}},methods:{add:function(){this.title="",this.isAdd=!0,this.dialogFormVisible=!0},edit:function(t){this.title="",this.isAdd=!1,this.dialogFormVisible=!0,console.log(t),this.editIndex=t},editSure:function(){return this.title?this.isAdd?(this.dataList.push({name:this.title}),this.dialogFormVisible=!1,t(".modal-backdrop").remove(),!1):(this.dataList[this.editIndex].name=this.title,t(".modal-backdrop").remove(),void(this.dialogFormVisible=!1)):(alert("请输入内容哦！"),!1)}}}}).call(e,a("7t+N"))},qb6w:function(t,e){},tvR6:function(t,e){},xJD8:function(t,e,a){"use strict";(function(t){t(function(){console.log("引入jquery成功")}),e.a={name:"App"}}).call(e,a("7t+N"))},zxYM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e8acc8b4530cfc8f23ac.js.map