<template>
  <div id="FormSelfEvaluation" >
    <div class="form_information" v-if="!loading">
      <div class="form_info_title">
        <h2>自我评价</h2>
      </div>
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :status-icon="true"
               :model="formSelfEvaluation" ref="formSelfEvaluation" :rules="rules" >
        <el-form-item label="自我评价" prop="selfAssessment">
          <div class="resume_form-items">
            <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="formSelfEvaluation.selfAssessment">
            </el-input>
            <span>{{formSelfEvaluation.selfAssessment.length}}/500</span>
          </div>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item>
          <el-button type="primary" class="button4forms" @click="nextStep('formSelfEvaluation')">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true,
      formSelfEvaluation:{
      selfAssessment:''
      },
      rules:{
        selfAssessment:[
         // {required:true,message:'请输入自我描述',trigger:'change'},
          {max:500,message:'长度超过限制',trigger:'change'}
        ]
      }


    }
  },
    created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/selfAssessment'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formSelfEvaluation.selfAssessment = response.data
        _this.$data.loading = false
      })

    })
  },
  methods: {
    nextStep (formName) {
      let _this = this

      this.$refs[formName].validate((valid)=>{
        if(valid){
          this.$axios({
            method: 'post',
            url: '/selfAssessment',
            data: this.$data.formSelfEvaluation
          }).then(function (response) {
            console.log(response.data.data)
            _this.$message({
              message: '成功保存，进入下一步填写',
              type: 'success'
            })

          });
          this.$router.push('/ResumeForm/a')
        }else{
          console.log('提交失败！');
        }
      })

    }
  }
}
</script>

<style scoped>
</style>
