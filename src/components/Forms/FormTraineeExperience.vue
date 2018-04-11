<template>
  <div id="FormTraineeExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="起始日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="实习公司" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="实习职位" style="width: 50%">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="还有其他实习经历？" style="width: 50%">
          <el-button><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <el-form-item  style="width: 25%">
          <el-button type="primary" @click="nextStep()">保存并进行下一步</el-button>
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
      select: '',
      imageUrl: ''
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/7')
    }
  }
}
</script>
<style scoped>
  .input-date{
    width:40.3%;
  }
</style>
