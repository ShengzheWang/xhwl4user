<template>
  <div id="FormEducationExperience"  >
    <div style="width:90%;margin: 0% auto;" class="animated fadeIn" v-if="!loading">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">教育经历</h2>
      <div style="width:100%;height:10px">
      </div>

      <el-form v-for="(formEducation,index) in formsEducation" label-position="labelPosition" label-width="200px" >
        <el-form-item label="入学日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.startTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="毕业日期">
          <el-date-picker type="date" placeholder="选择日期"
                          class="input-date" v-model="formEducation.endTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="学校" style="width: 50%">
          <el-input v-model="formEducation.school"></el-input>
        </el-form-item>
        <el-form-item label="专业" style="width: 50%">
          <el-input v-model="formEducation.speciality"></el-input>
        </el-form-item>
        <el-form-item label="学历" style="width: 50%">
          <el-select v-model="formEducation.educationHistory" placeholder="请选择学历">
            <el-option label="高中" :value=1></el-option>
            <el-option label="专科" :value=2></el-option>
            <el-option label="本科" :value=3></el-option>
            <el-option label="研究生" :value=4></el-option>
            <el-option label="博士生" :value=5></el-option>
            <el-option label="博士后" :value=6></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业成绩排名占比" style="width: 50%">
          <el-input v-model="formEducation.rank">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index)">保存</el-button>
          <el-button type="info" @click="deleteOne(formEducation.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>

      <el-form  label-position="labelPosition" label-width="200px">
      <el-form-item label="还有其他教育经历？" style="width: 50%">
        <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
      </el-form-item>
      <div class="needMarginBorder"></div>
      <el-form-item style="width: 25%">
        <el-button type="primary" class="button4forms" @click="nextStep()">保存并进行下一步</el-button>
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
    return {
      formsEducation: null,
      loading: true,
      formEducationDefault: {
        id: null,
        startTime: '',
        endTime: '',
        school: '',
        speciality: '',
        educationHistory: null,
      }
    }
  },
  beforeCreate () {
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
  },
  name: 'FormEducationExperience',
  methods: {
    nextStep () {
      this.$router.push('/ResumeForm/3')
    },
    addOne () {
      this.$data.formsEducation.push(this.$data.formEducationDefault)
    },
    deleteOne (num,index) {
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
    saveOne (index) {
      let _this = this
      this.$axios({
        method: 'post',
        url: '/education',
        data: this.$data.formsEducation[index]
      }).then(function (response) {
        _this.$data.formsEducation.splice(index, 1, response.data)
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
