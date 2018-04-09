<template>
  <div id="FormTraineeExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="可到岗时间（抽象）">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="期望工作地点" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="期望薪资" style="width: 50%">
          <el-input></el-input>
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
      this.$router.push('/ResumeForm/9')
    }
  }
}
</script>
<style scoped>
  #FormTraineeExperience::before{
    content:"";
    position: absolute;
    right: 79%;
    top: 72%;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-right: 32px solid #ffffff;
    border-bottom: 16px solid transparent;

  }
  .input-date{
    width:40.3%;
  }
</style>
