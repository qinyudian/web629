<template>
  <div>
      <h1>这是App组件</h1>

      <mt-button type="danger">danger</mt-button><br><br>
      <mt-button type="danger" size="large" plain>danger</mt-button>
      <br>
      <br>
      <router-link to="/account">用户</router-link>
      <router-link to="/goodlist">好友列表</router-link>
      <router-view></router-view>


  </div>
</template>

<script>
    

</script>

<style>



</style>
