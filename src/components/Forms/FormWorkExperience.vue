<template>
  <div id="FormWorkExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">工作经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div v-for="(formWorkExp,index) in formsWorkExp">
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :rules="rules" :model="formWorkExp" ref="formsWorkExp" v-if="!loading">
        <el-form-item label="起始日期" prop="startTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="formWorkExp.startTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" prop="endTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="formWorkExp.endTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="所在公司" style="width: 50%" prop="company">
          <el-input v-model="formWorkExp.company"></el-input>
        </el-form-item>
        <el-form-item label="所任职位" style="width: 50%" prop="position">
          <el-input v-model="formWorkExp.position"></el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 70%"  prop="description">
          <el-input type="textarea" rows="7" v-model="formWorkExp.description"></el-input>
          <span>{{formWorkExp.description.length}}/200</span>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsWorkExp')">保存</el-button>
          <el-button type="info" @click="deleteOne(formWorkExp.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>
      <el-form  label-position="labelPosition" label-width="200px" v-if="!loading">
        <el-form-item label="还有其他工作经历？" style="width: 50%">
          <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep('formsWorkExp')">保存并进行下一步</el-button>
        </el-form-item>
        <div style="width:100%;height:30px">
        </div>
      </el-form>
      <div style="width:100%;height:30px">
      </div>
    </div>
  </div>
</template>
<script>
  import {isName} from "../../util/Validate";


  var checkCompanyName=(rule,value,callback)=>{
    if(!isName(value)){
      callback(new Error('请输入正确的公司名'))
    }else{
      callback();
    }
  }


  export default {

  data () {

    var checkEndTime=(rule,value,callback)=>{
      for(let index=0;index<this.$data.formsWorkExp.length;index++){
        if(this.$data.formsWorkExp[index].endTime===value){
          if(this.$data.formsWorkExp[index].startTime>value){
            callback(new Error('起始日期不能大于结束日期'));
          }
        }
      }
      callback();
    }


    return {
      loading: true,
      formsWorkExp:null,
      formWorkExpDefault: {
        id: null,
        resumeId: '',
        startTime: '',
        endTime: '',
        company: '',
        position: '',
        description:''
      },
      rules:{
        startTime:[
          {type:'date',message:'请选择正确的日期',trigger:'blur'}
        ],
        endTime:[
          {type:'date',message:'请选择正确日期',trigger:'blur'},
          {validator:checkEndTime,trigger:'blur'}
        ],
        company:[
          {validator:checkCompanyName,trigger:'change'},
          {max:5,message:'长度超过限制',trigger:'change'}
        ],
        position:[
          {validator:checkCompanyName,trigger:'change'},
          {max:30,message:'长度超过限制',trigger:'change'}
        ],
        description:[
          {max:200,message:'长度超过限制',trigger:'change'}
        ]
      }
    }
  },
  created(){
    let _this=this;
    this.$axios({
      method: 'get',
      url: '/work'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsWorkExp = response.data
        _this.$data.loading = false
      })


    })
  },
  methods: {
    nextStep (formName) {
      let flag=true;
      for(let index=0;index<this.$refs[formName].length;index++)
      {
        this.$data.formsWorkExp[index].startTime=new Date(this.$data.formsWorkExp[index].startTime);
        this.$data.formsWorkExp[index].startTime.setTime(this.$data.formsWorkExp[index].startTime.getTime()+8*3600*1000);
        this.$data.formsWorkExp[index].endTime=new Date(this.$data.formsWorkExp[index].endTime);
        this.$data.formsWorkExp[index].endTime.setTime(this.$data.formsWorkExp[index].endTime.getTime()+8*3600*1000);
        this.$refs[formName][index].validate((valid)=>{
          if(!valid){
            flag=false;
          }else{
            let _this=this;
            this.$axios({
              method:'post',
              url:'/work',
              data:this.$data.formsWorkExp[index]
            }).then(function (response) {
              _this.$message({
                message: '成功保存，进入下一步填写',
                type: 'success'
              })
              _this.$data.formsWorkExp.splice(index,1,response.data)

            })
          }
        })
      }
      if(flag===true){
      this.$router.push('/ResumeForm/6')}

    },
    addOne(){
      this.$data.formWorkExpDefault.company=''
      this.$data.formWorkExpDefault.description=''
      this.$data.formWorkExpDefault.endTime=''
      this.$data.formWorkExpDefault.startTime=''
      this.$data.formWorkExpDefault.position=''
      this.$data.formsWorkExp.push(this.formWorkExpDefault);
    },
    deleteOne (num,index) {
      let _this = this
      console.log(this.$data.formsWorkExp)
      if (num === null) {
        this.$data.formsWorkExp.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/work/' + num
      }).then(function (response) {
        _this.$data.formsWorkExp.splice(index, 1)
      })
    },
    saveOne(index,formName){
      let flag=true;
      this.$data.formsWorkExp[index].startTime=new Date(this.$data.formsWorkExp[index].startTime);
      this.$data.formsWorkExp[index].startTime.setTime(this.$data.formsWorkExp[index].startTime.getTime()+8*3600*1000);
      this.$data.formsWorkExp[index].endTime=new Date(this.$data.formsWorkExp[index].endTime);
      this.$data.formsWorkExp[index].endTime.setTime(this.$data.formsWorkExp[index].endTime.getTime()+8*3600*1000);
      this.$refs[formName][index].validate((valid)=>{
        if(!valid){
          flag=false;
        }
      })

      if(flag===true) {
        let _this = this;
        this.$axios({
          method: 'post',
          url: '/work',
          data: this.$data.formsWorkExp[index]
        }).then(function (response) {
          _this.$data.formsWorkExp.splice(index, 1, response.data)

        })
      }
    }

  }
}
</script>
<style scoped>

  .input-date{
    width:40.3%;
  }
</style>
