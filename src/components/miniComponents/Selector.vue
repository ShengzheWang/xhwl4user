<template>
  <div id="Selector" class="animated fadeIn">
    <div style="width:100%;display: inline-block;margin-top: 50px">
      <el-form>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  prefix-icon="icon iconfont icon4form icon-gongzuodidian"  placeholder="工作地点" class="input4selector" >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  prefix-icon="icon iconfont icon4form icon-zhiweileixing" placeholder="职位类型" class="input4selector">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  prefix-icon="icon iconfont icon4form icon-zhiweimingcheng" placeholder="职位名称" class="input4selector">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 13%">
          <el-form-item >
            <el-button class="button4choose">筛选</el-button>
          </el-form-item>
        </el-col>

      </el-form>
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
     .button4choose{
       background: #E01B2F;
       color: #ffffff;
       width: 100%;
       height: 54px;
       border: solid 2px #E01B2F;
       border-radius: 50px;
       font-size: 20px;
     }
     .input-name{
       border-radius: 50px;
     }
     .input-classes{
       border-radius: 50px;
     }
     .input4selector{
       border-radius: 50px;
     }
     .el-form{
       .el-input{
         border:#1476C1 solid 2px;
         width: 100%;
         font-size: 20px;
         background-color: #ffffff;
       }
       .el-input__prefix{
         display: inline-block;
         width: 50px;
       }
       .el-input__inner{
         height:50px;
         border:none;
         border-radius: 50px;
         background: inherit;
         padding-left:50px;
       }
     }
     font-size: 15px;
     .select-button{
       transition: all 0.6s;
       &:hover{
         transform: scale(1.02);
       }
     }
   }
</style>
