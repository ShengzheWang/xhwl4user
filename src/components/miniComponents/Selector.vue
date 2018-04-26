<template>
  <div id="Selector" class="animated fadeIn">

    <el-input placeholder="立即搜索" v-model="input3" style="font-size: 17px;height: 60px;margin-left: 5px">
      <el-button slot="append"><img src="../../../static/img/search.png"> </el-button>
    </el-input>

<div style="margin-top: 3%;margin-left:2%;animation-delay:0.2s" >
  <h3 style="display: inline;margin-right: 3%">工作地点</h3>

  <el-radio-group v-model="placeChosen" text-color="#ffffff" fill="#1476C1">
    <el-radio-button v-for="item in places"  :label="item.text" :key="item.value"></el-radio-button>
  </el-radio-group>

</div>
<div style="margin-top: 2%;margin-left:2%;animation-delay:0.4s"  >
  <h3 style="display: inline;margin-right: 3%">职位类型</h3>
  <el-radio-group v-model="classChosen" text-color="#ffffff" fill="#1476C1">
    <el-radio-button v-for="item in classes" :label="item.text" :key="item.value"></el-radio-button>
  </el-radio-group>
</div>
<div style="margin-top: 2%;margin-left:2%;animation-delay:0.6s" >
  <h3 style="display: inline;margin-right: 3%">招聘类型</h3>
  <el-radio-group v-model="postChosen" text-color="#ffffff" fill="#1476C1">
    <el-radio-button v-for="item in posts" :label="item.text" :key="item.value"></el-radio-button>
  </el-radio-group>
</div>
</div>
</template>

<script>
export default {
  name: 'Selector',
  props: {
    resumeForm: ''
  },
  data () {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
      input3: '',
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
  created () {
    console.log(this.$props.resumeForm)
    this.$data.placeChosen = '全部'
    this.$data.postChosen = this.$props.resumeForm==='1'?'校园招聘':this.$props.resumeForm==='2'?'社会招聘':'实习生招聘'
  },
  methods: {

  }
}
</script>
<style lang="less">
   #Selector{
     font-size: 15px;
     .el-input__inner{
       border:4px solid #1476C1;
       border-radius:100px 0 0 100px;
       height: 60px;
     }
     .el-input-group__append{
       border:1px solid #1476C1;
       border-radius:0px 100px 100px 0;
       background: #1476C1;
     }
   }
</style>
