<template>
  <div id="FormEducationExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">教育经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="入学日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.education_start_time"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.education_end_time"></el-date-picker>
        </el-form-item>
        <el-form-item label="学校" style="width: 50%">
          <el-input v-model="formEducation.education_school"></el-input>
        </el-form-item>
        <el-form-item label="专业" style="width: 50%">
          <el-input v-model="formEducation.education_speciality"></el-input>
        </el-form-item>
        <el-form-item label="学历" style="width: 50%">
          <el-select v-model="formEducation.education_history" placeholder="请选择学历">
            <el-option label="高中" value=1></el-option>
            <el-option label="专科" value=2></el-option>
            <el-option label="本科" value=3></el-option>
            <el-option label="研究生" value=4></el-option>
            <el-option label="博士生" value=5></el-option>
            <el-option label="博士后" value=6></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业成绩排名占比" style="width: 50%">
          <el-input v-model="formEducation.rank">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item label="还有其他教育经历？" style="width: 50%">
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
      formEducation: {
        ID: 0,
        resume_id: 0,
        education_start_time: '',
        education_end_time: '',
        education_school: '',
        education_speciality: '',
        education_history: null,
        rank: ''
      }
    }
  },
  name: 'FormEducationExperience',
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/3')
    }
  }
}
</script>
<style scoped>

  .input-date{
    width:40.3%;
  }
</style>
