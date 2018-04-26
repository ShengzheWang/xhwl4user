<template>
  <div id="Home">
      <div class="banner animated fadeInUp" id="banner4home" style="margin: 1% auto;">
        <div class="banner-view"></div>
        <div class="banner-btn"></div>
        <div class="banner-number"></div>
        <div class="banner-progres"></div>
      </div>

    <!--<div class="show-rectangle">-->
    <!--<div class="show-rectangle-big" >5</div>-->
    <!--<div class="show-rectangle-nw">1</div>-->
    <!--<div class="show-rectangle-ne">2</div>-->
    <!--<div class="show-rectangle-sw">3</div>-->
    <!--<div class="show-rectangle-se">4</div>-->
    <!--</div>-->
    <div style="width: 620px;margin:3% auto;" class="animated fadeInUp">
      <el-form>
        <el-form-item>
      <el-input placeholder="立即搜索" v-model="input3" style="font-size: 18px;height: 60px;margin-left: -1%">
        <el-button slot="append"><img src="../../../static/img/search.png"> </el-button>
      </el-input>
        </el-form-item>
      <div style="margin-top: 4%;margin-left:2%">
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">工作地点：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in places" :key="item.value">{{item.text}}</el-button>
      </div>
      <div style="margin-top: 2%;margin-left:2%">
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">职位类型：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in classes" :key="item.value">{{item.text}}</el-button>
      </div>
      </el-form>
      <!--<el-switch-->
      <!--v-model="value3"-->
      <!--active-text="校园招聘"-->
      <!--inactive-text="社会招聘" style="margin-top: 3%;margin-left:1%">-->
      <!--</el-switch>-->
  </div>
  </div>
</template>

<script>

import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item.vue'

export default {
  components: {ElFormItem},
  name: 'Home',
  mounted () {
    var banenr2 = new FragmentBanner({
      container: '#banner4home',
      imgs: ['../../../static/img/a1.png', '../../../static/img/a2.png',
        '../../../static/img/a3.png', '../../../static/img/a4.png', '../../../static/img/a5.png'],
      size: {
        width : document.body.scrollWidth,
        height : document.body.scrollWidth*1/3
      },//容器的大小 可选
      //行数与列数 可选
      grid : {
        line : 4,
        list : 8
      },
      index: 0,//图片集合的索引位置 可选
      type : 2,//切换类型 1 ， 2 可选
      boxTime : 5000,//小方块来回运动的时长 可选
      fnTime: 10000
    })
  },
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
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #Home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: -20px;
    font-size: 18px;
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
