<template>
  <div id="FormSelfEvaluation" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">自我评价</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="自我评价" style="width: 70%">
          <el-input
            type="textarea"
            :rows="15"
            placeholder="请输入内容"
            v-model="formSelfEvaluation.self_description"
          >
          </el-input>
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
      formSelfEvaluation: {
        ID: '',
        resume_id: '',
        self_description: ''
      }
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/10')
    }
  }
}
</script>

<style scoped>
</style>
