<template>
  <div id="MyJobApplication" style="height: 500px;width: 1300px;margin:0% auto;">
    <h1 style="width: 1100px;margin:5% auto"> 你还未创建过简历，请单击你想创建的简历类型开始填写简历</h1>
    <div style="height: 350px;width: 1100px;margin:5% auto">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="投递日期"
          width="240">
        </el-table-column>
        <el-table-column
          prop="name"
          label="申请职位"
          width="260">
        </el-table-column>
        <el-table-column
          prop="type"
          label="职位类型"
          width="220">
        </el-table-column>
        <el-table-column
          prop="state"
          label="投递状态"
          width="220">
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
import ElIcon from '../../node_modules/element-ui/packages/icon/src/icon.vue'

export default {
  components: {ElIcon},
  name: 'MyJobApplication',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'web前端工程师',
        type: '技术类',
        state: '已提交',
        ApplicationID: 200333
      }, {
        date: '2016-05-03',
        name: 'web前端工程师',
        type: '技术类',
        state: '已提交',
        ApplicationID: 200333
      }]

    }
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
