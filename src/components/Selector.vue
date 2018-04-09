<template>
  <div id="Selector">

<el-input placeholder="请输入内容" v-model="input3" class="animated bounceInLeft" style="animation-delay:0s">
  <template slot="prepend">立即搜索</template>
  <el-button slot="append" icon="el-icon-search"></el-button>
</el-input>

<div style="margin-top: 3%;margin-left:2%;animation-delay:0.2s" class="animated bounceInLeft" >
  <h3 style="display: inline;margin-right: 3%">工作地点</h3>

  <el-radio-group v-model="placeChosen" >
    <el-radio v-for="item in places" border :label="item.text" :key="item.value"></el-radio>
  </el-radio-group>

</div>
<div style="margin-top: 2%;margin-left:2%;animation-delay:0.4s" class="animated bounceInLeft" >
  <h3 style="display: inline;margin-right: 3%">职位类型</h3>
  <el-radio-group v-model="classChosen" >
    <el-radio v-for="item in classes" border :label="item.text" :key="item.value"></el-radio>
  </el-radio-group>
</div>
<div style="margin-top: 2%;margin-left:2%;animation-delay:0.6s" class="animated bounceInLeft" >
  <h3 style="display: inline;margin-right: 3%">招聘类型</h3>
  <el-radio-group v-model="postChosen" >
    <el-radio v-for="item in posts" border :label="item.text" :key="item.value"></el-radio>
  </el-radio-group>
</div>
</div>
</template>

<script>
export default {
  name: 'Selector',
  data () {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
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
