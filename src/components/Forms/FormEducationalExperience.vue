<template>
  <div id="FormEducationExperience" >
    <div style="width:90%;margin: 0% auto;" class="animated fadeIn" v-if="!loading" >
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">教育经历</h2>
      <div style="width:100%;height:10px">
      </div>
      <div  v-for="(formEducation,index) in formsEducation">
      <el-form label-position="labelPosition" label-width="200px" class="animated fadeIn" :model="formEducation" ref="formsEducation" :rules="rules" v-if="!loading">
        <el-form-item label="入学日期" prop="startTime">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.startTime"
                          format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期" prop="endTime">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.endTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="学校" style="width: 50%" prop="school" >
          <el-input v-model="formEducation.school"></el-input>
        </el-form-item>
        <el-form-item label="专业" style="width: 50%" prop="speciality">
          <el-input v-model="formEducation.speciality"></el-input>
        </el-form-item>
        <el-form-item label="学历" style="width: 50%" prop="educationHistory">
          <el-select v-model="formEducation.educationHistory" placeholder="请选择学历" :rules="[{required:true,trigger:'blur'}]">
            <el-option label="高中" :value="1"></el-option>
            <el-option label="专科" :value="2"></el-option>
            <el-option label="本科" :value="3"></el-option>
            <el-option label="研究生" :value="4"></el-option>
            <el-option label="博士生" :value="5"></el-option>
            <el-option label="博士后" :value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业成绩排名占比" style="width: 50%" prop="rank" >
          <el-input v-model.number="formEducation.rank">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsEducation')">保存</el-button>
          <el-button type="info" @click="deleteOne(formEducation.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>

      <el-form  label-position="labelPosition" label-width="200px" v-if="!loading">
      <el-form-item label="还有其他教育经历？" style="width: 50%">
        <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
      </el-form-item>
      <div class="needMarginBorder"></div>
      <el-form-item style="width: 25%">
        <el-button type="primary" class="button4forms" @click="nextStep('formsEducation')">保存并进行下一步</el-button>
      </el-form-item>
      <div style="width:100%;height:30px">
      </div>
      </el-form>

    </div>
  </div>
</template>
<script>
import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item.vue'
import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition'



export default {
  components: {
    ElCollapseTransition,
    ElFormItem,
    ElButton},
  data () {
    var checkRank = (rule, value, callback) => {
      if (value > 100 || value < 0) {
        callback(new Error('请输入正确的排名'))
      } else {
        callback()
      }
    }


    return {
      loading: true,
      formsEducation: null, /* [{        startTime: '',
        endTime: '',
        school: '',
        speciality: '',
        educationHistory: null,
        rank: ''
      }] */
      formEducationDefault: {
        id: null,
        startTime: '',
        endTime: '',
        school: '',
        speciality: '',
        educationHistory: null,
        rank: ''
      },

      rules: {
        school: [{pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, message: '名字不合法', trigger: 'change'},
          {required: true, message: '学校不能为空', trigger: 'change'}],
        rank: [{validator: checkRank, message: '请输入正确的排名', trigger: 'change'},
          {required: true, message: '请输入排名', trigger: 'change'},
          {type: 'number', message: '请输入正确的排名', trigger: 'change'}],
        speciality: [{required: true, message: '请输入专业', trigger: 'change'},
          {pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, message: '专业名字不合法', trigger: 'change'}],
        educationHistory: [
          {required: true, message: '请选择学历', trigger: 'blur'}
        ],
        startTime:[
          {required:true,message:'请选择起始时间',trigger:'blur'},
        ],
        endTime:[
          {required:true,message:'请选择结束时间',trigger:'blur'}
        ]

      }
    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/education'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsEducation = response.data
        _this.$data.loading = false
      })
    })
    for(let index=0;index<this.$data.formsEducation.length;index++)
    {

      this.$data.formsEducation[index].startTime=new Date(this.$data.formsEducation[index].startTime);
      this.$data.formsEducation[index].endTime=new Date(this.$data.formsEducation[index].endTime);
    }
  },
  name: 'FormEducationExperience',
  methods: {
    nextStep (formName) {
      let flag = true

      for (let index = 0; index < this.$refs[formName].length; index++) {
        let tempDate1= this.$refs[formName][index].startTime;
        let tempDate2= this.$refs[formName][index].endTime;
        this.$refs[formName][index].startTime=tempDate1
        this.$refs[formName][index].endTime=tempDate2;
        this.$refs[formName][index].validate((valid) => {
          if (!valid) {
            flag = false
          } else {
            let _this = this
            this.$axios({
              method: 'post',
              url: '/education',
              data: this.$data.formsEducation[index]
            }).then(function (response) {
              _this.$data.formsEducation.splice(index, 1, response.data)
            })
          }
        })
      }

      if (flag === true) {
        this.$router.push('/ResumeForm/3')
      }
    },
    addOne () {
      this.$data.formsEducation.push(this.$data.formEducationDefault)
    },
    deleteOne (num, index) {
      let _this = this
      console.log(this.$data.formsEducation)
      if (num === null) {
        this.$data.formsEducation.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/education/' + num
      }).then(function (response) {
        _this.$data.formsEducation.splice(index, 1)
      })
    },
    saveOne (index, formName) {
      let k=new Date(this.$data.formsEducation[index].startTime);
      k.setDate(k.getDate()+1);
      let d=(new Date(this.$data.formsEducation[index].endTime));
      this.$data.formsEducation.startTime=k;
      this.$data.formsEducation.endTime=d;
      this.$refs[formName][index].validate((valid) => {
        if (valid) {
          let _this = this
          this.$axios({
            method: 'post',
            url: '/education',
            data: this.$data.formsEducation[index]
          }).then(function (response) {
            _this.$data.formsEducation.splice(index, 1, response.data)
          })
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
