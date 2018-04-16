<template>
  <div id="FormBasicInformation">
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">基本信息</h2><h4 style="display: inline-block;margin-left: 20px;font-weight: normal">请保证基本信息的准确无误</h4>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px" :rules="rules" :model="formBasic" ref="formBasic" >

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
        <el-form-item label="姓名" style="width: 50%" prop="name">
          <el-input v-model="formBasic.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
<<<<<<< HEAD
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
=======
          <el-radio-group v-model="formBasic.sex" prop="sex">
            <el-radio label="男" value="1"></el-radio>
            <el-radio label="女" value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="证件类型及号码" style="width: 50%" prop="id">
          <el-input class="input-with-select" v-model="formBasic.id.id_number">
            <el-select v-model="formBasic.id.id_type" slot="prepend"  placeholder="证件类型" style="width: 110px">
              <el-option label="身份证" value="1"></el-option>
              <el-option label="港澳台通行证" value="2"></el-option>
              <el-option label="护照" value="3"></el-option>
>>>>>>> 45f39bf40072d70e794c4c6fe825a60a25794488
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker type="date" placeholder="选择日期" v-model="formBasic.birthday"
                          class="input-date"></el-date-picker>
        </el-form-item>
<<<<<<< HEAD
        <el-form-item label="意愿城市">
          <el-select placeholder="请选择" v-model="formBasic.workSeniority">
            <el-option label="深圳" value="1"></el-option>
            <el-option label="其他" value="5"></el-option>
=======
        <el-form-item label="意愿城市" prop="work_seniority">
          <el-select placeholder="请选择" v-model="formBasic.work_seniority">
            <el-option label="深圳" value="1"></el-option>
            <el-option label="其他" value="2"></el-option>
>>>>>>> 45f39bf40072d70e794c4c6fe825a60a25794488
          </el-select>
        </el-form-item>
        <el-form-item label="电子邮箱" style="width: 50%" prop="email">
          <el-input v-model="formBasic.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" style="width: 50%" prop="telephone">
          <el-input v-model="formBasic.telephone"></el-input>
        </el-form-item>
<<<<<<< HEAD
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
=======
        <el-form-item label="婚姻状况" prop="marital_status">
          <el-select placeholder="请选择" v-model="formBasic.marital_status">
            <el-option label="已婚" value="1"></el-option>
            <el-option label="未婚" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作年限" style="width: 50%" prop="work_years">
          <el-input v-model.number="formBasic.work_years"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" style="width: 50%" prop="political_status">
          <el-select placeholder="请选择" v-model="formBasic.political_status">
            <el-option label="党员" value="1"></el-option>
            <el-option label="共青团员" value="2"></el-option>
            <el-option label="群众" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="现居住地" style="width: 50%" prop="present_address">
          <el-input v-model="formBasic.present_address"></el-input>
>>>>>>> 45f39bf40072d70e794c4c6fe825a60a25794488
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

  import {isvalidPhone} from "../../util/Validate";
  import {isvalidEmail} from "../../util/Validate";
  import {isvlaidIDnumber} from "../../util/Validate";
  import {isvalidPassport} from "../../util/Validate";
  import {isvalidPass} from "../../util/Validate";
  import {isvalidAddress} from "../../util/Validate";
  import {isName} from "../../util/Validate";


  var checkEmail=(rule,value,callback)=>{     //检查邮箱格式
    if(!value){
      callback(new Error('请输入邮箱'));
    }else if(!isvalidEmail(value)){
      callback(new Error('邮箱格式不正确'));
    }else{
      callback();
    }
  };
  var checkPhone=(rule,value,callback)=>{   //检查手机号格式是否正确
    if(!value){
      callback(new Error('请输入手机号'));
    }else if(!isvalidPhone(value)){
      callback(new Error('请输入11位手机号'));
    }else{
      callback();
    }
  }

  var checkId=(rule,value,callback)=>{      //检查证件格式是否正确
    var key1='1';
    var key2='2';
    var key3='3';
    if(!value){
      callback(new Error('请输入证件号码'));
    }else if(value.id_type===key1){
      if(!isvlaidIDnumber(value.id_number)){
        callback(new Error('身份证号格式不正确'))
      }else{
        callback();
      }
    }else if(value.id_type===key3){
      if(!isvalidPassport(value.id_number)){
        callback(new Error('护照格式不正确'))
      }else{
        callback();
      }
    }else if(value.id_type===key2){
      if(!isvalidPass(value.id_number)){
        callback(new Error('通行证格式不正确'))
      }else{
        callback();
      }
    }else{
      callback(new Error('请选择证件类型'))
    }
  };


  var checkWorkYears = (rule, value, callback) => {     //检查工作年限
    if (!value) {
      callback(new Error('请输入工作年限'));
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('输入年限不合法'));
      } else {
        if (value > 25) {
          callback(new Error('输入年限不合法'));
        } else {
          callback();
        }
      }
    }, 350);
  };

  var checkAddress=(rule,value,callback)=>{     //检查住宅地址
    if(!value){
      callback(new Error('请输入住址'));
    }else if(!isvalidAddress(value)){
      callback(new Error('住址不合法'))
    }else{
      callback();
    }
  };

  var checkName=(rule,value,callback)=>{
    if(!value){
      callback(new Error('请输入名字'));
    }else if(!isName(value)){
      callback(new Error('名字不合法！'));
    }else{
      callback();
    }
  }



  export default {
  data () {
    return {
      formBasic: {

        ID: '',
<<<<<<< HEAD
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
=======
        resume_id: '',
        name: '',
        sex: '',
        id:[{
        id_type: '',
        id_number: ''}],
        birthday: '',
        email: '',
        telephone: '',
        marital_status: '',
        work_seniority: '',
        political_status: '',
        present_address: '',
        work_years:'',
>>>>>>> 45f39bf40072d70e794c4c6fe825a60a25794488
        imageUrl: ''
      },
      rules:          {
        email:[
          {validator: checkEmail, trigger:'blur'},
          {required:true}
        ],
        telephone:[
          {validator:checkPhone, trigger:'blur'},
          {required:true,message:'请输入手机号',trigger:'blur'}
        ],
        birthday:[
          {type:'date',required:true,message:'请选择日期',trigger:'blur'}
        ],
        name:[
          {required:true,message:'请输入名字',trigger:'blur'},
          {validator:checkName,trigger:'blur'}
        ],
        sex:[
          {required:true,message:'请选择性别',trigger:'blur'}
        ],
        work_seniority:[
          {required:true,message:'请选择城市',trigger:'blur'}
        ],
        id:[
          {validator:checkId,trigger:'blur'},
          {required:true,message:'请输入证件号码',trigger:'blur'}
        ],
        work_years:[
          {validator:checkWorkYears,trigger:'blur'},
          {required:true,message:'请输入工作年限',trigger:'blur'}
        ],
        political_status:[
          {required:true,message:'请选择政治面貌',trigger:'blur'}
        ],
        marital_status:[
          {required:true,message:'请选择婚姻状况',trigger:'blur'}
        ],
        present_address:[
          {validator:checkAddress,trigger:'blur'},
          {required:true,message:'请输入住址',trigger:'blur'}
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
