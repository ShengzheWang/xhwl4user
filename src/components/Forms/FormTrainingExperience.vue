<template>
  <div id="FormTrainingExperience" v-if="!loading">
    <div class="form_information">
      <div class="form_info_title">
        <h2>培训经历</h2>
      </div>
      <div v-for="(formTraining,index) in formsTraining">
        <el-form label-position="labelPosition" label-width="200px" :status-icon="true" class="animated fadeIn"
         ref="formsTraining" :rules="rules" :model="formTraining">
         <div class="resume_form-items">
           <el-form-item label="开始日期" prop="startTime">
             <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.startTime"></el-date-picker>
           </el-form-item>
           <el-form-item label="毕业日期" prop="endTime">
             <el-date-picker type="date" placeholder="选择日期" v-model="formTraining.endTime"></el-date-picker>
           </el-form-item>
           <el-form-item label="培训机构" prop="trainingInstitutions">
             <el-input v-model="formTraining.trainingInstitutions"></el-input>
           </el-form-item>
           <el-form-item label="培训内容" prop="trainingContent">
             <el-input v-model="formTraining.trainingContent" placeholder="请输入内容"></el-input>
           </el-form-item>
           <el-form-item label="详细描述" prop="description">
             <el-input type="textarea" :rows="7" v-model="formTraining.description" placeholder="请输入内容"></el-input>
             <span>{{formTraining.description.length}}/200</span>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="saveOne(index,'formsTraining')">保存</el-button>
             <el-button type="info" @click="deleteOne(formTraining.id,index)">删除</el-button>
           </el-form-item>
          </div>
          <div class="needMarginBorder"></div>
        </el-form>
      </div>
      <el-form label-position="labelPosition" label-width="200px">
        <el-form-item label="还有其他培训经历？">
          <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item>
          <el-button type="primary" class="button4forms" @click="nextStep('formsTraining')">保存并进行下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import { isName } from '../../util/Validate'

  var checkInsititutionName = (rule, value, callback) => {
    if (isName(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的机构名'))
    }
  }
  export default {

    data () {

      var checkEndTime = (rule, value, callback) => {
        for (let index = 0; index < this.$data.formsTraining.length; index++) {
          if (this.$data.formsTraining[index].endTime === value) {
            if (this.$data.formsTraining[index].startTime > value) {
              callback(new Error('起始日期不能大于结束日期'))
            }
          }
        }
        callback()
      }

      return {
        loading: true,
        formsTraining: [{
          id: null,
          resumeId: '',
          startTime: null,
          endTime: null,
          trainingInstitutions: '',
          trainingContent: '',
          description: ''
        }],

        rules: {
          startTime: [
            //{required:true,trigger:'change'},
            {type: 'date', message: '请选择正确日期', trigger: 'change'}
          ],
          endTime: [
            {type: 'date', message: '请选择正确日期', trigger: 'change'},
            {validator: checkEndTime, trigger: 'blur'}
          ],
          trainingInstitutions: [
            {validator: checkInsititutionName, trigger: 'change'},
            {max: 50, message: '长度超过限制', trigger: 'change'},
            {required: true, message: '请输入机构名', trigger: 'change'}
          ],
          trainingContent: [
            {max: 50, message: '长度超过限制', trigger: 'change'},
            {required: true, message: '请输入培训内容', trigger: 'change'}
          ],
          description: [
            {max: 200, message: '长度超过限制', trigger: 'change'},
            {required: true, message: '请输入详细内容', trigger: 'change'}
          ]
        }
      }
    },
    created () {
      let _this = this
      this.$axios({
        method: 'get',
        url: '/training'
      }).then(function (response) {
        _this.$nextTick(() => {
          if (response.data.length !== 0) {
            _this.$data.formsTraining = response.data
          }
          _this.$data.loading = false
        })

      })
    },
    methods: {
      nextStep (formName) {
        let flag = true
        if (this.$data.formsTraining.length === 0) {
          this.$message({
            message: '此页面你没有保存任何东西就进入下一步了哦',
            type: 'success'
          })
          this.$router.push('/ResumeForm/4')
        } else {
          for (let index = 0; index < this.$refs[formName].length; index++) {
            if (this.$data.formsTraining[index].startTime !== null) {
              this.$data.formsTraining[index].startTime = new Date(this.$data.formsTraining[index].startTime)
              this.$data.formsTraining[index].startTime.setTime(this.$data.formsTraining[index].startTime.getTime() + 8 * 3600 * 1000)
            }
            if (this.$data.formsTraining[index].endTime !== null) {
              this.$data.formsTraining[index].endTime = new Date(this.$data.formsTraining[index].endTime)
              this.$data.formsTraining[index].endTime.setTime(this.$data.formsTraining[index].endTime.getTime() + 8 * 3600 * 1000)
            }

            this.$refs[formName][index].validate((valid) => {
              if (!valid) {
                flag = false
              } else {
                let _this = this
                this.$axios({
                  method: 'post',
                  url: '/training',
                  data: this.$data.formsTraining[index]
                }).then(function (response) {
                  _this.$message({
                    message: '成功保存，进入下一步填写',
                    type: 'success'
                  })
                  _this.$data.formsTraining.splice(index, 1, response.data)
                })
              }
            })
          }
          if (flag === true) {
            this.$router.push('/ResumeForm/4')
          }
        }
      },
      addOne () {

        this.$data.formsTraining.push(
          {
            id: null,
            resumeId: '',
            startTime: null,
            endTime: null,
            trainingInstitutions: '',
            trainingContent: '',
            description: ''
          }
        )
      },
      deleteOne (num, index) {
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
      saveOne (index, formName) {
        let flag = true
        if (this.$data.formsTraining[index].startTime !== null) {
          this.$data.formsTraining[index].startTime = new Date(this.$data.formsTraining[index].startTime)
          this.$data.formsTraining[index].startTime.setTime(this.$data.formsTraining[index].startTime.getTime() + 8 * 3600 * 1000)
        }
        if (this.$data.formsTraining[index].endTime !== null) {
          this.$data.formsTraining[index].endTime = new Date(this.$data.formsTraining[index].endTime)
          this.$data.formsTraining[index].endTime.setTime(this.$data.formsTraining[index].endTime.getTime() + 8 * 3600 * 1000)
        }

        this.$refs[formName][index].validate((valid) => {
          if (!valid) {
            flag = false
          }
        })
        if (flag === true) {
          let _this = this
          this.$axios({
            method: 'post',
            url: '/training',
            data: this.$data.formsTraining[index]
          }).then(function (response) {
            _this.$message({
              message: '此次经历保存成功',
              type: 'success'
            })
            _this.$data.formsTraining.splice(index, 1, response.data)
          })
        }
      }

    }
  }
</script>
<style scoped>
  .input-date {
    width: 40.3%;
  }
</style>
