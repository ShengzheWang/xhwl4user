<template>
  <div id="FormSelfEvaluation" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="自我评价" style="width: 100%">
          <el-input
            type="textarea"
            :rows="15"
            placeholder="请输入内容"
            v-model="formSelfEvaluation.self_description"
          >
          </el-input>
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
        formSelfEvaluation: {
          ID: null,
          resume_id:null,
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
