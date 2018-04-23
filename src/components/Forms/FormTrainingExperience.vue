<template>
  <div id="FormTrainingExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">培训经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div v-for="(formTraining,index) in formsTraining">
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" ref="formsTraining" :rules="rules" :model="formTraining" v-if="!loading">
        <el-form-item label="开始日期" prop="startTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.startTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期" prop="endTime">
          <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.endTime"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="培训机构" style="width: 50%" prop="trainingInstitutions">
          <el-input v-model="formTraining.trainingInstitutions"></el-input>
        </el-form-item>
        <el-form-item label="培训内容" style="width: 70%" prop="trainingContent">
          <el-input v-model="formTraining.trainingContent"
            placeholder="请输入内容">
          </el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 70%" prop="description">
          <el-input
            type="textarea"
            :rows="7" v-model="formTraining.description"
            placeholder="请输入内容">
          </el-input>
         <span>{{formTraining.description.length}}/200</span>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsTraining')">保存</el-button>
          <el-button type="info" @click="deleteOne(formTraining.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>
        <el-form  label-position="labelPosition" label-width="200px" v-if="!loading">
          <el-form-item label="还有其他培训经历？" style="width: 50%">
            <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
          </el-form-item>
          <div class="needMarginBorder"></div>
          <el-form-item style="width: 25%">
            <el-button type="primary" class="button4forms" @click="nextStep('formsTraining')">保存并进行下一步</el-button>
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


  var checkInsititutionName=(rule,value,callback)=>{
    if(isName(value)){
      callback()
    }else{
      callback(new Error('请输入正确的机构名'))
    }
  }
export default {

  data () {
    return {
      loading: true,
      formsTraining: null/*[{
        id: '',
        resumeId: '',
        startTime: '',
        endTime: '',
        trainingInstitutions: '',
        trainingContent: '',
        description:''
      }]*/,
      formTrainingDefault: {
        id: null,
        resumeId: '',
        startTime: '',
        endTime: '',
        trainingInstitutions: '',
        trainingContent: '',
        description:''
      },
      rules:{
        startTime:[
          //{required:true,trigger:'change'},
          {type:'date',message:'请选择正确日期',trigger:'change'}
        ],
        endTime:[
          {type:'date',message:'请选择正确日期',trigger:'change'}
        ],
        trainingInstitutions:[
          {validator:checkInsititutionName,trigger:'change'},
          {max:50,message:'长度超过限制',trigger:'change'}
        ],
        trainingContent:[
          {max:50,message:'长度超过限制',trigger:'change'}
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
      method:'get',
      url:'/training'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsTraining=response.data;
        _this.$data.loading = false
      })

    })
  },
  methods: {
    nextStep (formName) {
      let flag=true;
      for(let index=0;index<this.$refs[formName].length;index++){
        this.$data.formsTraining[index].startTime=new Date(this.$data.formsTraining[index].startTime);
        this.$data.formsTraining[index].startTime.setTime(this.$data.formsTraining[index].startTime.getTime()+8*3600*1000);
        this.$data.formsTraining[index].endTime=new Date(this.$data.formsTraining[index].endTime);
        this.$data.formsTraining[index].endTime.setTime(this.$data.formsTraining[index].endTime.getTime()+8*3600*1000);
        this.$refs[formName][index].validate((valid)=>{
          if(!valid){
            flag=false;
          }else{
            let _this = this
            this.$axios({
              method: 'post',
              url: '/training',
              data: this.$data.formsTraining[index]
            }).then(function (response) {
              _this.$data.formsTraining.splice(index, 1, response.data)
            })
          }
        });
      }
      if(flag===true){
      this.$router.push('/ResumeForm/4')}
    },
    addOne () {
      this.$data.formsTraining.push(this.$data.formTrainingDefault)
    },
    deleteOne (num,index) {
      let _this = this
      console.log(this.$data.formsTraining)
      if (num === null) {
        this.$data.formsTraining.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/training/' + num
      }).then(function (response) {
        _this.$data.formsTraining.splice(index, 1)
      })
    },
    saveOne (index,formName) {
      let flag=true;
      this.$data.formsTraining[index].startTime=new Date(this.$data.formsTraining[index].startTime);
      this.$data.formsTraining[index].startTime.setTime(this.$data.formsTraining[index].startTime.getTime()+8*3600*1000);
      this.$data.formsTraining[index].endTime=new Date(this.$data.formsTraining[index].endTime);
      this.$data.formsTraining[index].endTime.setTime(this.$data.formsTraining[index].endTime.getTime()+8*3600*1000);
      this.$refs[formName][index].validate((valid)=>{
        if(!valid){
          flag=false;
        }
      })
      if(flag===true){
      let _this = this
      this.$axios({
        method: 'post',
        url: '/training',
        data: this.$data.formsTraining[index]
      }).then(function (response) {
        _this.$data.formsTraining.splice(index, 1, response.data)
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
