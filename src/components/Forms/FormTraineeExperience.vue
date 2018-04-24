<template>
  <div id="FormTraineeExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">实习经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div v-for="(formTrainee,index) in formsTrainee">
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :rules="rules" :model="formTrainee" ref="formsTrainee" v-if="!loading">
        <el-form-item label="起始日期" prop="startTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTrainee.startTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" prop="endTime" ref="formTrainee">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTrainee.endTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="实习公司" style="width: 50%" prop="company">
          <el-input v-model="formTrainee.company"></el-input>
        </el-form-item>
        <el-form-item label="实习职位" style="width: 50%" prop="position">
          <el-input v-model="formTrainee.position"></el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 70%" prop="description">
          <el-input type="textarea" rows="7" v-model="formTrainee.description"></el-input>
          <span>{{formTrainee.description.length}}/200</span>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsTrainee')">保存</el-button>
          <el-button type="info" @click="deleteOne(formTrainee.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>

      <el-form  label-position="labelPosition" label-width="200px" v-if="!loading">
        <el-form-item label="还有其他实习经历？" style="width: 50%">
          <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep('formsTrainee')">保存并进行下一步</el-button>
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
      callback(new Error('公司名不合法！'))
    }else{
      callback();
    }
  }
  var checkPositionName=(rule,value,callback)=>{
    if(!isName(value)){
      callback(new Error('公司名不合法！'))
    }else{
      callback();
    }
  }

  export default {
  data () {

    var checkEndTime=(rule,value,callback)=>{
      for(let index=0;index<this.$data.formsTrainee.length;index++)
      {
        if(this.$data.formsTrainee[index].endTime===value){
          if(this.$data.formsTrainee[index].startTime>value){
            callback(new Error('结束日期不能大于起始日期'));
          }
        }
      }
      callback();

    }


    return {
      loading: true,
      formsTrainee: null,
      formTraineeDefault: {
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
          {type:'date',message:'请选择正确日期',trigger:'blur'}
        ],
        endTime:[
          {type:'date',message:'请选择正确日期',trigger:'blur'},
          {validator:checkEndTime,trigger:'blur'}
        ],
        company:[
          {max:50,message:'公司名字超过限制',trigger:'change'},
          {validator:checkCompanyName,trigger:'change'},
        ],
        position:[
          {max:50,message:'职位名长度超过限制',trigger:'change'},
          {validator:checkPositionName,trigger:'change'}
        ],
        description:[
          {max:200,message:'描述字数超过限制',trigger:'change'}
        ]
      }
    }
  },
  created() {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/internship'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsTrainee = response.data
        _this.$data.loading = false
      })

    })
  },
  methods: {
    nextStep (formName) {
      let flag=true;
      for(let index=0;index<this.$refs[formName].length;index++)
      {
        this.$data.formsTrainee[index].startTime=new Date(this.$data.formsTrainee[index].startTime);
        this.$data.formsTrainee[index].startTime.setTime(this.$data.formsTrainee[index].startTime.getTime()+8*3600*1000);
        this.$data.formsTrainee[index].endTime=new Date(this.$data.formsTrainee[index].endTime);
        this.$data.formsTrainee[index].endTime.setTime(this.$data.formsTrainee[index].endTime.getTime()+8*3600*1000);

        this.$refs[formName][index].validate((valid)=>{
          if(!valid){
            flag=false;
          } else{
            let _this = this
            this.$axios({
              method: 'post',
              url: '/internship',
              data: this.$data.formsTrainee[index]
            }).then(function (response) {
              _this.$message({
                message: '成功保存，进入下一步填写',
                type: 'success'
              })
              _this.$data.formsTrainee.splice(index, 1, response.data)
            })
          }
        })
      }
      if(flag===true) {
        this.$router.push('/ResumeForm/7')
      }
    },
    addOne () {
      this.$data.formTraineeDefault.startTime='';
      this.$data.formTraineeDefault.endTime='';
      this.$data.formTraineeDefault.description='';
      this.$data.formTraineeDefault.company=''
      this.$data.formTraineeDefault.position=''
      this.$data.formsTrainee.push(this.$data.formTraineeDefault)
    },
    deleteOne (num,index) {
      let _this = this
      console.log(this.$data.formsTrainee)
      if (num === null) {
        this.$data.formsTrainee.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/internship/' + num
      }).then(function (response) {
        _this.$data.formsTrainee.splice(index, 1)
      })
    },
    saveOne (index,formName) {
      let flag=true;
      this.$data.formsTrainee[index].startTime=new Date(this.$data.formsTrainee[index].startTime);
      this.$data.formsTrainee[index].startTime.setTime(this.$data.formsTrainee[index].startTime.getTime()+8*3600*1000);
      this.$data.formsTrainee[index].endTime=new Date(this.$data.formsTrainee[index].endTime);
      this.$data.formsTrainee[index].endTime.setTime(this.$data.formsTrainee[index].endTime.getTime()+8*3600*1000);
      this.$refs[formName][index].validate((valid)=>{
        if(!valid){
         flag=false;
        }
      })
      if(flag===true){
        let _this = this
        this.$axios({
          method: 'post',
          url: '/internship',
          data: this.$data.formsTrainee[index]
        }).then(function (response) {
          _this.$data.formsTrainee.splice(index, 1, response.data)
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
