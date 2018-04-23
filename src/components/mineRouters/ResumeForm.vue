<template>
  <div id="ResumeForm" style="width: 70%;min-width: 1200px;margin:0% auto;border-top: solid 1px #e6e6e6" class="animated bounceInLeft">
    <div style="margin:0 auto;text-align: center">
      <el-radio-group v-model="resumes_form" size="large">
        <el-radio class="radio4forms" label="1" border isText style="margin-top: 20px" @click="changeType(1)">校园招聘简历</el-radio>
        <el-radio class="radio4forms" label="2" border isText @click="changeType(2)">社会招聘简历</el-radio>
        <el-radio class="radio4forms" label="3" border isText @click="changeType(3)">实习招聘简历</el-radio>
      </el-radio-group>
      <div style=" width:640px;margin:0 auto">
      <transition >
      <h3 v-if="resumes_form==1" style="text-align: left">校园招聘简历只能投递校园招聘职位</h3>
      <h3 v-else-if="resumes_form==2">社会招聘简历只能投递社会招聘职位</h3>
      <h3 v-else  style="text-align: right">实习招聘简历只能投递实习职位</h3>
      </transition>
      </div>
    </div>
    <el-row class="tac" style="margin-top: 20px;">
      <el-col :span="4">
        <div style="height:0px">
        </div>
    <el-menu
      :default-active="formNow"
      @select="handleSelect"
      background-color="#ffffff"
      text-color="#444444"
      active-text-color="#ffffff"
      active-background-color="#1476C1"
      class="el-menu-vertical-demo"
      :router="true"
      >
      <el-menu-item  class="item4forms" v-for="item in forms"
                     v-bind:key="item.index" :index="item.index" :route="'/ResumeForm/'+item.index">
        <template slot="title">
          <i class="img4forms icon iconfont " :class="'icon-'+item.iconName"></i>
          <span style="font-size: 20px;margin-left: 15px">{{item.name}}</span>
          <img v-if="item.isNecessary" src="../../../static/img/necessary.png" class="img4forms" style="margin-left: 15px">
        </template>
      </el-menu-item>
      <div style="width: 100%;text-align: center;margin-top: 20%;margin-left: 4px">
      <el-button class="button4details" @click="details()">预览简历</el-button>
      </div>
    </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="width: 100%;min-height: 700px;margin:0 -1px; background: #ffffff;border: solid 1px #e6e6e6" >
          <router-view ></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'ResumeForm',
  created () {
    console.log(this.$route.params)
    this.$data.resumes_form = this.$route.params.resumes_form_selected
    this.$router.push('/ResumeForm/1')
  },
  data () {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
      formNow: '1',
      resumes_form: '1',
      forms: [
        {index: '1', name: '个人信息', iconName: 'gerenxinxi', isNecessary: true},
        {index: '2', name: '教育经历', iconName: 'jiaoyujingli', isNecessary: true},
        {index: '3', name: '培训经历', iconName: 'peixunjingli', isNecessary: false},
        {index: '4', name: '项目经历', iconName: 'xiangmujingli', isNecessary: true},
        {index: '5', name: '工作经历', iconName: 'gongzuojingli', isNecessary: false},
        {index: '6', name: '实习经历', iconName: 'shixijingli', isNecessary: false},
        {index: '7', name: '奖励活动', iconName: 'jianglihuodong', isNecessary: false},
        {index: '8', name: '求职意向', iconName: 'qiuzhiyixiang', isNecessary: true},
        {index: '9', name: '自我评价', iconName: 'ziwopingjia', isNecessary: true},
        {index: '10', name: '上传附件', iconName: 'shangchuanfujian', isNecessary: true}
      ],
      items: [
        {text: '展示示例一'},
        {text: '展示示例二'},
        {text: '展示示例三'},
        {text: '展示示例四'}
      ],
      places: [
        {text: '深圳'},
        {text: '全部'}
      ],
      classes: [
        {text: '研发'},
        {text: '设计'},
        {text: '产品'},
        {text: '全部'}
      ],
      posts: [
        {text: '校园招聘'},
        {text: '社会招聘'},
        {text: '实习生招聘'}
      ]

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$data.formNow = key

    },
    changeType() {

    },
    details () {
      this.$router.push({ path: '/ResumeDetails'})
    }
  }
}
</script>
<style lang="less">
  #ResumeForm {
    .iconfont{
      font-size:30px
    }
    .button4details{
      border: solid 2px #E01B2F;
      height:50px;
      font-size: 20px;
      width: 70%;
      color: #E01B2F;
      border-radius: 50px;
      &:hover{
        color:#ffffff;
        background:#E01B2F;
      }
    }
  }
</style>
