<template>
  <div id="FormProjectExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">项目经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="项目名称" style="width: 50%">
          <el-input v-model="formProject.project_name"></el-input>
        </el-form-item>
        <el-form-item label="担任角色" style="width: 50%">
          <el-input v-model="formProject.project_role"></el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 70%">
          <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入内容"
            v-model="formProject.project_description">
          </el-input>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item label="还有其他项目经历？" style="width: 50%">
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
      index: 0,
      formProject: {
        ID: '',
        resume_id: '',
        project_name: '',
        project_role: '',
        project_description: ''
      }
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/5')
    }

  }
}
</script>
<style scoped>
  .input-date{
    width:40.3%;
  }
</style>
