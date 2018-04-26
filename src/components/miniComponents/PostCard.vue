<template>
  <div id="PostCard" style="min-height: 600px">
    <el-card v-for="item in cardInfo" class="box-card animated fadeInLeft" v-bind:key="item.index"
             v-bind:style="'margin-top:2%;width:100%;background-color:#f8f8f8;animation-delay:'+(item.index)*0.2+'s'">
      <div>
        <span style="font-size:25px;font-weight: bold" class="name"><i class="el-icon-document"/> {{item.positionName}}</span>
        <span style="font-size:18px;" class="name">  | {{item.positionType}}</span>
        <span style="float:right;font-size:25px;opacity: 0.35;"><i class="el-icon-menu"/> {{kind}}</span>
      </div>

      <div style="height:20px;" class="blank"></div>

      <div class="brief" style="font-weight:normal;font-size:15px;">
        <div style="margin-top: 1%">
          <i class="el-icon-location"/><a style="font-size: 20px">      工作地点：{{item.workPlace}}</a>
        </div>
        <div style="margin-top: 1%">
          <i class="el-icon-location-outline"/><a  style="font-size: 20px">      所属部门：{{item.department}}</a>
        </div>
      </div>

      <div style="height:20px;" class="blank"></div>
      <div id="details" style="font-weight:normal;font-size:15px;">

        <el-collapse-transition>
          <div v-show="item.Ashow" >
            <div style="margin-top: 1%">
              <div style="display:block">
              <img src="../../../static/img/responsibility.png">
              <a style="font-size: 20px">岗位描述：</a>
              </div>
              <div style="display: block;margin-top: 1%;margin-left:120px">
              <a style="white-space:pre-wrap">{{item.jobResponsibilities}}</a>
              </div>
            </div>
            <div style="margin-top: 1%">
              <div style="display:block">
                <img src="../../../static/img/requirement.png">
                <a style="font-size: 20px">岗位要求：</a>
              </div>
              <div style="display: block;margin-top: 1%;margin-left:120px">
                <a style="white-space:pre-wrap">{{item.jobRequirements}}</a>
              </div>
            </div>
          </div>

        </el-collapse-transition>
      </div>
      <el-button-group style="position: relative;margin-bottom:2%;margin-top: 2%;float: right" >
        <el-button type="primary" round icon="el-icon-message" @click="send(item.index)">立即投递</el-button>
        <el-button type="info"  round  @click="item.Ashow=!item.Ashow;"
                   :icon="item.Ashow?'el-icon-arrow-up':'el-icon-arrow-down'" >{{item.Ashow?'收起详情':'查看详情'}}</el-button>
      </el-button-group>
    </el-card>
  </div>
</template>

<script>
import ElCard from 'element-ui/packages/card/src/main'
import ElButtonGroup from '../../../node_modules/element-ui/packages/button/src/button-group.vue'

export default {
  components: {
    ElButtonGroup,
    ElCard},
  props: {
    resumeForm: ''
  },
  mounted () {
    let _this = this
    console.log(this.$props.resumeForm)
    this.$axios({
      method: 'get',
      url: '/positions/' + this.$props.resumeForm
    }).then(function (response) {
      _this.$nextTick(() => {
        response.data.forEach((item, index) => {
          item['index'] = index
          item['Ashow'] = false
          _this.$data.cardInfo.push(item)
        })
        console.log(_this.$data.cardInfo)
      })
    })
    this.$data.kind=this.$props.resumeForm==='1'?'校招':this.$props.resumeForm==='2'?'社招':'实习生'
  },
  data () {
    return {
      kind: '',
      cardInfo: []
    }
  },
  methods: {
    send (index) {
      let _this=this
      if (this.$axios.defaults.headers.Authorization == null) {
        _this.$message({
          type: 'warning',
          message: '请先登录并填写简历才能投递哦!'
        })
        return
      }
      this.$confirm('确定投递职位' + _this.$data.cardInfo[index].positionName + '吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        _this.$axios({
          method: 'put',
          url: '/deliver/' + _this.$data.cardInfo[index].id
        }).then(function (response) {
          _this.$message({
            type: 'success',
            message: '提交投递成功!'
          })
        }).catch(() => {
          _this.$message({
            type: 'warning',
            message: '提交失败，请检查你的简历类型!'
          })
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="less">
  #PostCard {
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }

</style>
