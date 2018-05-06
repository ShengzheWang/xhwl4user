<template>
  <div id="Home">
      <div class="banner animated fadeInUp"  style="margin: 1% auto;">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 3" v-if="item!=2"><img :src="'../../../static/img/'+item+'.jpg'" style="width: 100%;height: auto"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
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
        <el-form-item>
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">工作地点：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in places" :key="item.value">{{item.text}}</el-button>
        </el-form-item>
      </div>
      <div style="margin-top: 2%;margin-left:2%">
        <el-form-item>
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 18px">职位类型：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 18px" v-for="item in classes" :key="item.value">{{item.text}}</el-button>
        </el-form-item>
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
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {ElFormItem},
  name: 'Home',
  created(){

  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      grabCursor : true,

      speed: 2000,
      pagination: {
        el: '.swiper-pagination',
      },

    })
    console.log(document.body.scrollWidth)
    //2185115
  },
  data () {
    return {
      input3: '',
      value3: '',
      postChosen: '',
      documentBodyClientWidth: 0,
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
