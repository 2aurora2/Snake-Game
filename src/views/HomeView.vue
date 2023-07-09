<template>
  <div class="options">
    <router-link class="button" to="/play">开始游戏</router-link>
    <router-link class="button" to="/intro">规则介绍</router-link>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  name: "HomeView",
  components:[
      RouterLink
  ]
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  background-color: @bg-color;
  box-sizing: border-box;
}

.options {
  padding: 10px;
  width: 40%;
  height: 10%;
  margin: 10% auto;
  text-align: center;

  .button {
    display: block;
    width: 40%;
    padding: 10px;
    margin: 50px auto;
    border-radius: 20px;
    border: 5px black solid;
    font-family: '楷体', 'sans-serif';
    font-size: large;
    font-weight: bold;
  }
}
</style>
