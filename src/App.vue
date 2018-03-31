<template>
  <div id="app">
    <el-container>
      <el-header style="height: 0px">
      <XhwlHeader></XhwlHeader>
      </el-header>

      <el-main>


        <template>
          <div class="block">

            <el-carousel height="450pt" width="100%">
              <el-carousel-item v-for="item in items" :key="item.value">
                <h1 style="margin: 10% 49%;">{{ item.text }}</h1>
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
        <!--<div class="show-rectangle">-->
        <!--<div class="show-rectangle-big" >5</div>-->
        <!--<div class="show-rectangle-nw">1</div>-->
        <!--<div class="show-rectangle-ne">2</div>-->
        <!--<div class="show-rectangle-sw">3</div>-->
        <!--<div class="show-rectangle-se">4</div>-->
        <!--</div>-->
        <div style="width: 40%;margin:3% auto">
          <el-input placeholder="请输入内容" v-model="input3">
            <template slot="prepend">关键字</template>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>

          <div style="margin-top: 4%;margin-left:2%">
            <h3 style="display: inline;margin-right: 3%">工作地点</h3>

            <el-button type="text" v-for="item in places" :key="item.value">{{item.text}}</el-button>

          </div>
          <div style="margin-top: 2%;margin-left:2%">
            <h3 style="display: inline;margin-right: 3%">职位类型</h3>
            <el-button type="text" v-for="item in classes" :key="item.value">{{item.text}}</el-button>
          </div>

          <!--<el-switch-->
          <!--v-model="value3"-->
          <!--active-text="校园招聘"-->
          <!--inactive-text="社会招聘" style="margin-top: 3%;margin-left:1%">-->
          <!--</el-switch>-->
        </div>
        <div style="text-align: center">
          <el-button type="primary" style="margin: auto;width: 20%" round>投递简历</el-button>
        </div>
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
      <span class="copyright" style="margin:0 auto;">
			Copyright © 2004-2015  兴海物联 版权所有
		</span>

    </el-container>
  </div>
</template>

<script>
  import XhwlHeader from './components/XhwlHeader.vue'
  export default {
    name: 'App',
    data () {
      return {
        input3: '',
        value3: '',
        items: [
          {text: '展示示例一'},
          {text: '展示示例二'},
          {text: '展示示例三'},
          {text: '展示示例四'},
        ],
        places: [
          {text: '深圳'},
          {text: '全部'},
        ],
        classes: [
          {text: '研发'},
          {text: '设计'},
          {text: '产品'},
          {text: '全部'},

        ],
      }
    },
    methods: {},
    components: {XhwlHeader}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
