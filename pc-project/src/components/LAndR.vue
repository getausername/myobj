<template>
  <div class="container">
    <router-link to="/register" class="reg">注册</router-link><router-link to="/login" class="log">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LAndR"
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container {
  background-image: url("../assets/backgroundimg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 150px;
  box-sizing: border-box;
  height: 800px;
}
.reg {
  background: rgba(0, 0, 0, 0.6);
  display: inline-block;
  width: 300px;
  height: 60px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
  border-top-left-radius: 6px;
}
.reg:hover {
  color: #ff6767;
  text-decoration: underline;
}
.log {
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  width: 300px;
  height: 60px;
  color: #333;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
  border-top-right-radius: 6px;
}
.log:hover {
  text-decoration: underline;
}
</style>
