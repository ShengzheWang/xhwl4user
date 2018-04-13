<template>
  <div id="FormWorkExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">工作经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="起始日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formWorkExp.work_start_time"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formWorkExp.work_end_time"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="所在公司" style="width: 50%">
          <el-input v-model="formWorkExp.work_company"></el-input>
        </el-form-item>
        <el-form-item label="所任职位" style="width: 50%">
          <el-input v-model="formWorkExp.work_position"></el-input>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item label="还有其他工作经历？" style="width: 50%">
          <el-button><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item  style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep()">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
      <div style="width:100%;height:30px">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formWorkExp: {
        ID: null,
        resume_id: null,
        work_start_time: '',
        work_end_time: '',
        work_company: '',
        work_position: ''
      }
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/6')
    }

  }
}
</script>
<style scoped>

  .input-date{
    width:40.3%;
  }
</style>
