<template>
  <div id="Home">
    <div class="block">

      <el-carousel height="540pt" width="100%">
        <el-carousel-item v-for="item in items" :key="item.value">
          <h1 style="margin: 10% 49%;">{{ item.text }}</h1>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--<div class="show-rectangle">-->
    <!--<div class="show-rectangle-big" >5</div>-->
    <!--<div class="show-rectangle-nw">1</div>-->
    <!--<div class="show-rectangle-ne">2</div>-->
    <!--<div class="show-rectangle-sw">3</div>-->
    <!--<div class="show-rectangle-se">4</div>-->
    <!--</div>-->
    <div style="width: 620px;margin:3% auto;">
      <el-input placeholder="立即搜索" v-model="input3" style="font-size: 18px;height: 60px;margin-left: -1%">
        <el-button slot="append"><img src="../assets/search.png"> </el-button>
      </el-input>

      <div style="margin-top: 4%;margin-left:2%">
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">工作地点：</h3>

        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in places" :key="item.value">{{item.text}}</el-button>

      </div>
      <div style="margin-top: 2%;margin-left:2%">
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">职位类型：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in classes" :key="item.value">{{item.text}}</el-button>
      </div>

      <!--<el-switch-->
      <!--v-model="value3"-->
      <!--active-text="校园招聘"-->
      <!--inactive-text="社会招聘" style="margin-top: 3%;margin-left:1%">-->
      <!--</el-switch>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
