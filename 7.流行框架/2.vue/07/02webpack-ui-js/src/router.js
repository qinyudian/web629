// 导入 路由
import VueRouter from 'vue-router';

// 导入自己的组件
import account from './main/account.vue';
import goodlist from './main/goodlist.vue';
//导入子路由
import login from './subcom/login.vue';
import register from './subcom/register.vue';


// 创建路由
var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: '/login', component: login },
                { path: '/register', component: register }
            ]
        },
        { path: '/goodlist', component: goodlist }
    ],
    linkActiveClass: 'myActive'
});

export default router;