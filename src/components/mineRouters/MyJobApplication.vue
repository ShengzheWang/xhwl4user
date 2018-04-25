<template>
  <div id="MyJobApplication" class="animated bounceInLeft" style="height: 500px;width: 1300px;margin:0% auto;">
    <div style="height: 350px;width: 1100px;margin:5% auto" >
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="positionName"
          label="申请职位"
          width="260">
        </el-table-column>
        <el-table-column
          prop="recruitmentType"
          label="职位类型"
          width="260">
        </el-table-column>
        <el-table-column
          prop="recruitmentState"
          label="投递状态"
          width="260">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="150"
        >
          <template slot-scope="scope">
            <el-button circle @click="handleClick(scope.row)" type="primary" size="middle">
              <el-icon class="el-icon-zoom-in"></el-icon>
            </el-button>
            <el-button circle type="danger" size="middle">
              <el-icon class="el-icon-delete"></el-icon>
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
      tableData: []

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
          item['recruitmentState'] = item['recruitmentState'] === '0' ? '审核中'
            : item['recruitmentState'] === '1' ? '已通过' : '已回绝'
          _this.$data.tableData.push(item)
        })
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
<style scoped>
  MyResume {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
