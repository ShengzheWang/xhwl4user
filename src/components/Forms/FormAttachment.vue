<template>
  <div id="FormAttachment">
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">上传附件</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="300px">
        <el-form-item  style="width: 45%" label="上传简历">
        <el-upload
          class="upload-demo"
          :show-file-list="true"
          :headers="header"
          accept="pdf,doc,docx"
          :limit="1"
          :on-success="uploadSuccess1"
          :action="$axios.defaults.baseURL+'upload-resume'">
          <el-button size="middle" plain>点击上传简历文档</el-button>
        </el-upload>
        </el-form-item>
        <el-form-item  style="width: 25%" label="上传其他材料">
          <el-upload
            class="upload-demo"
            :headers="header"
            :limit="1"
            :on-success="uploadSuccess2"
            :action="$axios.defaults.baseURL+'upload-support-detail'">
            <el-button size="middle"  plain>点击上传辅助材料</el-button>
          </el-upload>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item  style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep()">保存并完成简历填写</el-button>
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
      imageUrl: '',
      header: '',
      fileName1: null
    }
  },
  created() {
    this.$data.header = {
      'authorization': this.$axios.defaults.headers.Authorization
    }
  },
  methods: {
    uploadSuccess1(response, file) {
      this.$message({
        type: 'success',
        message: '上传简历成功'
      })
      this.$data.fileName1 = file.name
    },
    uploadSuccess2(response, file) {
      this.$message({
        type: 'success',
        message: '上传辅助材料成功'
      })
    },
    nextStep () {
      this.$message({
        message: '填写完成，进入简历预览，请仔细查看是否有遗漏或者差错哦',
        type: 'success'
      })
      this.$router.push({ path: '/ResumeDetails'})
    }
  }

}
</script>
<style scoped>

</style>
