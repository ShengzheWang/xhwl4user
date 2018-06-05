<template>
  <div id="FormTraineeExperience" >
    <div class="form_information" v-if="!loading">
      <div class="form_info_title">
        <h2>求职意向</h2>
      </div>
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :rules="rules" :status-icon="true" :model="formsIntention" ref="formsIntention">
        <div class="resume_form_items">
          <el-form-item label="可到岗时间" prop="expectedTimeForDuty">
            <el-date-picker type="date" placeholder="选择日期" v-model="formsIntention.expectedTimeForDuty"></el-date-picker>
          </el-form-item>
          <el-form-item label="期望工作地点" prop="workPlace">
            <el-radio-group v-model.number="formsIntention.workPlace">
              <el-radio label="深圳" :value="1"></el-radio>
              <el-radio label="其他" :value="2"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="期望薪资" prop="salary">
            <el-input v-model.number="formsIntention.salary">
              <template slot="append">元/月</template>
            </el-input>
          </el-form-item>
        </div>
        <div class="needMarginBorder"></div>
        <el-form-item>
          <el-button type="primary" class="button4forms" @click="nextStep('formsIntention')">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

 Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

export default {

  data () {
    var checkSalary=(rule,value,callback)=>{
        if(!value){
          callback();
        }else{
          if(!Number.isNaN(Number(value))){
            callback()
          }else{
            callback(new Error('请输入正确的薪资'))
          }
        }
    }

    var checkAfterToday=(rule,value,callback)=>{
      var date=new Date();
      let flag=false;
      date=date.Format('yyyy-MM-dd');
      let temp=value.Format('yyyy-MM-dd');
      if(date>temp){
        callback(new Error('选择日期不能早于当前日期'))
      }else{
        callback();
      }
    }

    return {
      loading: true,
      formsIntention: {
        id: '',
        resumeId: '',
        workPlace: '',
        salary: '',
        expectedTimeForDuty: null
      },
      rules: {
        salary:[
          //{type:'number',message:'请输入正确薪资',trigger:'change'},
          {validator:checkSalary,type:'string',trigger:'change'}
        ],
        workPlace:[
          {required:true,message:'请选择城市',trigger:'blur'}
        ],
        expectedTimeForDuty:[
          {required:true,type:'date',message:'请选择时间',trigger:'blur'},
            {validator:checkAfterToday,trigger:'blur'}
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
        _this.$data.formsIntention = response.data === ''?_this.$data.formsIntention:response.data
        _this.$data.loading = false
      })

    })
  },
  methods: {
    nextStep (formName) {
      if(this.$data.formsIntention.expectedTimeForDuty!==null) {
        this.$data.formsIntention.expectedTimeForDuty = new Date(this.$data.formsIntention.expectedTimeForDuty)
        this.$data.formsIntention.expectedTimeForDuty.setTime(this.$data.formsIntention.expectedTimeForDuty.getTime() + 3600 * 1000 * 8);
      }
      this.$refs[formName].validate((valid)=>{
        if(valid){
          let _this=this;
          this.$axios({
            method: 'post',
            url: '/intention',
            data: this.$data.formsIntention
          }).then(function (response) {
            _this.$message({
              message: '成功保存，进入下一步填写',
              type: 'success'
            })
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
</style>
