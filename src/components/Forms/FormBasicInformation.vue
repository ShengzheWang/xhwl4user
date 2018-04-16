<template>
  <div id="FormBasicInformation">
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">基本信息</h2><h4 style="display: inline-block;margin-left: 20px;font-weight: normal">请保证基本信息的准确无误</h4>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px">

        <el-form-item label="上传照片" style="width: 50%;position: absolute;left:55%">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formBasic.imageUrl" :src="formBasic.imageUrl" class="avatar">
            <i v-else class="el-icon-plus
          avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="姓名" style="width: 50%">
          <el-input v-model="formBasic.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formBasic.sex">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型及号码" style="width: 50%">
          <el-input class="input-with-select" v-model="formBasic.idNumber">
            <el-select v-model="formBasic.idType" slot="prepend"  placeholder="证件类型" style="width: 110px">
              <el-option label="身份证" :value="1"></el-option>
              <el-option label="港澳台通行证" :value="2"></el-option>
              <el-option label="护照" :value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formBasic.birthday"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="意愿城市">
          <el-select placeholder="请选择" v-model="formBasic.workSeniority">
            <el-option label="深圳" value="1"></el-option>
            <el-option label="其他" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电子邮箱" style="width: 50%">
          <el-input v-model="formBasic.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" style="width: 50%">
          <el-input v-model="formBasic.telephone"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况">
          <el-select placeholder="请选择" v-model="formBasic.maritalStatus">
            <el-option label="已婚" :value="1"></el-option>
            <el-option label="未婚" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作年限" style="width: 50%">
          <el-input v-model="formBasic.workSeniority"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" style="width: 50%">
          <el-input v-model="formBasic.politicalStatus"></el-input>
        </el-form-item>
        <el-form-item label="现居住地" style="width: 50%">
          <el-input v-model="formBasic.presentAddress"></el-input>
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
      formBasic: {

        ID: '',
        resumeId: null,
        name: '',
        sex: null,
        idType: null,
        idNumber: '',
        birthday: '',
        email: '',
        telephone: '',
        maritalStatus: null,
        workSeniority: '',
        politicalStatus: '',
        presentAddress: '',
        imageUrl: ''
      }

    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/person'
    }).then(function (response) {
      _this.$data.formBasic = response.data
      console.log(_this.$data.formBasic)

    })
  },
  methods: {
    nextStep () {
      let _this = this
      this.$axios({
        method: 'post',
        url: '/person',
        data: this.$data.formBasic
      }).then(function (response) {
        console.log(response.data.data)
        this.$router.push('/ResumeForm/2')
      })
    }
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.input-date{
  width:40.3%;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
