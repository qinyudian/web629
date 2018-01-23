// 导入 vue
import Vue from 'vue';

// 导入 路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 接收导入的路由
import router from './router.js';

// 导入自己的组件
//导入app
import app from './app.vue';


// 导入 MintUI 组件
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
});