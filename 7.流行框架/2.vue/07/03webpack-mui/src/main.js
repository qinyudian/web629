// 导入 vue
import Vue from 'vue'

// 导入 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import 'mint-ui/lib/style.css'

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css'


// 导入 MintUI 组件
/* import MintUI from 'mint-ui';
Vue.use(MintUI); */
// 按需导入 Mint-UI组件
import { Button } from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
Vue.component(Button.name, Button)

//导入自己的组件 导入app
import app from './app.vue'

// 接收导入的路由
import router from './router.js'


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
});