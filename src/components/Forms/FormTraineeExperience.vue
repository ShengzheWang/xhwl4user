<template>
  <div id="FormTraineeExperience" v-if="!loading">
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">实习经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div v-for="(formTrainee,index) in formsTrainee">
      <el-form label-position="labelPosition" label-width="300px" class="animated fadeIn" :rules="rules" :status-icon="true" :model="formTrainee" ref="formsTrainee" >
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
        <el-form-item label="" style="width: 70%">
          <el-button type="primary" @click="saveOne(index,'formsTrainee')">保存</el-button>
          <el-button type="info" @click="deleteOne(formTrainee.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>

      <el-form  label-position="labelPosition" label-width="300px">
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
      formsTrainee: [{
        id: null,
        resumeId: '',
        startTime: null,
        endTime: null,
        company: '',
        position: '',
        description:''
      }],
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
          {required:true,message:'请输入公司名',trigger:'change'}
        ],
        position:[
          {max:50,message:'职位名长度超过限制',trigger:'change'},
          {validator:checkPositionName,trigger:'change'},
          {required:true,message:'请输入职位名',trigger:'change'}
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
      if(this.$data.formsTrainee.length===0){
        this.$message({
          message: '此页面你没有保存任何东西就进入下一步了哦',
          type: 'success'
        })
        this.$router.push('/ResumeForm/7')
      }else {
        for (let index = 0; index < this.$refs[formName].length; index++) {
          if (this.$data.formsTrainee[index].startTime !== null) {
            this.$data.formsTrainee[index].startTime = new Date(this.$data.formsTrainee[index].startTime);
            this.$data.formsTrainee[index].startTime.setTime(this.$data.formsTrainee[index].startTime.getTime() + 8 * 3600 * 1000);
          }
          if (this.$data.formsTrainee[index].endTime !== null) {
            this.$data.formsTrainee[index].endTime = new Date(this.$data.formsTrainee[index].endTime);
            this.$data.formsTrainee[index].endTime.setTime(this.$data.formsTrainee[index].endTime.getTime() + 8 * 3600 * 1000);
          }

          this.$refs[formName][index].validate((valid) => {
            if (!valid) {
              flag = false;
            } else {
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
        if (flag === true) {
          this.$router.push('/ResumeForm/7')
        }
      }
    },
    addOne () {
      this.$data.formsTrainee.push({
        id: null,
        resumeId: '',
        startTime: null,
        endTime: null,
        company: '',
        position: '',
        description:''
      })
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
      if(this.$data.formsTrainee[index].startTime!==null){
      this.$data.formsTrainee[index].startTime=new Date(this.$data.formsTrainee[index].startTime);
      this.$data.formsTrainee[index].startTime.setTime(this.$data.formsTrainee[index].startTime.getTime()+8*3600*1000);}
      if(this.$data.formsTrainee[index].endTime!==null){
      this.$data.formsTrainee[index].endTime=new Date(this.$data.formsTrainee[index].endTime);
      this.$data.formsTrainee[index].endTime.setTime(this.$data.formsTrainee[index].endTime.getTime()+8*3600*1000);}
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
          _this.$message({
            message: '此次经历保存成功',
            type: 'success'
          })
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
