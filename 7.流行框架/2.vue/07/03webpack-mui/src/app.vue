<template>
  <div>
      <h1>这是App组件</h1>

      <mt-button type="danger" @click="show">danger</mt-button><br><br>
      <mt-button type="danger" size="large" plain>danger</mt-button>
      <br>
      <br>

      <button type="button" class="mui-btn mui-btn-royal">
        紫色
      </button>

      <router-link to="/account">用户</router-link>
      <router-link to="/goodlist">好友列表</router-link>
      <router-view></router-view>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      instance: null
    };
  },
  created(){
    this.show();
    setTimeout(() => {
      this.instance.close();
    }, 2000);
  },
  methods: {
    show(){
      this.instance = Toast({
        message: "这是消息",
        duration: -1, // 如果是 -1 则弹出之后不消失
        position: "top",
        iconClass: "glyphicon glyphicon-heart", // 设置 图标的类
        className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
      }); 
    }
  }
}


</script>

<style>



</style>
