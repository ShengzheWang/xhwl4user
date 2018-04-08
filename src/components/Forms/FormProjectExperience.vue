<template>
  <div id="FormProjectExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">

        <el-form-item label="项目名称" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="担任角色" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 100%">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="还有其他项目经历？" style="width: 50%">
          <el-button><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <el-form-item  style="width: 25%">
          <el-button type="primary">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
      <div style="width:100%;height:30px">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  #FormProjectExperience::before{
    content:"";
    position: absolute;
    right: 79%;
    top: 32%;
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
