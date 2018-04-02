<template>
  <div id="Home">
    <div class="block">

      <el-carousel height="450pt" width="100%">
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
      <div style="margin-top: 2%;margin-left:2%">
        <h3 style="display: inline;margin-right: 3%">招聘类型</h3>
        <el-radio-group v-model="postChosen" >
          <el-radio v-for="item in posts" border :label="item.text" :key="item.value"></el-radio>
        </el-radio-group>
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
<style scoped>
  Home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
