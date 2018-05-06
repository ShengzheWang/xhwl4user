<template>
  <div id="Selector" class="animated fadeIn">
    <div style="width:50%;display: inline-block">
      <el-form>
      <el-input placeholder="立即搜索" v-model="input3" style="font-size: 16px;height: 50px;margin-left: 5px;margin-top: 5%"
                class="select-button">
        <el-button slot="append"><img src="../../../static/img/search.png"></el-button>
      </el-input>

      <div style="margin-top: 4%;margin-left:23px">
        <el-form-item style="margin-bottom: 1%">
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 16px">工作地点：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 16px" v-for="item in places" :key="item.value">{{item.text}}</el-button>
        </el-form-item>
      </div>
      <div style="margin-top: 0%;margin-left:23px">
        <el-form-item>
        <h3 style="display: inline;margin-right: 3%;font-weight:normal;color: #2A2A2A;font-size: 16px">职位类型：</h3>
        <el-button type="text" style="color: #000000;font-weight:normal;font-size: 16px" v-for="item in classes" :key="item.value">{{item.text}}</el-button>
        </el-form-item>
      </div>
      </el-form>
    </div>

    <div style="width:49%;display: inline-block;text-align: right;vertical-align: top">
      <h1 style="margin-top: 7%;font-size: 36px">{{postChosen}}</h1>
    </div>
  </div>
</template>

<script>
import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item.vue'

export default {
  components: {ElFormItem},
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
     .select-button{
       transition: all 0.6s;
       &:hover{
         transform: scale(1.02);
       }
     }
     .el-input__inner{
       border:4px solid #1476C1;
       border-radius:100px 0 0 100px;
       height: 50px;
     }
     .el-input-group__append{
       border:1px solid #1476C1;
       border-radius:0px 100px 100px 0;
       background: #1476C1;
     }
   }
</style>
