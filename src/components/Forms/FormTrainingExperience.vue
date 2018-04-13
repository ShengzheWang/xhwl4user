<template>
  <div id="FormTrainingExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">培训经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="开始日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.training_start_time"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.training_end_time"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="培训机构" style="width: 50%">
          <el-input v-model="formTraining.training_institutions"></el-input>
        </el-form-item>
        <el-form-item label="培训内容" style="width: 70%">
          <el-input
            type="textarea"
            :rows="10" v-model="formTraining.training_description"
            placeholder="请输入内容">
          </el-input>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item label="还有其他培训经历？" style="width: 50%">
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
      formTraining: {
        ID: null,
        resume_id: null,
        training_start_time: '',
        training_end_time: '',
        training_institutions: '',
        training_description: ''
      }
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/4')
    }

  }
}
</script>
<style scoped>
  .input-date{
    width:40.3%;
  }
</style>
