<template>
  <div id="MyJobApplication" class="animated bounceInLeft" style="min-height: 500px;width: 1300px;margin:3% auto;">
    <div style="height: 350px;width: 1100px;margin:5% auto" >
      <div class="line" ></div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%" v-loading="loading">
        <el-table-column
          prop="positionName"
          label="申请职位"
          width="200">
        </el-table-column>
        <el-table-column
          prop="recruitmentType"
          label="职位类型"
          width="200">
        </el-table-column>
        <el-table-column
          prop=""
          label=""
          width="500">
          <template slot-scope="scope">
            <a v-bind:class="scope.row.state[0].iconClass"><i v-bind:class="scope.row.state[0].iconName"></i>{{scope.row.state[0].stateText}}</a>
            <div style="display: inline" v-for="(item,index) in scope.row.state" v-if="index!=0">
            <i class="el-icon-arrow-right"></i>
            <a v-bind:class="item.iconClass"><i v-bind:class="item.iconName"></i>{{item.stateText}}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="200"
        >
          <template slot-scope="scope">
            <el-button type="primary" class="button4details" size="middle">
              {{(scope.row.recruitmentState <= 0||scope.row.recruitmentState>4)?'查看详情':'撤回申请'}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ElIcon from '../../../node_modules/element-ui/packages/icon/src/icon.vue'

export default {
  components: {ElIcon},
  name: 'MyJobApplication',
  data () {
    return {
      tableData: [],
      loading: true

    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/deliver'
    }).then(function (response) {
      _this.$nextTick(() => {
        response.data.forEach((item, index) => {
          item['index'] = index
          item['recruitmentType'] = item['recruitmentType'] === '1' ? '校园招聘'
            : item['recruitmentType'] === '2' ? '社会招聘' : '实习生招聘'
          item['state'] = []
          switch (item['recruitmentState']) {
            case '1':
              item['state'] = [{
                iconClass:'state-default',
                iconName:'icon iconfont icon-1',
                stateText:'简历审核'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-2',
                stateText:'部门笔试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-3',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '-1':
              item['state'] = [{
                iconClass:'state-failure',
                iconName:'icon iconfont icon-shibai',
                stateText:'简历审核'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-2',
                stateText:'部门笔试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-3',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '2':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-2',
                stateText:'部门笔试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-3',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '-2':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-failure',
                iconName:'icon iconfont icon-shibai',
                stateText:'部门笔试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-3',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '3':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门笔试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-3',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '-3':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门笔试'
              },{
                iconClass:'state-failure',
                iconName:'icon iconfont icon-shibai',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '4':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门笔试'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-4',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '-4':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门笔试'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门面试'
              },{
                iconClass:'state-failure',
                iconName:'icon iconfont icon-shibai',
                stateText:'HR面试'
              },{
                iconClass:'state-default',
                iconName:'icon iconfont icon-5',
                stateText:'Offer'
              }
              ]
              break
            case '5':
              item['state'] = [{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'简历审核'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门笔试'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'部门面试'
              },{
                iconClass:'state-success',
                iconName:'icon iconfont icon-chenggong',
                stateText:'HR面试'
              },{
                  iconClass:'state-success',
                  iconName:'icon iconfont icon-chenggong',
                  stateText:'Offer'
                }
              ]
              break
          }
          _this.$data.tableData.push(item)
        })
        _this.$data.loading = false
        console.log(_this.$data.tableData)
      })
    })
  },
  methods: {
    createAResume () {
      this.$router.push('/ResumeForm/1')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

  #MyJobApplication {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
    .iconfont{
      font-size: 20px;
    }
    .has-gutter th{
      padding:20px 0;
    }
    .state-failure {
      color: #E01B2F;
    }
    .state-default {
      color: #707070
    }
    .state-success {
      color: #77C490;
    }
    .icon-1:before{
      content: '① ';
    }
    .icon-2:before{
      content: '② ';
    }
    .icon-3:before{
      content: '③ ';
    }
    .icon-4:before{
      content: '④ ';
    }
    .icon-5:before{
      content: '⑤ ';
    }
    .icon-6:before{
      content: '⑥ ';
    }
    .button4details {
      border-radius: 40px !important;
      border: solid 1px #2480C3;
      background: inherit;
      color: #2480C3;
      width: 100px
    }
    .line {
      border: solid 1px #1476C1;
      margin-top: 0;
    }
    .el-row {
      margin-bottom: 0;
    }
    .el-col {
      margin-bottom: 0;
      height: 30px
    }
    .el-table th {
      text-align: center;
    }
    .el-table__row {
      text-align: center;
    }
    .el-table__header {
      font-size: 15px;
      .cell {
        font-weight: 900;
        color: #2c3e50;
      }
    }
    .el-table__body {
      font-size: 15px;
      .el-table__row {
        background: #F6F7FB;
      }
      .el-table__row--striped {
        background: #ffffff !important;
        td {
          background: #ffffff !important;
        }
      }
    }
  }
  </style>
