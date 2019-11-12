<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="container">
      <el-tab-pane label="用户管理" name="first">
        <div class="con">头像</div>
        <img class="headimg" :src="$store.state.user[0].head_src" />
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8888/steps"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="con">性别</div>
        <span class="sex" @click="male" :class="{classA:isMale}">&nbsp;&nbsp;男&nbsp;&nbsp;</span>
        <span class="sex" @click="female" :class="{classA:isFemale}">&nbsp;&nbsp;女&nbsp;&nbsp;</span>
        <span class="sex" @click="secret" :class="{classA:isSecret}">&nbsp;保密&nbsp;</span>
        <div class="con">昵称</div>
        <div class="name">
          <input type="text" v-model="name" />
        </div>
        <div class="submit" @click="savechange">保存修改</div>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="新密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="菜谱管理/上传" name="third">
        <el-input v-model="dishname" placeholder="菜名" style="width:200px;"></el-input>
        <div class="title">菜品描述</div>
        <textarea name id="desc" cols="90" rows="14" placeholder="请输入菜品描述"></textarea>
        <div class="title">基本参数</div>
        <el-select v-model="value_1" placeholder="难度" class="select">
          <el-option
            v-for="item in options_1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value_2" placeholder="口味" class="select">
          <el-option
            v-for="item in options_2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value_3" placeholder="工艺" class="select">
          <el-option
            v-for="item in options_3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value_4" placeholder="耗时" class="select">
          <el-option
            v-for="item in options_4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="title">食材明细</div>
        <div class="zhuliao">
          <div>主料</div>
          <div>
            <input type="text" placeholder="食材名" v-model="zhuliao" />
            <input type="text" placeholder="用量" v-model="yongliang" />
          </div>
          <div class="add" @click="add">添加</div>
          <div class="cutoff" @click="cutoff">删除</div>
          <div class="mainbox">
            主料:
            <div v-for="(item,index) in main" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="zhuliao">
          <div>辅料</div>
          <div>
            <input type="text" placeholder="食材名" v-model="fuliao" />
            <input type="text" placeholder="用量" v-model="yongliang_" />
          </div>
          <div class="add" @click="add_">添加</div>
          <div class="cutoff" @click="cutoff_">删除</div>
          <div class="assistbox">
            辅料:
            <div v-for="(item,index) in assist" :key="index">{{item}}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Manage",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      isMale: false,
      isFemale: false,
      isSecret: false,
      name: "",
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      dishname: "",
      options_1: [
        {
          value: "简单",
          label: "简单"
        },
        {
          value: "普通",
          label: "普通"
        },
        {
          value: "高级",
          label: "高级"
        },
        {
          value: "神级",
          label: "神级"
        }
      ],
      options_2: [
        {
          value: "微辣",
          label: "微辣"
        },
        {
          value: "中辣",
          label: "中辣"
        },
        {
          value: "超辣",
          label: "超辣"
        },
        {
          value: "麻辣",
          label: "麻辣"
        },
        {
          value: "酸辣",
          label: "酸辣"
        },
        {
          value: "酸甜",
          label: "酸甜"
        },
        {
          value: "酸咸",
          label: "酸咸"
        },
        {
          value: "咸鲜",
          label: "咸鲜"
        },
        {
          value: "咸甜",
          label: "咸甜"
        },
        {
          value: "甜味",
          label: "甜味"
        },
        {
          value: "苦味",
          label: "苦味"
        },
        {
          value: "原味",
          label: "原味"
        },
        {
          value: "清淡",
          label: "清淡"
        },
        {
          value: "五香",
          label: "五香"
        },
        {
          value: "鱼香",
          label: "鱼香"
        },
        {
          value: "葱香",
          label: "葱香"
        },
        {
          value: "蒜香",
          label: "蒜香"
        },
        {
          value: "奶香",
          label: "奶香"
        },
        {
          value: "酱香",
          label: "酱香"
        },
        {
          value: "糟香",
          label: "糟香"
        },
        {
          value: "咖喱",
          label: "咖喱"
        },
        {
          value: "孜然",
          label: "孜然"
        },
        {
          value: "果味",
          label: "果味"
        },
        {
          value: "草香",
          label: "草香"
        },
        {
          value: "怪味",
          label: "怪味"
        },
        {
          value: "咸香",
          label: "咸香"
        },
        {
          value: "甜香",
          label: "甜香"
        },
        {
          value: "麻香",
          label: "麻香"
        },
        {
          value: "甜辣",
          label: "甜辣"
        },
        {
          value: "香辣",
          label: "香辣"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      options_3: [
        {
          value: "烧",
          label: "烧"
        },
        {
          value: "炒",
          label: "炒"
        },
        {
          value: "爆",
          label: "爆"
        },
        {
          value: "焖",
          label: "焖"
        },
        {
          value: "炖",
          label: "炖"
        },
        {
          value: "蒸",
          label: "蒸"
        },
        {
          value: "煮",
          label: "煮"
        },
        {
          value: "拌",
          label: "拌"
        },
        {
          value: "烤",
          label: "烤"
        },
        {
          value: "炸",
          label: "炸"
        },
        {
          value: "烩",
          label: "烩"
        },
        {
          value: "溜",
          label: "溜"
        },
        {
          value: "氽",
          label: "氽"
        },
        {
          value: "腌",
          label: "腌"
        },
        {
          value: "卤",
          label: "卤"
        },
        {
          value: "炝",
          label: "炝"
        },
        {
          value: "煎",
          label: "煎"
        },
        {
          value: "酥",
          label: "酥"
        },
        {
          value: "扒",
          label: "扒"
        },
        {
          value: "熏",
          label: "熏"
        },
        {
          value: "煨",
          label: "煨"
        },
        {
          value: "酱",
          label: "酱"
        },
        {
          value: "烘焙",
          label: "烘焙"
        },
        {
          value: "火锅",
          label: "火锅"
        },
        {
          value: "拔丝",
          label: "拔丝"
        },
        {
          value: "生鲜",
          label: "生鲜"
        },
        {
          value: "调味",
          label: "调味"
        },
        {
          value: "技巧",
          label: "技巧"
        },
        {
          value: "煲",
          label: "煲"
        },
        {
          value: "烙",
          label: "烙"
        },
        {
          value: "榨汁",
          label: "榨汁"
        },
        {
          value: "冷冻",
          label: "冷冻"
        },
        {
          value: "焗",
          label: "焗"
        },
        {
          value: "焯",
          label: "焯"
        },
        {
          value: "干煸",
          label: "干煸"
        },
        {
          value: "干锅",
          label: "干锅"
        },
        {
          value: "铁板",
          label: "铁板"
        },
        {
          value: "微波",
          label: "微波"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      options_4: [
        {
          value: "十分钟",
          label: "十分钟"
        },
        {
          value: "廿分钟",
          label: "廿分钟"
        },
        {
          value: "半小时",
          label: "半小时"
        },
        {
          value: "三刻钟",
          label: "三刻钟"
        },
        {
          value: "一小时",
          label: "一小时"
        },
        {
          value: "数小时",
          label: "数小时"
        },
        {
          value: "一天",
          label: "一天"
        },
        {
          value: "数天",
          label: "数天"
        }
      ],
      value_1: "",
      value_2: "",
      value_3: "",
      value_4: "",
      zhuliao: "",
      yongliang: "",
      fuliao: "",
      yongliang_: "",
      main: [],
      assist: [],
      imageUrl: ""
    };
  },
  methods: {
    handleClick(tab, eve) {},
    male() {
      this.isMale = true;
      this.isFemale = false;
      this.isSecret = false;
    },
    female() {
      this.isMale = false;
      this.isFemale = true;
      this.isSecret = false;
    },
    secret() {
      this.isMale = false;
      this.isFemale = false;
      this.isSecret = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let that = this;
          this.axios({
            method: "get",
            url: "http://localhost:8888/change",
            params: {
              password: that.ruleForm.pass,
              account: that.$store.state.user[0].account
            }
          })
            .then(res => {})
            .catch(res => {
              console.log("请求失败");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    add() {
      if (this.zhuliao == "" || this.yongliang == "") {
        return;
      }
      let str = `[${this.zhuliao}(${this.yongliang})]`;
      this.main.push(str);
      this.zhuliao = "";
      this.yongliang = "";
    },
    cutoff() {
      this.main.pop();
    },
    add_() {
      if (this.fuliao == "" || this.yongliang_ == "") {
        return;
      }
      let str = `[${this.fuliao}(${this.yongliang_})]`;
      this.assist.push(str);
      this.fuliao = "";
      this.yongliang_ = "";
    },
    cutoff_() {
      this.assist.pop();
    },
    savechange() {
      if (this.name == "") {
        alert("昵称不能为空");
        return;
      }
      let that = this;
      let gender = "";
      if (this.isFemale) {
        gender = "female";
      } else if (this.isMale) {
        gender = "male";
      } else {
        gender = "保密";
      }
      this.axios({
        method: "get",
        url: "http://localhost:8888/change",
        params: {
          name: that.name,
          gender: gender,
          account: that.$store.state.user[0].account
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(res => {
          console.log("请求失败");
        });
      alert("保存成功");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.con {
  color: #888;
  font-size: 12px;
  font-family: "Hiragino Sans GB", "STHeiti", "微软雅黑", "Microsoft YaHei",
    Helvetica, Arial, serif;
}
.headimg {
  width: 120px;
  height: 120px;
  display: block;
}
.file {
  border: 1px solid #ccc;
  margin: 20px 0px;
  height: 30px;
  line-height: 30px;
}
.sex {
  display: inline-block;
  border: 1px solid #bbb;
  margin: 8px 5px 16px 5px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  color: #bbb;
}
.classA {
  background-color: #ff8d8d;
  border: 1px solid #ff8d8d;
  color: #fff;
}
.name {
  border: 1px solid #999;
  width: 180px;
  margin-top: 10px;
  border-radius: 2px;
  height: 26px;
  line-height: 26px;
  padding-left: 6px;
}
.name input {
  outline: none;
  border: none;
}
.submit {
  background-color: #ff6767;
  width: 100px;
  height: 30px;
  color: #fff;
  border-radius: 6px;
  line-height: 30px;
  text-align: center;
  margin: 30px 0px 0px 40px;
  cursor: pointer;
}
.pwd {
  width: 260px;
}
.title {
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #888;
}
#desc::-webkit-input-placeholder {
  color: #ccc;
}
#desc {
  font-size: 16px;
}
.select {
  width: 150px;
}
.zhuliao input {
  outline: none;
  margin-left: 2px;
  margin-top: 4px;
  height: 24px;
}
.zhuliao input::-webkit-input-placeholder {
  color: #ccc;
}
.add {
  cursor: pointer;
  width: 50px;
  height: 30px;
  background-color: #ff6767;
  color: #fff;
  border-radius: 4px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  margin-left: 200px;
}
.cutoff {
  cursor: pointer;
  width: 50px;
  height: 30px;
  background-color: #ff6767;
  color: #fff;
  border-radius: 4px;
  line-height: 30px;
  text-align: center;
  margin-top: -30px;
  margin-left: 270px;
}
.mainbox {
  width: 200px;
  height: 130px;
  border: 1px solid #ccc;
  position: absolute;
  left: 360px;
  top: 450px;
  overflow: auto;
}
.assistbox {
  width: 200px;
  height: 130px;
  border: 1px solid #ccc;
  position: absolute;
  left: 580px;
  top: 450px;
  overflow: auto;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>