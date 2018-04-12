<template>
  <div id="FormTraineeExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="可到岗时间（抽象）">
          <el-date-picker type="date" placeholder="选择日期" v-model="formIntention.expected_time_for_duty"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="期望工作地点" style="width: 50%>">
          <el-radio-group v-model="formIntention.work_place">
            <el-radio label="深圳" value="1"></el-radio>
            <el-radio label="其他" value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="期望薪资" style="width: 50%">
          <el-input v-model="formIntention.salary"></el-input>
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
        formIntention:{
          ID:null,
          resume_id:null,
          work_place:null,
          salary:null,
          expected_time_for_duty:''
        }
      }
    },
    methods: {
      nextStep () {
        this.$router.push('/ResumeForm/9');
      }
    }
  }
</script>
<style scoped>
  .input-date{
    width:40.3%;
  }
</style>
