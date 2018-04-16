<template>
  <div id="Xhwlheader" style="height:50px">

      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               :router='true'
               text-color="#444444"
               background-color="#f6f6f6"
               active-text-color='#1476C1'
               active-background-color="#f6f6f6"
               style="width:598px;margin:0 auto;top:-40px;height:120px">

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
    <div style="position:absolute;top: 30px;right: 10%" v-if="Need2Login">
      <div>
        <el-button plain @click="dialogFormVisible = true" class="button4plain"
                   style="">注册</el-button>
        <el-button plain @click="dialogFormVisible1 = true" class="button4plain"
                   style="">登录</el-button>
      </div>
    </div>
      <div style="position:absolute;top: 30px;right:10%" v-else>
      <el-dropdown >
        <el-badge :value="mine[2].messageNum" class="item">
      <el-button  type="text" ><img
        src="../../static/Default.png"><i class="el-icon-arrow-down el-icon--right"></i></el-button>
        </el-badge>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item v-for="item in mine">
            <router-link style="color: #333333" :to="item.path">
              <el-badge :value="item.messageNum" class="item">
              {{item.text}}
              </el-badge>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="text" @click="Need2Login=true">注销</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <a style="position: absolute;top: 25px;left:5%;font-size: 32px;"><img
        src="../assets/logoMain.png" style="height:auto;width: 100%"></a>

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
      <el-form :label-position="labelPosition1" label-width="60px">
        <el-form-item label="手机号">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="login();">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'XhwlHeader',
  data () {
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
      mine: [{path: '', text: '个人中心'},
        {path: '/MyResume', text: '我的简历'},
        {path: '/MyJobApplication', text: '我的应聘', messageNum: 3}]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    login () {
      let _this = this
      this.$axios({
        method: 'post',
        url: '/login',
        data: this.$qs.stringify({
          username: this.$data.user.username,
          password: this.$data.user.password
        })
      }).then(function (response) {
        console.log(response.data.data)
        switch (response.data.code ) {
          case 200:
            const token = response.data.data
            _this.$axios.defaults.headers.Authorization = token
            _this.$data.Need2Login = false
            _this.$data.dialogFormVisible1 = false
            break
          case 500:
            break
          case 401:
            break
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
