<template>
  <div id="FormBasicInformation" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:30px">
      </div>
      <el-form label-position="labelPosition" label-width="140px">
        <el-form-item label="姓名" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group>
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="证件类型及号码" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期"
                          style="width: 39%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="所在城市">
          <el-select placeholder="活动区域">
            <el-option label="深圳"></el-option>
            <el-option label="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号码" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人" style="width: 50%">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人联系方式" style="width: 50%">
          <el-input></el-input>
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
#FormBasicInformation::before{
  content:"";
  position: absolute;
  right: 79%;
  top: 2%;
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-right: 32px solid #ffffff;
  border-bottom: 16px solid transparent;

}
</style>
