<template>
  <div id="app">
    <el-container>
      <el-header>
        <XhwlHeader></XhwlHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <div class="footer">
        <div class="wrap">
          <ul class="friend-link">
            <li><a href="//www.jd.com" target="_blank">兴海物联
              官方网站</a></li>
            <li>|</li>
            <li><a href="//zhaopin.jd.com" target="_blank">中建集团</a></li>
            <li>|</li>
            <li><a href="//xiaoyuan.jd.com" target="_blank">校园团队</a></li>
          </ul>
        </div>
      </div>
        <span class="copyright" style="margin:0 auto;display: block">Copyright © 2004-2015  兴海物联 版权所有</span>
    </el-container>
  </div>
</template>

<script>
import XhwlHeader from './components/XhwlHeader.vue'
import XhwlFooter from './components/XhwlFooter.vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  data () {
    return {
      input3: '',
      value3: '',
      postChosen: '',
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
  methods: {},
  components: {XhwlHeader,
    XhwlFooter,
    Home}
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
