<template>
  <div id="FormTraineeExperience" >
    <div style="width:90%;margin: 0% auto;">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">求职意向</h2>
      <div style="width:100%;height:10px">
      </div>
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :rules="rules" :model="formsIntention" ref="formsIntention" v-if="!loading">
        <el-form-item label="可到岗时间" prop="expectedTimeForDuty">
          <el-date-picker type="date" placeholder="选择日期" v-model="formsIntention.expectedTimeForDuty"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="期望工作地点" style="width: 50%" prop="workPlace">
          <el-radio-group v-model.number="formsIntention.workPlace">
            <el-radio label="深圳" :value="1"></el-radio>
            <el-radio label="其他" :value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="期望薪资" style="width: 50%" prop="salary">
          <el-input v-model.number="formsIntention.salary"></el-input>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item  style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep('formsIntention')">保存并进行下一步</el-button>
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
      loading: true,
      formsIntention: null/*{
        id: '',
        resumeId: '',
        workPlace: '',
        salary: '',
        expectedTimeForDuty: ''
      }*/,
      rules: {
        salary:[
          {type:'number',message:'请输入正确薪资',trigger:'change'},
        ],
        workPlace:[
          {required:true,message:'请选择城市',trigger:'blur'}
        ],
        expectedTimeForDuty:[
          {required:true,type:'date',message:'请选择时间',trigger:'blur'}
        ]
      }
    }
  },
  created(){
    let _this = this
    this.$axios({
      method: 'get',
      url: '/intention'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsIntention = response.data
        _this.$data.loading = false
      })

    })
  },
  methods: {
    nextStep (formName) {
      this.$data.formsIntention.expectedTimeForDuty=new Date(this.$data.formsIntention.expectedTimeForDuty)
      this.$data.formsIntention.expectedTimeForDuty.setTime(this.$data.formsIntention.expectedTimeForDuty.getTime()+3600*1000*8);
      this.$refs[formName].validate((valid)=>{
        if(valid){
          let _this=this;
          this.$axios({
            method: 'post',
            url: '/intention',
            data: this.$data.formsIntention
          }).then(function (response) {
            console.log(response.data.data)
          });

          this.$router.push('/ResumeForm/9')

        }else{
          console.log('失败');
        }
      })

    }
  }
}
</script>
<style scoped>
  .input-date{
    width:40.3%;
  }
</style>
