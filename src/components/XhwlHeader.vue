<template>
  <div id="Xhwlheader" style="height:120px;border-bottom: solid 1px #dddddd;">
    <div style="display: inline-block;width: 26%;height: 160px;text-align: center;vertical-align: middle">
      <div style="display: block;margin: 4% auto">
       <img
        src="../../static/img/logoMain.png" style="height:auto;width: 70%;">
      </div>
    </div>
     <div style="display: inline-block;width: 48%;text-align: center;height: 60px">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               :router='true'
               text-color="#444444"
               background-color="#ffffff"
               active-text-color='#1476C1'
               active-background-color="#ffffff"
               style="width:598px;margin:0 auto;height:60px;display: inline-block">

        <el-menu-item index="1" style="border: none" route="/" class="item4menu">首页</el-menu-item>
        <el-menu-item index="2" style="border: none" route="/Social" class="item4menu">社会招聘</el-menu-item>
        <el-submenu index="3" style="border: none" mode="horizontal" class="item4menu">
          <template style="border: none" slot="title">校园招聘</template>
          <el-menu-item index="3-1" style="border: none" route="/Campus/Post">校招职位</el-menu-item>
          <el-menu-item index="3-2" style="border: none" route="/Campus/Procedure">招聘流程</el-menu-item>
          <el-menu-item index="3-3" style="border: none" route="/Campus/Plan">培养计划</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" style="border: none" route="/Trainee" class="item4menu">实习生招聘</el-menu-item>
        <el-menu-item index="5" style="border: none" route="/AboutUs" class="item4menu">关于兴海物联</el-menu-item>
      </el-menu>
  </div>
    <div style="width:25%;display: inline-block;height: 120px;text-align: center;vertical-align: middle" v-if="Need2Login">
      <div style="margin: 4% auto">
        <el-button plain @click="dialogFormVisible = true" class="button4plain"
                   style="">注册</el-button>
        <el-button plain @click="dialogFormVisible1 = true" class="button4plain"
                   style="">登录</el-button>
      </div>
    </div>

      <div style="width:25%;display:inline-block;height: 100px;text-align: center;vertical-align: middle" v-else>
        <div style="margin: 0 auto">
      <el-dropdown >
        <el-badge :value="mine[2].messageNum" class="item">
      <el-button  type="text" ><img
        src="../../static/img/Default.png"><i class="el-icon-arrow-down el-icon--right"></i></el-button>
        </el-badge>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item v-for="(item, index) in mine" v-bind:key="index">
            <router-link style="color: #333333" :to="item.path">
              <el-badge :value="item.messageNum" class="item">
              {{item.text}}
              </el-badge>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="text" @click="logout()">注销</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      </div>
    <div class="line"></div>
    <el-dialog title="注册" :visible.sync="dialogFormVisible" style="width: 50%;margin:auto auto" :lock-scroll="false">
      <el-form label-position="labelPosition" label-width="60px">
        <el-form-item label="手机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input style="width: 60%">
          </el-input>
          <el-button style="width: 38%" type="primary">发送验证</el-button>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" >取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="登录" :visible.sync="dialogFormVisible1" style="width: 50%;margin:auto auto" :lock-scroll="false">
      <el-form :label-position="labelPosition1" label-width="60px" :model="user" ref="user" :rules="rules">
        <el-form-item label="手机号" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="login('user');">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {isvalidPhone} from "../util/Validate";


  export default {
  name: 'XhwlHeader',
  data () {

    var checkPhoneNum=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入手机号'))
      }else if(!isvalidPhone(value)){
        callback(new Error('请输入正确的手机号'))
      }else{
        callback();
      }
    }

    var checkLogPass=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请输入密码'))
      }else{
        callback();
      }
    }

    return {
      activeIndex: '1',
      dialogFormVisible: false,
      dialogFormVisible1: false,
      formLabelWidth: '14%',
      labelPosition: 'left',
      labelPosition1: 'left',
      Need2Login: true,
      user: {
        username: '',
        password: ''
      },
      rules:{
        username:[
          {validator:checkPhoneNum,trigger:'change'}
        ],
        password:[
          {validator:checkLogPass,trigger:'change'}
        ]
      },
      mine: [{path: '', text: '个人中心'},
        {path: '/MyResume', text: '我的简历'},
        {path: '/MyJobApplication', text: '我的应聘', messageNum: 3}]
    }
  },
  beforeMount () {
    const token = document.cookie.split(';')[0]
    console.log(token)
    if (token) {
      this.$axios.defaults.headers.Authorization = token
      this.$data.Need2Login = false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout() {
      this.$data.Need2Login = true
      delete this.$axios.defaults.headers['Authorization']
      document.cookie = ''
      this.$message({
        message: '注销成功，已返回首页，请重新登录',
        type: 'success'
      })
      this.$router.push('/')
    },
    login (formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid){
          let _this = this
          this.$axios({
            method: 'post',
            url: '/login',
            data: this.$qs.stringify(this.$data.user)
          }).then(function (response) {
            console.log(response.data.data)
            switch (response.data.code) {
              case 200:
                const token = response.data.data
                _this.$axios.defaults.headers.Authorization = token
                _this.$data.Need2Login = false
                _this.$data.dialogFormVisible1 = false
                document.cookie = token
                _this.$message({
                  message: '登陆成功',
                  type: 'success'
                })
                break
              case 500:
                _this.$message({
                  message: '用户名或密码错误，请重试',
                  type: 'warning'
                })
                _this.$data.user.password = ''
                break
              case 401:
                break
            }
          }).catch(function(error){
            console.log(error)
            _this.$message({
              message: '用户名或密码错误，请重试',
              type: 'warning'
            })
          })
        }
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #XhwlHeader {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;

    .el-button{
      background: #f6f6f6;
    }
    .el-button--primary{
      background:#1476C1;
      border: none;
    }

    .el-button--text{
      color:#222222;
    }
    .el-dropdown-menu__item{
      letter-spacing: 2.5px;
    }
  }

</style>
