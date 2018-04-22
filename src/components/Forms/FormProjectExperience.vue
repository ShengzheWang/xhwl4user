<template>
  <div id="FormProjectExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">项目经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div v-for="(formProject,index) in formsProject">
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :model="formProject" ref="formsProject" :rules="rules" v-if="!loading">
        <el-form-item label="项目名称" style="width: 50%" prop="projectName" >
          <el-input v-model="formProject.projectName"></el-input>
        </el-form-item>
        <el-form-item label="担任角色" style="width: 50%" prop="projectRole">
          <el-input v-model="formProject.projectRole"></el-input>
        </el-form-item>
        <el-form-item label="详细描述" style="width: 70%" prop="projectDescription">
          <el-input
            type="textarea"
            :rows="7"
            placeholder="请输入内容"
            v-model="formProject.projectDescription">
          </el-input>
          <span>{{formProject.projectDescription.length}}/200</span>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsProject')">保存</el-button>
          <el-button type="info" @click="deleteOne(formProject.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>
      <div>
      <el-form  label-position="labelPosition" label-width="200px">
        <el-form-item label="还有其他项目经历？" style="width: 50%">
          <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep('formsProject')">保存并进行下一步</el-button>
        </el-form-item>
        <div style="width:100%;height:30px">
        </div>
      </el-form>
      </div>
      <div style="width:100%;height:30px">
      </div>
    </div>
  </div>
</template>
<script>
  import {isvalidAddress,isName} from "../../util/Validate";

var checkName=(rule,value,callback)=>{
  if(!value){
   callback(new Error('请输入项目名'))
  }else if(!isName(value)){
    callback(new Error('项目名不合法!'))
  }else{
    callback();
  }
}

var checkRoleName=(rule,value,callback)=>{
  if(!isName(value)){
    callback(new Error('名字不合法！'))
  }else{
    callback();
  }
}


  export default {


  data () {
    return {

      loading: true,
      formsProject: null/*[{
        id: '',
        resumeId: '',
        projectName: '',
        projectRole: '',
        projectDescription: '',

      }]*/,
      formProjectDefault:{
        id: null,
        resumeId: '',
        projectName: '',
        projectRole: '',
        projectDescription: '',

      },
      rules:{
        projectName:[
          {required:true,message:'请输入项目名',trigger:'change'},
        //  {validator:checkName,trigger:'change'},
        //  {max:50,message:'长度超过50字限制',trigger:'change'},
        ],
        projectRole:[
          {required:true,message:'请输入担任角色',trigger:'change'},
          {validator:checkRoleName,trigger:'change'},
          {max:50,message:'长度超过50字限制',trigger:'change'}
        ],
        projectDescription:[
          {required:true,message:'请输入项目描述',trigger:'change'},
          {max:200,message:'长度超过字数限制',trigger:'change'}
        ]
      }
    }
  },
  created(){
    let _this=this;
    this.$axios({
      method:'get',
      url:'/project'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsProject=response.data;
        _this.$data.loading = false
      })


    })
  },
  methods: {
    nextStep (formName) {
      let flag=true;
     let _this=this;

     for(let index=0;index<this.$refs[formName].length;index++){
       this.$refs[formName][index].validate((valid)=>{
         if(!valid){
           flag=false;
         }else{
           this.$axios({
             method:'post',
             url:'/project',
             data:this.$data.formsProject[index]
           }).then(function (response) {
             _this.$data.formsProject.splice(index,1,response.data);
           })
         }
       })
     }

      if(flag===true) {
        this.$router.push('/ResumeForm/5')
      }
    },
    addOne () {
      this.$data.formsProject.push(this.$data.formProjectDefault)
    },
    deleteOne (num,index) {
      let _this = this
      console.log(this.$data.formsProject)
      if (num === null) {
        this.$data.formsProject.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/project/' + num
      }).then(function (response) {
        _this.$data.formsProject.splice(index, 1)
      })
    },
    saveOne (index,formName) {
      let flag=true;
      this.$refs[formName][index].validate((valid)=>{
        if(!valid){
          flag=false;
        }
      })

      if(flag===true){

        let _this = this
        this.$axios({
          method: 'post',
          url: '/project',
          data: this.$data.formsProject[index]
        }).then(function (response) {
          _this.$data.formsProject.splice(index, 1, response.data)
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
