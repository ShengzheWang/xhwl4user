<template>
  <div id="ResumeForm" style="width: 70%;margin:0% auto" class="animated bounceInLeft">
    <el-row class="tac">
      <el-col :span="4">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router="true"
      style="border: solid;border-color: #a4a4a4"
      >
      <el-menu-item  v-for="item in forms" v-bind:key="item.index" :index="item.index" :route="'/ResumeForm/'+item.index">
        <template slot="title">
          <img :src="'../../static/icon'+item.index+'.png'">
          <span style="font-size: 18px">{{item.name}}</span>
        </template>
      </el-menu-item>

    </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="width: 90%;min-height: 561px;margin:0 auto; background: #ffffff;border: solid;border-color: #a4a4a4" >
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
      forms: [
        {index: 1, name: '基本信息'},
        {index: 2, name: '教育经历'},
        {index: 3, name: '培训经历'},
        {index: 4, name: '项目经历'},
        {index: 5, name: '工作经历'},
        {index: 6, name: '实习经历'},
        {index: 7, name: '奖励活动'},
        {index: 8, name: '求职意向'},
        {index: 9, name: '自我评价'},
        {index: 10, name: '上传附件'}
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

  }
}
</script>
