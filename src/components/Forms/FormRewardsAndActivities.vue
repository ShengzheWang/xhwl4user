<template>
  <div id="FormRewardsAndActivities" >
    <div style="width:90%;margin: 0% auto;" v-if="!loading">
      <div style="width:100%;height:10px">
      </div>
      <h2 style="width:140px;text-align: right;display: inline-block;font-size: 30px">奖励活动</h2>
      <div style="width:100%;height:10px">
      </div>
      <div  v-for="(formAward,index) in formsAward">
      <el-form label-position="labelPosition" label-width="260px" class="animated fadeIn" :model="formAward" :status-icon="true" ref="formsAward" :rules="rules" >
        <el-form-item label="奖励日期" prop="dateOfAward">
          <el-date-picker type="date" placeholder="选择日期" v-model="formAward.dateOfAward"
                          class="input-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="奖励名称" style="width: 50%" prop="awardName">
          <el-input v-model="formAward.awardName"></el-input>
        </el-form-item>
        <el-form-item label="" style="width: 50%">
          <el-button type="primary" @click="saveOne(index,'formsAward')">保存</el-button>
          <el-button type="info" @click="deleteOne(formAward.id,index)">删除</el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
      </el-form>
      </div>
      <el-form  label-position="labelPosition" label-width="260px" v-if="!loading">
        <el-form-item label="还有其他获奖经历？" style="width: 50%">
          <el-button @click="addOne()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
        <div class="needMarginBorder"></div>
        <el-form-item style="width: 25%">
          <el-button type="primary" class="button4forms" @click="nextStep('formsAward')">保存并进行下一步</el-button>
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


var checkAwardName=(rule,value,callback)=>{
  if(!isName(value)){
    callback(new Error('奖项名不合法'));
  }else{
    callback();
  }
}

export default {
  data () {
    return {
      loading: true,
      formsAward: [{
        id: null,
        resumeId: '',
        awardName: '',
        dateOfAward: null
      }],

      rules:{
        awardName:[
          {validator:checkAwardName,trigger:'change'},
          {required:true,message:'请输入奖项名',trigger:'change'}
        ],
        dateOfAward:[
          {required:true,message:'请选择获奖时间',trigger:'blur'}
        ]

      }
    }
  },
  created(){
    let _this = this
    this.$axios({
      method: 'get',
      url: '/award'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsAward = response.data
        _this.$data.loading = false
      })
    })
    },
  methods: {
    nextStep (formName) {
      let flag=true;
      let _this=this;
      if(this.$data.formsAward.length===0){
        this.$router.push('/ResumeForm/8')
      }else {
        for (let index = 0; index < this.$refs[formName].length; index++) {
          if (this.$data.formsAward[index].dateOfAward !== null) {
            this.$data.formsAward[index].dateOfAward = new Date(this.$data.formsAward[index].dateOfAward);
            this.$data.formsAward[index].dateOfAward.setTime(this.$data.formsAward[index].dateOfAward.getTime() + 8 * 1000 * 3600);
          }
          this.$refs[formName][index].validate((valid) => {
            if (!valid) {
              flag = false;
            } else {
              this.$axios({
                method: 'post',
                url: '/award',
                data: this.$data.formsAward[index]
              }).then(function (response) {
                _this.$message({
                  message: '成功保存，进入下一步填写',
                  type: 'success'
                })
                _this.$data.formsAward.splice(index, 1, response.data);
              })
            }
          })
        }

        if (flag === true) {
          this.$router.push('/ResumeForm/8')
        }
      }
    },
    addOne () {

      this.$data.formsAward.push({
        id: null,
        resumeId: '',
        awardName: '',
        dateOfAward: null
      })
    },
    deleteOne (num,index) {
      let _this = this
      console.log(this.$data.formsAward)
      if (num === null) {
        this.$data.formsAward.splice(index, 1)
        return
      }
      this.$axios({
        method: 'delete',
        url: '/award/' + num
      }).then(function (response) {
        _this.$data.formsAward.splice(index, 1)
      })
    },
    saveOne (index,formName) {
      let flag=true;
      if(this.$data.formsAward[index].dateOfAward!==null) {
        this.$data.formsAward[index].dateOfAward = new Date(this.$data.formsAward[index].dateOfAward);
        this.$data.formsAward[index].dateOfAward.setTime(this.$data.formsAward[index].dateOfAward.getTime() + 8 * 1000 * 3600);
      }
      this.$refs[formName][index].validate((valid)=>{       //对表单循环进行验证
        if(!valid){
          flag=false;
        }
      })

      if(flag===true){
        let _this = this
        this.$axios({
          method: 'post',
          url: '/award',
          data: this.$data.formsAward[index]
        }).then(function (response) {
          _this.$message({
            message: '此次经历保存成功',
            type: 'success'
          })
          _this.$data.formsAward.splice(index, 1, response.data)
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
