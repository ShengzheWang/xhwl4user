<template>
  <div id="ResumeForm" style="width: 70%;margin:0% auto;border-top: solid 1px #e6e6e6" class="animated bounceInLeft">
    <div style="margin:0 auto;text-align: center">
      <el-radio-group v-model="resumes_form" size="large">
        <el-radio class="radio4forms" label="1" border style="margin-top: 20px">校园招聘简历</el-radio>
        <el-radio class="radio4forms" label="2" border >社会招聘简历</el-radio>
        <el-radio class="radio4forms" label="3" border >实习招聘简历</el-radio>
      </el-radio-group>
      <div style=" width:49%;margin:0 auto">
      <transition class="fade-in-linear-enter">
      <h3 v-if="resumes_form==1" style="text-align: left">校园招聘简历只能投递校园招聘职位</h3>
      <h3 v-else-if="resumes_form==2">社会招聘简历只能投递社会招聘职位</h3>
      <h3 v-else  style="text-align: right">实习招聘简历只能投递实习职位</h3>
      </transition>
      </div>
    </div>
    <el-row class="tac" style="margin-top: 20px">
      <el-col :span="4">
        <div style="height:0px">
        </div>
    <el-menu
      :default-active="formNow"
      @select="handleSelect"
      background-color="#f6f6f6"
      text-color="#444444"
      active-text-color="#ffffff"
      active-background-color="#1476C1"
      class="el-menu-vertical-demo"
      router="true"
      >
      <el-menu-item  class="item4forms" v-for="item in forms"
                     v-bind:key="item.index" :index="item.index" :route="'/ResumeForm/'+item.index">
        <template slot="title">
          <img :src="'../../static/icon'+item.index+'.png'" class="img4forms">
          <span style="font-size: 20px;margin-left: 15px">{{item.name}}</span>
          <img v-if="item.isNecessary" src="../assets/necessary.png" class="img4forms" style="margin-left: 15px">
        </template>
      </el-menu-item>

    </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="width: 100%;min-height: 560px;margin:0 -1px; background: #f6f6f6;border: solid 1px #e6e6e6" >
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
  data () {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
      formNow: '1',
      resumes_form: '',
      forms: [
        {index: '1', name: '基本信息', isNecessary: true},
        {index: '2', name: '教育经历', isNecessary: true},
        {index: '3', name: '培训经历', isNecessary: false},
        {index: '4', name: '项目经历', isNecessary: true},
        {index: '5', name: '工作经历', isNecessary: false},
        {index: '6', name: '实习经历', isNecessary: false},
        {index: '7', name: '奖励活动', isNecessary: false},
        {index: '8', name: '求职意向', isNecessary: true},
        {index: '9', name: '自我评价', isNecessary: true},
        {index: '10', name: '上传附件', isNecessary: true}
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

    }
  }
}
</script>
