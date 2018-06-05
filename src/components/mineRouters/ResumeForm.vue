<template>
<div id="ResumeForm" class="animated bounceInLeft">
  <div class="resume_type">
    <img :src="'../../../static/img/resume-'+resumes_form+'.png'" />
    <div class="select_type">
      <el-radio-group v-model="resumes_form" size="large" @change="changeType">
        <el-radio class="radio4forms" label="1" border isText>
          校园招聘简历
          <p v-show="resumes_form==1">校园招聘简历只能投递校园招聘职位</p>
        </el-radio>
        <el-radio class="radio4forms" label="2" border isText>
          社会招聘简历
          <p v-show="resumes_form==2">社会招聘简历只能投递社会招聘职位</p>
        </el-radio>
        <el-radio class="radio4forms" label="3" border isText>
          实习招聘简历
          <p v-show="resumes_form==3">实习招聘简历只能投递实习职位</p>
        </el-radio>
      </el-radio-group>
    </div>
  </div>
  <div class="resume_form">
    <el-row :gutter="20">
      <el-col :span="4" class="resume_form_menu">
        <el-menu :default-active="formNow" @select="handleSelect" text-color="#ffffff" background-color="#001C31" active-text-color='#ffffff' active-background-color="#1476BF" class="el-menu-vertical-demo" :router="true" style="background: #ffffff">
          <el-menu-item class="item4forms" v-for="item in forms" v-bind:key="item.index" :index="item.index" :route="'/ResumeForm/'+item.index">
            <template slot="title">
              <i class="img4forms icon iconfont " :class="'icon-'+item.iconName"></i>
              <span>{{item.name}}</span>
              <i v-if="item.isNecessary"  class="img4forms icon iconfont icon-xinghao"></i>
            </template>
          </el-menu-item>
          <div class="needMarginBorder" style="width: 80%"></div>
          <div class="preview_resume">
            <el-button class="button4details" @click="details()">预览简历</el-button>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="20" class="resume_form_info">
        <div class="resume_form_container">
          <router-view></router-view>
        </div>
      </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'ResumeForm',
  created() {
    console.log(this.$route.params)
    this.$data.resumes_form = this.$route.query.resumes_form_selected
    this.$router.push('/ResumeForm/1')
    let _this = this;
    this.$axios({
      method: 'get',
      url: '/resume'
    }).then(function(response) {
      _this.$data.resumes_form = response.data.resumesForm.toString();
    })
  },
  watch: {
    '$route.path': 'changeActive'
  },
  data() {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
      formNow: '1',
      resumes_form: '1',
      forms: [{
          index: '1',
          name: '个人信息',
          iconName: 'gerenxinxi',
          isNecessary: true
        },
        {
          index: '2',
          name: '教育经历',
          iconName: 'jiaoyujingli',
          isNecessary: true
        },
        {
          index: '3',
          name: '培训经历',
          iconName: 'peixunjingli',
          isNecessary: false
        },
        {
          index: '4',
          name: '项目经历',
          iconName: 'xiangmujingli',
          isNecessary: false
        },
        {
          index: '5',
          name: '工作经历',
          iconName: 'gongzuojingli',
          isNecessary: false
        },
        {
          index: '6',
          name: '实习经历',
          iconName: 'shixijingli',
          isNecessary: false
        },
        {
          index: '7',
          name: '奖励活动',
          iconName: 'jianglihuodong',
          isNecessary: false
        },
        {
          index: '8',
          name: '求职意向',
          iconName: 'qiuzhiyixiang',
          isNecessary: true
        },
        {
          index: '9',
          name: '自我评价',
          iconName: 'ziwopingjia',
          isNecessary: false
        },
        {
          index: 'a',
          name: '上传附件',
          iconName: 'shangchuanfujian',
          isNecessary: false
        }
      ],
      items: [{
          text: '展示示例一'
        },
        {
          text: '展示示例二'
        },
        {
          text: '展示示例三'
        },
        {
          text: '展示示例四'
        }
      ],
      places: [{
          text: '深圳'
        },
        {
          text: '全部'
        }
      ],
      classes: [{
          text: '研发'
        },
        {
          text: '设计'
        },
        {
          text: '产品'
        },
        {
          text: '全部'
        }
      ],
      posts: [{
          text: '校园招聘'
        },
        {
          text: '社会招聘'
        },
        {
          text: '实习生招聘'
        }
      ]

    }
  },
  methods: {
    changeActive() {
      const str = this.$route.path
      this.$data.formNow = str.charAt(str.length - 1)
    },
    handleSelect(key, keyPath) {},
    changeType(whichOne) {
      let _this = this
      this.$axios({
        method: 'put',
        url: '/resumesForm/' + whichOne
      }).then(function(response) {
        _this.$message({
          message: '更改简历类型成功',
          type: 'success'
        })
      })
    },
    details() {
      this.$router.push({
        path: '/ResumeDetails'
      })
    }
  }
}
</script>
<style lang="scss">
@import "src/styles/mixin.scss";
  #ResumeForm {
    width: 100%;
    .resume_type{
      margin:0 auto;
      text-align: center;
      width: 100%;
      height: 270px;
      position:relative;
      img {
        width: 100%;
        height:270px;
        @include filter(brightness(0.5));
        z-index: 1;
      }
      .select_type{
        position:absolute;
        top: 0%;
        left: 0%;
        right: 0%;
        height:100px;
        margin-top: 100px;
        .el-radio__input.is-checked+.el-radio__label{
          color: #ffffff;
        }
        .el-radio-group {
          .el-radio {
            width: 176px;
            height: 48px;
            line-height: 48px;
            padding: 0;
            .el-radio__inner {
              display: none;
            }
            .el-radio__label {
              padding: 0!important;
              p {
                position: absolute;
                width: 50px;
                margin-left: -25px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .resume_form {
      width: 70%;
      min-width: 1200px;
      margin:0 auto;
      margin-top: 46px;
      .resume_form_menu{
        ul {
          padding: 16px 0;
        }
        .el-menu-item, .el-submenu__title{
          line-height: 1.4;
          span {
            font-size: 20px;
            margin-left: 15px;
          }
          i.icon-xinghao {
            margin-left: 8px;
            font-size: 16px
          }
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
          @include borderRadius(0px);
        }
        .item4forms.is-active {
          background:#37BCFD !important;
          color: #ffffff !important;
          @include borderRadius(0px);
          width: 110%;
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
        .preview_resume {
          width: 100%;
          text-align: center;
          margin-top: 10%;
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
      }
      .resume_form_info{
        border: 1px solid #f5f5f5;
        .resume_form_container {
          width: 100%;
          min-height: 820px;
          background: #ffffff;
        }
      }
    }
  }
</style>
