<template>
  <div class="box">
    <div class="con">
      <div class="acc">
        <label for="user">新账号:</label>
        <input type="text" id="user" v-model.lazy="account" @focus="focus"/>
      </div>
      <div class="acc">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model.lazy="password" @focus="focus"/>
      </div>
    </div>
    <div class="mess">
      <div class="message">{{message}}</div>
    </div>
    <div class="cont">
      <div class="button" @click="register">注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      account: "",
      password: "",
      message:''
    };
  },
  methods: {
    register() {
      let that = this;
      this.axios({
        method: "get",
        url: "http://localhost:8888/register",
        params: {
          account: that.account,
          password: that.password
        }
      })
        .then(response => {
          if(response.data == '账号或密码不能为空'){
            this.message = response.data;
          }
          if(response.data == '该用户已存在'){
            this.message = response.data;
          }
          if(response.data == '注册成功'){
            alert('注册成功');
			this.$router.push("/login")
          }
        })
        .catch(response => {
          console.log('请求失败');
        });
    },
    focus(){
      this.message = '';
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.con {
  padding-top: 20px;
}
.box {
  background: rgba(255, 255, 255, 0.8);
  width: 600px;
  margin: 0 auto;
  height: 300px;
}
.acc {
  border: 1px solid #999;
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 30px auto;
  padding-left: 10px;
  border-radius: 4px;
  text-align: left;
}
input {
  background: rgba(0, 0, 0, 0);
  border: none;
  height: 30px;
  outline: none;
  font-size: 16px;
}

.button {
  width: 310px;
  height: 40px;
  background-color: #ff6767;
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 6px;
}
.mess{
  position: relative;
}
.message{
  position: absolute;
  left: 160px;
  top:-24px;
  color: red;
}
</style>