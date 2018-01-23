// 导入 vue
import Vue from 'vue';

// 导入 路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入自己的组件
//导入app
import app from './app.vue';
import login from './main/login.vue';
import register from './main/register.vue';



// 创建路由
var router = new VueRouter({
    routes: [
        { path: '/login' , component: login },
        { path: '/register' , component: register }
    ],
    linkActiveClass: 'myActive'
});



var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
});