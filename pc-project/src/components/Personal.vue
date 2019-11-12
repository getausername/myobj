<template>
  <div class="container">
    <div class="bacgroundimg"></div>
    <div class="header">
      <img
        class="head"
        :src="$store.state.user[0].head_src"
      />
      <div class="name">{{$store.state.user[0].name}}</div>
      <img class="gender" src="../assets/female.png" />
    </div>
    <router-link class="manage" to="/manage">管理中心</router-link>
	<router-link class="manage2" to="/page1">首页</router-link>
    <div class="bar">
      <router-link class="frist span" to="/index">主页</router-link>
      <router-link class="span" to="/menu">菜谱</router-link>
      <router-link class="span" to="/topic">话题</router-link>
      <router-link class="span" to="/journal">日志</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bacgroundimg {
  background-image: url("../assets/backgroundimg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  height: 300px;
}
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.head {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 80px;
}
.name {
  font-size: 40px;
  width: 100%;
  position: absolute;
  left: 260px;
  top: 90px;
}
.gender {
  width: 24px;
  position: absolute;
  left: 230px;
  top: 80px;
}
.bar {
  background-color: #ff6767;
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
}
.bar .span {
  font-size: 18px;
  display: inline-block;
  width: 100px;
  color: #fff;
  text-align: center;
  text-decoration: none;
}
.span:hover {
  background-color: #ff838b;
}
.frist {
  margin-left: 150px;
}
.manage{
  position: absolute;
  width: 80px;
  height: 34px;
  background-color: #ff6767;
  top: 40px;
  right: 70px;
  border-radius: 10px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
.manage2 {
	position: absolute;
	width: 80px;
	height: 34px;
	background-color: #ff6767;
	top: 100px;
	right: 70px;
	border-radius: 10px;
	line-height: 34px;
	text-align: center;
	color: #fff;
	font-weight: bold;
	text-decoration: none;
}
</style>