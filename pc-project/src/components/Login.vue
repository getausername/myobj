<template>
  <div class="box">
    <div class="box-left">
      <div class="acc account-left">
        <label for="account">手机号/昵称:</label>
        <input type="text" id="account" v-model.lazy="account" @focus="focus" />
      </div>
      <div class="acc">
        <label for="pwd">密码:</label>
        <input type="password" id="pwd" v-model.lazy="password" @focus="focus" />
      </div>
      <div class="informat">
        <div class="waring">{{message}}</div>
      </div>
      <p class="forget">
        <span class="pspan">忘记密码?</span>
      </p>
      <div class="log" @click="login">登录</div>
    </div>
    <div class="box-right">
      <img src="//static.meishichina.com/v6/img/model/msc_app.png" class="twocode" />
      <p>扫码下载客户端</p>
      <img src="../assets/qq.png" class="other" title="用QQ账号登录" />
      <img src="../assets/wechat.png" class="other" title="微信登录" />
      <img src="../assets/weibo.png" class="other" title="用新浪微博账号登录" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      message: ""
    };
  },
  methods: {
    login() {
      if (this.account == "" || this.password == "") {
        this.message = "账号或密码不能为空";
        return;
      }
      let that = this;
      this.axios({
        method: "get",
        url: "http://localhost:8888/login",
        params: {
          account: that.account
        }
      })
        .then(response => {
          if (response.data.length == 0) {
            this.message = '用户不存在';
            return;
          }
          if(response.data[0].password == this.password){
            this.$store.commit('user',{
              data:response.data
            });
			this.$store.state.isshow = false
            this.$router.push('/');
          } else{
            this.message = '密码错误';
            return;
          }
        })
        .catch(response => {
          console.log("请求失败");
        });
    },
    focus() {
      this.message = "";
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

input {
  background: rgba(0, 0, 0, 0);
  border: none;
  height: 30px;
  outline: none;
  font-size: 16px;
}

.box {
  background: rgba(255, 255, 255, 0.8);
  width: 600px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  height: 300px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.box-left {
  margin-top: 30px;
  width: 400px;
  height: 240px;
  border-right: 1px solid #999;
}

.box-right {
  width: 200px;
  text-align: center;
}

.acc {
  border: 1px solid #999;
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto;
  padding-left: 10px;
  border-radius: 4px;
}

.account-left {
  margin-bottom: 6px;
}

.forget {
  text-align: right;
  padding-right: 30px;
}

.pspan {
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
}

.pspan:hover {
  color: #ff6767;
}

.log {
  width: 310px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  background-color: #ff6767;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
}

.twocode {
  width: 130px;
  margin-top: 50px;
}

.other {
  width: 34px;
  margin-top: 20px;
  cursor: pointer;
  padding: 8px;
}
.informat {
  position: relative;
}
.waring {
  position: absolute;
  left: 50px;
  color: red;
}
</style>
