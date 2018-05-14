<template>
  <div id="Xhwlheader"
       style="width:100%;min-width:1100px;opacity:0.90;height:80px;border-bottom: solid 1px #dddddd;
       background: #ffffff;z-index:1" >
    <div class=""></div>
    <div style="display: inline-block;width: 26%;height: 8px;text-align: center;" class="animated fadeInDown">
      <div style="display: inline-block;margin-top: 3%">
       <img
        src="../../static/img/logoMain.png" style="height:50px;width: auto;">
      </div>
    </div>
     <div style="display: inline-block;width: 48%;text-align: center;height: 60px" class="animated fadeInDown">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               :router='true'
               text-color="#444444"
               background-color="#ffffff"
               active-text-color='#1476C1'
               active-background-color="#ffffff"
               style="width:570px;margin:0 auto;height:58px;display: inline-block;font-size: 18px">

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
    <div style="width:25%;display: inline-block;height: 120px;text-align: center;vertical-align: middle" v-if="Need2Login" class="animated fadeInDown">
      <div style="margin: 21px auto">
        <el-button plain @click="dialogFormVisible1 = true; State = false" class="button4plain"
                   style="">注册</el-button>
        <el-button plain @click="dialogFormVisible1 = true; State = true" class="button4plain"
                   style="">登录</el-button>
      </div>
    </div>

      <div style="width:25%;display:inline-block;height: 90px;text-align: center;vertical-align: top;font-size: 14px" class="animated fadeInDown" v-else>
        <div style="margin-top:14px;">
      <el-dropdown >
        <el-badge  style="font-size: 8px" :value="mine[2].messageNum" class="item">
      <el-button  type="text" ><img
        src="../../static/img/Default.png" style="width: 24px;"><i class="el-icon-arrow-down el-icon--right"></i></el-button>
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

    <el-dialog  class="form4login" :visible.sync="dialogFormVisible1" style="margin:auto auto;width: 1000px"
                :modal-append-to-body="false"  :append-to-body="true" :lock-scroll="false">
      <el-collapse-transition>
        <div v-show="State">
      <el-form :label-position="labelPosition1"  :model="user" ref="user" :rules="rules" style="width: 80%;margin: 3% auto" :status-icon="true">
        <el-form-item  prop="username" class="item4login">
          <el-input v-model="user.username" placeholder="请输入手机号" prefix-icon="iconfont icon-shoujihao icon4form" ></el-input>
        </el-form-item>
        <el-form-item  prop="password" class="item4login">
          <el-input v-model="user.password" type="password"  placeholder="请输入密码" prefix-icon="iconfont icon-mima icon4form"></el-input>
        </el-form-item>
        <div style="width: 100%;text-align: right">
        <el-button type="text" @click="dialogFormVisible2 = true">忘记密码？</el-button>
        </div>
      </el-form>
        </div>
      </el-collapse-transition>
        <el-collapse-transition>
          <div v-show="!State">
            <el-form :label-position="labelPosition1"  :model="user0" ref="user0"  style="width: 80%;margin: 3% auto" :status-icon="true" :rules="rules0">
              <el-form-item  prop="username" class="item4login">
                <el-input v-model="user0.username" placeholder="请输入手机号" prefix-icon="iconfont icon-shoujihao icon4form" ></el-input>
              </el-form-item>
              <el-form-item  prop="password" class="item4login" >
                <el-input v-model="user0.password" type="password"  placeholder="请输入密码" prefix-icon="iconfont icon-mima icon4form"></el-input>
              </el-form-item>
            <el-form-item  prop="passwordRepeat" class="item4login">
              <el-input v-model="user0.passwordRepeat" type="password"  placeholder="请重复密码" prefix-icon="iconfont icon-querenmima icon4form"></el-input>
            </el-form-item>
              <el-form-item  prop="identifyingCode" class="item4login">
                <el-input v-model="user0.identifyingCode"  placeholder="请输入验证码" prefix-icon="iconfont icon-yanzhengma icon4form">
                  <el-button slot="append" >
                    <span v-show="timeShow" @click="getPhoneMessage('user0')">获取验证码</span>
                    <span v-show="!timeShow" class="count">{{timeCount}} s</span>
                  </el-button>
                </el-input>
              </el-form-item>
              <el-tooltip placement="right" effect="light">
                <div slot="content">
                  <div style="height: 200px;width: 400px;text-align: center;vertical-align: middle">
                    <img :src="indentifyingImg" style="height: 150px;display: inline-block;margin:25px 50px">
                  </div>
                </div>
                <el-form-item class="item4login" style="text-align: right">
                  <img :src="indentifyingImg" style="height: 48px">
                  <el-button icon="el-icon-refresh" type="text" @click="refreshImg()"></el-button>
                </el-form-item>
              </el-tooltip>
              <el-form-item  prop="telephoneIdentifyingCode" class="item4login">
                <el-input v-model="user0.telephoneIdentifyingCode"  placeholder="请输入手机验证码" prefix-icon="iconfont icon-guanbi icon4form"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-transition>
      <div class="foot4login" style="margin: 3% auto;width: 80%">
        <el-button v-bind:class="'button4login now'+(State == true?'Login':'Register')+'-register'" @click="Register('user0')">注册</el-button>
        <el-button v-bind:class="'button4login now'+(State == true?'Login':'Register')+'-login'" @click="login('user');">登录</el-button>
      </div>
    </el-dialog>


    <el-dialog  class="form4login" :visible.sync="dialogFormVisible2" style="margin:auto auto;width: 1000px"
                :modal-append-to-body="false"  :append-to-body="true" :lock-scroll="false">
          <el-form :label-position="labelPosition1"  :model="user0" ref="user0"  style="width: 80%;margin: 3% auto" :status-icon="true" :rules="rules0">
            <el-form-item  prop="username" class="item4login">
              <el-input v-model="user0.username" placeholder="请输入手机号" prefix-icon="iconfont icon-shoujihao icon4form" ></el-input>
            </el-form-item>
            <el-form-item  prop="password" class="item4login" >
              <el-input v-model="user0.password" type="password"  placeholder="请输入新密码" prefix-icon="iconfont icon-mima icon4form"></el-input>
            </el-form-item>
            <el-form-item  prop="passwordRepeat" class="item4login">
              <el-input v-model="user0.passwordRepeat" type="password"  placeholder="请重复新密码" prefix-icon="iconfont icon-querenmima icon4form"></el-input>
            </el-form-item>
            <el-form-item  prop="identifyingCode" class="item4login">
              <el-input v-model="user0.identifyingCode"  placeholder="请输入验证码" prefix-icon="iconfont icon-yanzhengma icon4form">
                <el-button slot="append" >
                  <span v-show="timeShow" @click="getPhoneMessage('user0')">获取验证码</span>
                  <span v-show="!timeShow" class="count">{{timeCount}} s</span>
                </el-button>
              </el-input>
            </el-form-item>
            <el-tooltip placement="right" effect="light">
              <div slot="content">
                <div style="height: 200px;width: 400px;text-align: center;vertical-align: middle">
                  <img :src="indentifyingImg" style="height: 150px;display: inline-block;margin:25px 50px">
                </div>
              </div>
              <el-form-item class="item4login" style="text-align: right">
                <img :src="indentifyingImg" style="height: 48px">
                <el-button icon="el-icon-refresh" type="text" @click="refreshImg()"></el-button>
              </el-form-item>
            </el-tooltip>
            <el-form-item  prop="telephoneIdentifyingCode" class="item4login">
              <el-input v-model="user0.telephoneIdentifyingCode"  placeholder="请输入手机验证码" prefix-icon="iconfont icon-guanbi icon4form"></el-input>
            </el-form-item>
          </el-form>
      <div class="foot4login" style="margin: 3% auto;width: 80%">
        <el-button v-bind:class="'button4login nowLogin-register'" @click="dialogFormVisible2 = false">取消</el-button>
        <el-button v-bind:class="'button4login nowLogin-login'" @click="Reset('user0');">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {isvalidPhone} from "../util/Validate";
export default {
  name: 'XhwlHeader',
  watch: {
    $route(to, from) {
      switch(to.path){
        case '/':
          break
        case '/Social':
          break
        case '/Campus':
          break
        case '/Trainee':
          break
        case '/Campus/Post':
          break
        case '/Campus/Procedure':
          break
        case '/Campus/Plan':
          break
        case '/AboutUs':
          break
        default:
          this.$data.activeIndex = ''
//        <el-menu-item index="1" style="border: none" route="/" class="item4menu">首页</el-menu-item>
//          <el-menu-item index="2" style="border: none" route="/Social" class="item4menu">社会招聘</el-menu-item>
//          <el-submenu index="3" style="border: none" mode="horizontal" class="item4menu">
//          <template style="border: none" slot="title">校园招聘</template>
//          <el-menu-item index="3-1" style="border: none" route="/Campus/Post">校招职位</el-menu-item>
//          <el-menu-item index="3-2" style="border: none" route="/Campus/Procedure">招聘流程</el-menu-item>
//          <el-menu-item index="3-3" style="border: none" route="/Campus/Plan">培养计划</el-menu-item>
//          </el-submenu>
//          <el-menu-item index="4" style="border: none" route="/Trainee" class="item4menu">实习生招聘</el-menu-item>
//          <el-menu-item index="5" style="border: none" route="/AboutUs" class="item4menu">关于兴海物联</el-menu-item>
      }
    }
  },
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

    var checkLogPassRepeat=(rule,value,callback)=>{
      if(!value){
        callback(new Error('请再次输入密码'));
      }else if(this.$data.user0.password!==value){
        callback(new Error('两次密码输入不一致'));
      }else{
        callback();
      }
    }


    return {
      timeCount:'',
      timeShow:true,
      timer:null,
      formRes:'',
      activeIndex: '1',
      State: true,
      dialogFormVisible2: false,
      dialogFormVisible1: false,
      formLabelWidth: '14%',
      labelPosition: 'left',
      labelPosition1: 'left',
      Need2Login: true,
      headerWidth:0,
      indentifyingImg: '',
      uuid:'',
      user: {
        username: '',
        password: ''
      },
      formSend:{
        username:'',
        captcha:'',
        uuid:''
      },
      user0: {
        username: '',
        password: '',
        passwordRepeat: '',
        identifyingCode: '',
        telephoneIdentifyingCode: ''
      },
      rules:{
        username:[
          {validator:checkPhoneNum,trigger:'change'}
        ],
        password:[
          {validator:checkLogPass,trigger:'change'}
        ],
      },
      rules0:{
        username:[
          {validator:checkPhoneNum,trigger:'change'}
        ],
        password:[
          {validator:checkLogPass,trigger:'change'},
          {min:6,max:18,message:'密码应在6-18位间',trigger:'change'}
        ],
        passwordRepeat:[
          {validator:checkLogPassRepeat,trigger:'blur'}
        ]
      },
      mine: [{path: '', text: '个人中心'},
        {path: '/MyResume', text: '我的简历'},
        {path: '/MyJobApplication', text: '我的应聘', messageNum: 0}]
    }
  },
  beforeMount () {
    const token = document.cookie.split(';')[0]
    console.log(token)
    let _this = this
    if (token) {
      this.$axios.defaults.headers.Authorization = token
      this.$axios({
        method: 'get',
        url: '/tokenCheck',
      }).then(function (response) {
        _this.$message('欢迎回来')
        _this.$data.Need2Login = false
        _this.$axios({
          method: 'get',
          url: '/deliver'
        }).then(function (response) {
          _this.$nextTick(() => {
            _this.$data.mine[2].messageNum = response.data.length
            console.log(_this.$data.mine[2].messageNum)
          })
        })
      }).catch(function(error) {
        _this.$message('用户凭证已过期，请重新登陆')
        delete _this.$axios.defaults.headers['Authorization']
        document.cookie = ''
        _this.$data.Need2Login = true
        _this.$router.push('/')
      })
    }
    this.$axios({
      method: 'get',
      url: '/createPictureCaptcha'
    }).then(function (response) {
      console.log(_this.$data.indentifyingImg)
      _this.$data.indentifyingImg = 'data:image/png;base64,'+response.data.picture
      _this.$data.uuid=response.data.uuid;
    }).catch(function(error) {
    })
  },
  methods: {
    getPhoneMessage(formName){  //获取短信验证码前验证手机号等是否已填
      let flag=false;
      const TIME_COUNT = 60;    //验证码获取时间间隔
      this.$refs[formName].validate((valid)=>{
        if(valid){

          this.$data.formSend.captcha=this.$data.user0.identifyingCode;
          this.$data.formSend.uuid=this.$data.uuid;
          this.$data.formSend.username=this.$data.user0.username;
          let _this=this;
          this.$axios({
            method:'post',
            url:'/createPhoneCaptcha',
            data:_this.$qs.stringify(_this.$data.formSend)
          }).then(function (response) {
            _this.$message({
              type:'success',
              message:'验证码已成功发送！请留意手机短信'
            })
            flag=true;
            if (!_this.timer) {
              _this.timeCount = TIME_COUNT;
              _this.timeShow = false;
              _this.timer = setInterval(() => {
                if (_this.timeCount > 0 && _this.timeCount <= TIME_COUNT) {
                  _this.timeCount--;
                } else {
                  _this.timeShow = true;
                  clearInterval(_this.timer);
                  _this.timer = null;
                }
              }, 1000)
            }
          }).catch(function (error) {
            console.log(error);
            _this.$message({
              type:'error',
              message:'验证码输入出问题了哦'
            })
          })
        }
      })
      console.log(flag);
        this.refreshImg();

    },
    refreshImg(){           //刷新图形验证码
      let _this = this
      this.$axios({
        method: 'get',
        url: '/createPictureCaptcha'
      }).then(function (response) {
        console.log(_this.$data.indentifyingImg)
        _this.$data.indentifyingImg = 'data:image/png;base64,'+response.data.picture

        _this.$data.uuid=response.data.uuid;

      }).catch(function(error) {
      })
    },
    Register(formName){     //注册
      if(this.$data.State) {
        this.$data.State = !this.$data.State
        return
      }
      this.$refs[formName].validate((valid)=>{
        if(valid){
          if(this.$data.State) {
            this.$data.State = !this.$data.State
          }

          let _this=this;
          this.$axios({
            method:'post',
            url:'/register',
            data:_this.$qs.stringify({
              username:_this.$data.user0.username,
              password:_this.$data.user0.password,
              phoneCaptcha:_this.$data.user0.telephoneIdentifyingCode,
            })
          }).then(function (response) {
              _this.$message({
                type:'success',
                message:'注册成功！'
              })
            _this.$data.State=!_this.$data.State;
            _this.$data.user.username = _this.$data.user0.username
            _this.$data.user.password = _this.$data.user0.password
            _this.$data.user0.username='';
            _this.$data.user0.password='';
            _this.$data.user0.passwordRepeat='';
            _this.$data.user0.identifyingCode='';
            _this.$data.user0.telephoneIdentifyingCode='';
          }).catch(function (error) {
            _this.$message({
              type:'error',
              message:error.response.data.msg
            })
          })

        }
      })

    },
    Reset(formName){     //修改密码
      this.$refs[formName].validate((valid)=>{
        if(valid){

          let _this=this;
          this.$axios({
            method:'post',
            url:'/resetPassword',
            data:_this.$qs.stringify({
              username:_this.$data.user0.username,
              password:_this.$data.user0.password,
              phoneCaptcha:_this.$data.user0.telephoneIdentifyingCode,
            })
          }).then(function (response) {
            _this.$message({
              type:'success',
              message:'修改成功！'
            })
            _this.$data.State=true
            _this.$data.user.username = _this.$data.user0.username
            _this.$data.user.password = _this.$data.user0.password
            _this.$data.user0.username='';
            _this.$data.user0.password='';
            _this.$data.user0.passwordRepeat='';
            _this.$data.user0.identifyingCode='';
            _this.$data.user0.telephoneIdentifyingCode='';
            _this.$data.dialogFormVisible2 = false
          }).catch(function (error) {
            _this.$message({
              type:'error',
              message:error.response.data.msg
            })
          })

        }
      })

    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout() {                //注销
      this.$data.Need2Login = true
      delete this.$axios.defaults.headers['Authorization']
      document.cookie = ''
      this.$message({
        message: '注销成功，已返回首页，请重新登录',
        type: 'success'
      })
      this.$router.push('/')
    },
    login (formName) {        //登录
      if(!this.$data.State) {
        this.$data.State = !this.$data.State
        return
      }
      let _this = this

      this.$refs[formName].validate((valid)=>{
        if(valid){

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
                _this.$axios({
                  method: 'get',
                  url: '/deliver'
                }).then(function (response) {
                  _this.$nextTick(() => {
                    _this.$data.mine[2].messageNum = response.data.length
                    console.log(_this.$data.mine[2].messageNum)
                  })
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
  .form4login{
    .is-error{
      .icon4form{
        color:#f56c6c;
      }
    }
    .is-success{
      .icon4form{
        color:#67c23a;
      }
    }
    .el-input__inner{
      height:54px;
      padding-left:48px;
    }
    .el-input__prefix{
      height:54px;
      width: 48px;
    }
    .button4login{
      transition: all 0.2s;
      letter-spacing: 2px!important;
      border-radius: 46px!important;
      font-size: 20px!important;
    }
    .button4login{
      transition: all 0.2s;
      letter-spacing: 2px!important;
      border-radius: 46px!important;
      font-size: 20px!important;
    }
    .item4login{
      height:54px;
      transition: all 0.6s;
      &:hover {
        transform: scale(1.05);
      }
      &:focus {
        transform: scale(1.05);
      }
    }
    .nowLogin-login{
      margin-left: 3% !important;
      width: 65% !important;
      font-weight: 500;
      background: #E01B2F!important ;
      color:#ffffff  !important;
      border:solid 2px #E01B2F !important;
      &:hover {
        transform: scale(1.05);
        background: #E01B2F;
        color:#ffffff  ;
        border:solid 2px #E01B2F;
      }
    }
    .nowRegister-login{
      margin-left: 3% !important;
      width: 30% !important;
      background: #ffffff !important;
      color:#E01B2F !important ;
      border:solid 2px #E01B2F!important;
      font-weight: 500;
      &:hover {
        transform: scale(1.05);
        background: #E01B2F!important;;
        color:#ffffff!important;  ;
        border:solid 2px #E01B2F!important;;
      }
    }
    .nowLogin-register{
      margin-left: 0 !important;
      width: 30% !important;
      background: #ffffff !important;
      color:#a4a4a4 !important ;
      border:solid 2px #a4a4a4 !important;
      font-weight: 500;
      &:hover {
        transform: scale(1.05);
        background: #a4a4a4!important;;
        color:#ffffff !important; ;
        border:solid 2px #ffffff!important;;
      }
    }
    .nowRegister-register{
      margin-left: 0 !important;
      width: 65% !important;
      color:#ffffff  !important;
      border:solid 2px #a4a4a4 !important;
      background: #a4a4a4 !important;
      font-weight: 500;
      &:hover {
        transform: scale(1.05);
        color:#ffffff;
        border:solid 2px #a4a4a4;
        background: #a4a4a4;
      }
    }
  }
  .icon4form{
    color:#1476C1;
    font-size: 30px;
  }
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
  .el-menu--popup-bottom-start{
    .el-menu-item {
      &:hover {
        background: #ffffff !important;
        color: #1376BE !important;
      }
      &.is-active {
        color: #1A72B7 !important;
        font-weight: 600;
        background: #ffffff !important;
      }
    }
  }
  .el-badge__content {
    font-size: 8px;
  }
</style>
