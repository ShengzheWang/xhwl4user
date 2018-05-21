<template>
  <div id="Selector" class="animated fadeIn">
    <div style="width:100%;display: inline-block;margin-top: 50px">
      <p>{{resumeType === -1?'你还未登录，不能进行投递哦':resumeType === 0?'你还未创建简历，不能进行投递哦':('你目前的简历类型为  '+
      (resumeType===1?'社招简历':resumeType===2?'校招简历':'实习生简历'))}}</p>

      <el-form>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  v-model="placeChosen1" prefix-icon="icon iconfont icon4form icon-gongzuodidian-" suffix-icon="icon icon4form el-icon-caret-bottom" placeholder="工作地点" class="input4selector" >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  v-model="classChosen1" prefix-icon="icon iconfont icon4form icon-zhiweileixing" suffix-icon="icon icon4form el-icon-caret-bottom" placeholder="职位类型" class="input4selector">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 27%">
          <el-form-item >
            <el-input  v-model="postChosen1" prefix-icon="icon iconfont icon4form icon-zhiweimingcheng" placeholder="职位名称" class="input4selector">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col style="width: 2%">
          <div style="width: 100%;display: inline-block"></div>
        </el-col>
        <el-col style="width: 13%">
          <el-form-item >
            <el-button class="button4choose" @click="SearchPositions">筛选</el-button>
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
      postChosen:'',
      classChosen:'',
      placeChosen:'',
      resumeForm: '',
    },
    data () {
      return {
          postChosen1: '',
          classChosen1: '',
          placeChosen1: '',
          resumeType:-1,
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
      // this.$data.placeChosen = '全部'
     // this.$data.postChosen = this.$props.resumeForm==='1'?'校园招聘':this.$props.resumeForm==='2'?'社会招聘':'实习生招聘'
      this.$data.classChosen1=this.$props.classChosen;
      this.$data.postChosen1=this.$props.postChosen;
      this.$data.placeChosen1=this.$props.placeChosen;
      const token = document.cookie.split(';')[0]
      console.log(token)
      let _this = this
      if (token) {
        this.$axios({
          method: 'get',
          url: '/tokenCheck',
        }).then(function (response) {
          _this.$axios({
            method: 'get',
            url: '/resume'
          }).then(function (response) {
            console.log(response.data)
            if (response.data.id === undefined) {
              _this.$data.resumeType = 0
            } else {
              _this.$data.resumeType = (response.data.resumesForm)

            }
          })
        }).catch(function(error) {
          _this.$data.resumeType = -1
        })
      }
    },
    methods: {
      SearchPositions(){
       let data={
         classChosen:this.$data.classChosen1,
         postChosen:this.$data.postChosen1,
         placeChosen:this.$data.placeChosen1
       }
       this.$emit('ChangeSearch',data);
      }

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
      .el-input__suffix{
        display: inline-block;
        width: 50px;
        margin-top: 3px;
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
