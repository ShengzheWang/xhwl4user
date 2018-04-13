<template>
  <div id="FormAttachment">
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">上传附件</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item  style="width: 25%" label="上传简历">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/">
          <el-button size="small" type="primary" plain>点击上传</el-button>
        </el-upload>
        </el-form-item>
        <el-form-item  style="width: 25%" label="上传其他材料">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
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
      imageUrl: ''
    }
  },
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/2')
    }
  }

}
</script>
<style scoped>

</style>
