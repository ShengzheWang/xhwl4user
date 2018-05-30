<template>
  <div id="ResumeForm" style="width: 70%;min-width: 1200px;margin:0% auto;" class="animated bounceInLeft">
    <div style="margin:0 auto;text-align: center;;height: auto">
      <img style="width: 150%;margin-left: -22.5%; -webkit-filter: brightness(0.3);z-index: 1;
    -moz-filter: brightness(0.5);
    -o-filter: brightness(0.5);
    -ms-filter: brightness(0.5);
    filter: brightness(0.5);height: auto" :src="'../../../static/img/resume-'+resumes_form+'.png'"/>
      <el-radio-group v-model="resumes_form" size="large" @change="changeType" style="margin-top: -33%;height: 100%">
        <el-radio class="radio4forms" label="1" border isText style="margin-top: 20px">校园招聘简历</el-radio>
        <el-radio class="radio4forms" label="2" border isText >社会招聘简历</el-radio>
        <el-radio class="radio4forms" label="3" border isText >实习招聘简历</el-radio>
      </el-radio-group>
      <div style="position: absolute;top:200px;text-align: center;width: 100%">
      <div style=" width:650px;position:absolute;left:50%;margin-left: -330px;">
      <h3 v-if="resumes_form==1" style="text-align: left;color: #ffffff;font-weight: normal;">校园招聘简历只能投递校园招聘职位</h3>
      <h3 v-else-if="resumes_form==2" style="color: #ffffff;font-weight: normal">社会招聘简历只能投递社会招聘职位</h3>
      <h3 v-else  style="text-align: right;color: #ffffff;font-weight: normal">实习招聘简历只能投递实习职位</h3>
      </div></div>
    </div>
    <el-row class="tac" style="margin-top: 5%;">
      <el-col :span="4">
        <div style="height:0px">
        </div>
    <el-menu
      :default-active="formNow"
      @select="handleSelect"
      text-color="#ffffff"
      background-color="#001C31"
      active-text-color='#ffffff'
      active-background-color="#1476BF"
      class="el-menu-vertical-demo"
      :router="true"
      style="background: #ffffff"

      >
      <el-menu-item  class="item4forms" v-for="item in forms"
                     v-bind:key="item.index" :index="item.index" :route="'/ResumeForm/'+item.index">
        <template slot="title">
          <i class="img4forms icon iconfont " :class="'icon-'+item.iconName"></i>
          <span style="font-size: 20px;margin-left: 15px">{{item.name}}</span>
          <i v-if="item.isNecessary"  class="img4forms icon iconfont icon-xinghao" style="margin-left: 15px;font-size: 16px"></i>
        </template>
      </el-menu-item>
      <div class="needMarginBorder" style="width: 80%"></div>
      <div style="width: 100%;text-align: center;margin-top: 10%">
      <el-button class="button4details" @click="details()">预览简历</el-button>
      </div>
    </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="width: 100%;min-height: 820px;margin-left:2%; background: #ffffff;" >
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
    this.$data.resumes_form = this.$route.query.resumes_form_selected
    this.$router.push('/ResumeForm/1')
    let _this=this;
    this.$axios({
      method:'get',
      url:'/resume'
    }).then(function (response) {
      _this.$data.resumes_form=response.data.resumesForm.toString();
    })
  },
  watch: {
    '$route.path': 'changeActive'
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
        {index: '4', name: '项目经历', iconName: 'xiangmujingli', isNecessary: false},
        {index: '5', name: '工作经历', iconName: 'gongzuojingli', isNecessary: false},
        {index: '6', name: '实习经历', iconName: 'shixijingli', isNecessary: false},
        {index: '7', name: '奖励活动', iconName: 'jianglihuodong', isNecessary: false},
        {index: '8', name: '求职意向', iconName: 'qiuzhiyixiang', isNecessary: true},
        {index: '9', name: '自我评价', iconName: 'ziwopingjia', isNecessary: false},
        {index: 'a', name: '上传附件', iconName: 'shangchuanfujian', isNecessary: false}
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
    changeActive () {
      const str = this.$route.path
      this.$data.formNow = str.charAt(str.length - 1)
    },
    handleSelect (key, keyPath) {
    },
    changeType(whichOne) {
      let _this = this
      this.$axios({
        method: 'put',
        url: '/resumesForm/' + whichOne
      }).then(function (response) {
        _this.$message({
          message: '更改简历类型成功',
          type: 'success'
        })
      })
    },
    details () {
      this.$router.push({ path: '/ResumeDetails'})
    }
  }
}
</script>
<style lang="less">
  #ResumeForm {
    .el-menu-item, .el-submenu__title{
      line-height: 1.4;
    }
    .item4forms {
      background: #ffffff !important;
      height: 70px !important;
      text-align: left;
      color:#7c7c7c!important;
      width: 100%;
      transition: all 0.1s;
      box-sizing: border-box;
      z-index: 0;
      line-height: 70px;
      i{
        color: inherit;
      }
    }

    .item4forms:hover {
      background:#37BCFD !important;
      color: #ffffff !important;

    }
    .item4forms.is-active {
      background:#37BCFD !important;
      color: #ffffff !important;
      width: 113%;
      box-sizing: border-box;
    }
    .iconfont{
      font-size:30px
    }
    .el-button--primary{
      font-size: 16px;
    }
    .el-button--info{
      font-size: 16px;
    }
    .button4forms{
      background: #E01B2F;
      border: 1px solid #E01B2F;
      /* 保存并进行下一步: */
      font-family: MicrosoftYaHei-Bold;
      color: #FFFFFF;
      letter-spacing: 2px;
      font-size: 20px;

    }
    .button4forms:hover {
      background: #37BCFD;
      border: 1px solid #E01B2F;
      /* 保存并进行下一步: */
      font-family: MicrosoftYaHei-Bold;
      color: #FFFFFF;
    }
    .button4details{
      border: none;
      height:50px;
      font-size: 20px;
      transition: all 0.3s;
      margin-bottom: 20px;
      &:hover{
        transform: scale(1.05);
        background: #ffffff !important;
        color:#37BCFD
      }
    }
  }
</style>
