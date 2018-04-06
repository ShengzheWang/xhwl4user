<template>
  <div id="FormProjectExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="入学日期">
          <el-date-picker type="date" placeholder="选择日期"
                          style="width: 39%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期">
          <el-date-picker type="date" placeholder="选择日期"
                          style="width: 39%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="学校" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="专业" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学历" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="专业成绩排名" style="width: 50%">
          <el-select placeholder="百分制排名">
            <el-option label="5%"></el-option>
            <el-option label="10%"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证明人" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="证明人联系方式" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="还有其他教育经历？" style="width: 50%">
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
    top: 27.2%;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-right: 32px solid #ffffff;
    border-bottom: 16px solid transparent;

  }
</style>
