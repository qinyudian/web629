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


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
});