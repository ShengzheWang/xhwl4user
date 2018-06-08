<template>
  <div id="FormBasicInformation">
    <div class="form_information animated fadeIn" v-if="!loading" >
      <div class="form_info_title">
        <h2>基本信息</h2>
        <h4>请保证基本信息的准确无误</h4>
      </div>
      <el-form label-position="labelPosition" label-width="200px" :rules="rules" :model="formBasic" ref="formBasic" :status-icon="true" >
        <div class="resume_form-items">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formBasic.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="formBasic.sex">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件类型及号码" prop="idNumber">
            <el-input class="identify_num" v-model="formBasic.idNumber">
              <el-select v-model="formBasic.idType" slot="prepend"  placeholder="证件类型">
                <el-option label="身份证" :value="1"></el-option>
                <el-option label="港澳台通行证" :value="2"></el-option>
                <el-option label="护照" :value="3"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker type="date" placeholder="选择日期" v-model="formBasic.birthday" class="input-date"></el-date-picker>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="formBasic.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="telephone">
            <el-input v-model="formBasic.telephone"></el-input>
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-select placeholder="请选择" v-model="formBasic.maritalStatus">
              <el-option label="已婚" :value="2"></el-option>
              <el-option label="未婚" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作年限" prop="workSeniority">
            <el-input-number v-model="formBasic.workSeniority"></el-input-number>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input v-model="formBasic.politicalStatus"></el-input>
          </el-form-item>
          <el-form-item label="现居住地" prop="presentAddress">
            <el-input v-model="formBasic.presentAddress"></el-input>
          </el-form-item>
        </div>
        <div class="avatar_upload_item">
          <el-upload
            class="avatar-uploader"
            :action="$axios.defaults.baseURL+'/upload-photo'"
            :headers="header"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus
          avatar-uploader-icon"></i>
          </el-upload>
          <div class="upload_avatar_word" style="text-align: center; font-size: 16px;">上传照片</div>
        </div>
        <div class="needMarginBorder"></div>
        <el-form-item>
          <el-button type="primary" class="button4forms" @click="nextStep('formBasic')">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

import { isvalidPhone, isvalidEmail, isvlaidIDnumber, isvalidPassport, isvalidPass, isvalidAddress, isName } from '../../util/Validate'

var checkEmail = (rule, value, callback) => { // 检查邮箱格式
  if (!value) {
    callback(new Error('请输入邮箱'))
  } else if (!isvalidEmail(value)) {
    callback(new Error('邮箱格式不正确'))
  } else {
    callback()
  }
}
var checkPhone = (rule, value, callback) => { // 检查手机号格式是否正确
  if (!value) {
    callback(new Error('请输入手机号'))
  } else if (!isvalidPhone(value)) {
    callback(new Error('请输入11位手机号'))
  } else {
    callback()
  }
}

var checkAddress = (rule, value, callback) => { // 检查住宅地址
  if (!value) {
    callback(new Error('请输入住址'))
  } else if (!isvalidAddress(value)) {
    callback(new Error('住址不合法'))
  } else {
    callback()
  }
}

var checkName = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入名字'))
  } else if (!isName(value)) {
    callback(new Error('名字不合法！'))
  } else {
    callback()
  }
}

var checkWorkSeniority=(rule,value,callback)=>{
  if(value < 0)
    callback(new Error('请输入正确的工作年限！'))
  else
    callback()
}

export default {

  data () {
    var checkId = (rule, value, callback) => { // 检查证件格式是否正确
      var key1 = 1
      var key2 = 2
      var key3 = 3
      if (!value) {
        callback(new Error('请输入证件号码'))
      } else if (this.formBasic.idType === key1) {
        if (!isvlaidIDnumber(value)) {
          callback(new Error('身份证号格式不正确'))
        } else {
          callback()
        }
      } else if (this.formBasic.idType === key3) {
        if (!isvalidPassport(value)) {
          callback(new Error('护照格式不正确'))
        } else {
          callback()
        }
      } else if (this.formBasic.idType === key2) {
        if (!isvalidPass(value)) {
          callback(new Error('通行证格式不正确'))
        } else if (this.$refs.formBasic.idType === null) {
          callback(new Error('请选择证件类型'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请选择证件类型'))
      }
    }
    return {
      header: {
      },
      imageUrl: null,
      loading: true,
      formBasic: {
        ID: '',
        resumeId: '',
        name: '',
        sex: '',
        idType: '',
        idNumber: '',
        birthday: null,
        email: '',
        telephone: '',
        maritalStatus: '',
        workSeniority: '',
        politicalStatus: '',
        presentAddress: '',
      },
      rules: {
        email: [
          {validator: checkEmail, trigger: 'change'},
          {required: true, message: '请输入邮箱', trigger: 'change'}
        ],
        telephone: [
          {validator: checkPhone, trigger: 'change'},
          {required: true, message: '请输入手机号', trigger: 'change'}
        ],
        birthday: [
          {type: 'date', required:true, message: '请选择日期', trigger: 'change'}
        ],
        name: [
          {required: true, message: '请输入名字', trigger: 'change'},
          {validator: checkName, trigger: 'change'}
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        workSeniority: [
          {required: true, message: '请输入工作年限', trigger: 'blur'},
          {validator:checkWorkSeniority,trigger:'change'}
        ],
        idNumber: [
          {validator: checkId, trigger: 'change'},
          {required: true, message: '请输入证件号码', trigger: 'change'}
        ],
        politicalStatus: [
          {required: true, message: '请选择政治面貌', trigger: 'change'}
        ],
        maritalStatus: [
          {required: true, message: '请选择婚姻状况', trigger: 'change'}
        ],
        presentAddress: [
          {validator: checkAddress, trigger: 'change'},
          {required: true, message: '请输入住址', trigger: 'change'}
        ]

      }

    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/person'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formBasic = response.data === ''?_this.$data.formBasic:response.data
        _this.$data.loading = false
        _this.$data.header = {
          'authorization': _this.$axios.defaults.headers.Authorization
        }
      })
    })
    this.$axios.get(this.$axios.defaults.baseURL + '/download-photo',{
      responseType: 'arraybuffer'
    })
      .then(function (response) {
        console.log(response.data)
        if(response.data.byteLength!==0) {
          _this.$data.imageUrl = 'data:image/png;base64,' + btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
        }

      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    nextStep (formName) {
      let _this = this
      if(this.$data.formBasic.birthday!==null){
      this.$data.formBasic.birthday=new Date(this.$data.formBasic.birthday);
      this.$data.formBasic.birthday.setTime(this.$data.formBasic.birthday.getTime()+1000*3600*8);}

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/person',
            data: this.$data.formBasic
          }).then(function (response) {
            _this.$message({
              message: '成功保存，进入下一步填写',
              type: 'success'
            })
            _this.$router.push('/ResumeForm/2')
          })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAvatarSuccess () {
      let _this = this
      this.$axios.get(this.$axios.defaults.baseURL + '/download-photo',{
        responseType: 'arraybuffer'
      })
        .then(function (response) {
          console.log(response.data)
          _this.$data.imageUrl = 'data:image/png;base64,' + btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          )

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }

}
</script>
<style>
.resume_form-items {
  width: 100%;
}
.avatar_upload_item {
  position: absolute;
  right: 16%;
  top: 12%;
  width: 130px;
  height: 200px;
  .upload_avatar_word {
    width:130px;
    line-height: 20px;
    font-size: 16px;
  }
}
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
    width: 130px;
    height: 155px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 130px;
    height: 155px;
    display: block;
  }
.identify_num .el-input-group__prepend{
  .el-select {
    .el-input  {
      input {
        padding-left: 10px;
        padding-right: 20px;
      }
      span.el-input__suffix {
        width: 30px!important;
        height: 30px;
        i.el-select__caret, i.el-input__icon{
          width: 15px;
        }
      }
    }
  }

  /* background-color: #fff; */
}
</style>
