<template>
  <div id="ResumeDetails">
    <div class="block" v-loading="loading">
      <div style="width:1200px;margin: 0% auto 0 auto">
        <h1 class="resume-header">{{formBasic.name}} 简历预览</h1>
        <div>
          <h1 class="resume-item-header">个人信息</h1>
          <div class="line"></div>
          <div style="position: absolute;left: 60%;height:300px;">
          <img style="height:300px" v-if="imgUrl" :src="imgUrl">
          </div>
          <div style="width:90%;margin: 0% auto 0 auto">
            <h1 class="resume-item-middle">{{formBasic.name}}</h1>
            <div style="width: 95%;margin:0 auto">
              <div v-for="item in formBasicItem">
                <p class="resume-item-label">{{item.label}}：</p>
                <p class="resume-item-info">{{item.info}}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">教育经历</h1>
          <div class="line"></div>
          <div v-if="formsEducation.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsEducation">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.school}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">
                {{item.speciality}}({{item.educationHistory}})</h1>
              <div style="width: 95%;margin:0 auto">
                <p class="resume-item-label">专业排名占比：</p>
                <p class="resume-item-info">{{item.rank}}%</p>
              </div>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">培训经历</h1>
          <div class="line"></div>
          <div v-if="formsTraining.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsTraining">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">
                培训机构：{{item.trainingContent}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">
                培训内容：{{item.trainingInstitutions}}</h1>
              <div style="width: 95%;margin:0 auto;">
                <div style="display: inline-block">
                <span class="resume-item-label">详细描述：</span>
                <span class="resume-item-info" style="width: 924px;float: right;vertical-align: top;">{{item.description}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">项目经历</h1>
          <div class="line"></div>
            <div v-if="formsProject.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsProject">
              <h1 class="resume-item-middle" style="width: 49.5%">项目名称：{{item.projectName}}</h1>
              <h1 class="resume-item-middle" style="width: 49.5%;text-align: right">项目角色：{{item.projectRole}}</h1>
              <div style="width: 95%;margin:0 auto;height: auto">
                <div style="display: inline-block">
                <span class="resume-item-label">详细描述：</span>
                <span class="resume-item-info" style="width: 924px;float: right;vertical-align: top">{{item.projectDescription}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">工作经历</h1>
          <div class="line"></div>
          <div v-if="formsWork.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsWork">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.company}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">{{item.position}}职位</h1>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">实习经历</h1>
          <div class="line"></div>
          <div v-if="formsTrainee.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsTrainee">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.company}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">{{item.position}}职位</h1>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">奖励活动</h1>
          <div class="line"></div>
          <div v-if="formsRewards.length!=0" style="width:90%;margin: 0 auto 0 auto">
            <div v-for="item in formsRewards">
              <h1 class="resume-item-middle" style="width: 49.5%">{{item.dateOfAward}}</h1>
              <h1 class="resume-item-middle" style="width: 49.5%;text-align: right">{{item.awardName}}</h1>
            </div>
          </div>
          <div v-else style="width:90%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">工作意向</h1>
          <div class="line"></div>

              <div style="width: 95%;margin:0 auto">
                <p class="resume-item-label">期望工作地点：</p>
                <p class="resume-item-info">{{formIntention.workPlace}}</p>
              </div>
              <div style="width: 95%;margin:0 auto">
                <p class="resume-item-label">期望薪资：</p>
                <p class="resume-item-info">{{formIntention.salary}}元/月</p>
              </div>
              <div style="width: 95%;margin:0 auto">
                <p class="resume-item-label">可到岗时间：</p>
                <p class="resume-item-info">{{formIntention.expectedTimeForDuty}}</p>
              </div>
        </div>

        <div>
          <h1 class="resume-item-header">自我评价</h1>
          <div class="line"></div>
          <div  style="width:90%;margin: 40px auto 0 auto">
            <div style="width: 95%;margin:0 auto;height: auto">
              <div style="display: inline-block">
                <span class="resume-item-info" style="vertical-align: top">{{selfAssessment}}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 class="resume-item-header">下载附件</h1>
          <div class="line"></div>
          <div  style="width:90%;margin: 40px auto 0 auto">
            <div style="width: 95%;margin:0 auto">
              <p class="resume-item-label">简历：</p>
              <el-button type="text" class="resume-item-info" size="small">下载链接</el-button>
            </div>
            <div style="width: 95%;margin:0 auto">
              <p class="resume-item-label">其他辅助材料：</p>
              <el-button type="text" class="resume-item-info" size="small">下载链接</el-button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>


export default {
  components: {
  },
  name: 'ResumeDetails',
  data () {
    return {
      loading: true,
      formBasicItem: [
        {label: '性别', name: 'sex', info: '男'},
        {label: '证件类型', name: 'idType', info: '身份证'},
        {label: '证件号码', name: 'idNumber', info: '5107811998020589128'},
        {label: '出生日期', name: 'birthday', info: '1998-02-05'},
        {label: '邮箱', name: 'email', info: '1034298388@qq.com'},
        {label: '联系方式', name: 'telephone', info: '18859233971'},
        {label: '婚姻状况', name: 'maritalStatus', info: '未婚'},
        {label: '工作年限', name: 'workSeniority', info: '零'},
        {label: '政治面貌', name: 'politicalStatus', info: '团员'},
        {label: '现居住地', name: 'presentAddress', info: '厦门大学'}
      ],
      formBasic: {name: ''},
      imgUrl: null,
      formsEducation: [
//        {startTime: '2015-09-01', endTime: '2019-07-30', school: '厦门大学', speciality: '计算机', educationHistory: '本科', rank: '20'}
      ],
      formsTraining: [
//        {startTime: '2015-09-01', endTime: '2019-07-30', trainingContent: '蓝翔技校',trainingInstitutions: '烹饪', description: '在蓝翔技术学校认真学习了挖掘机,并且认真完成烹饪技术的培训，可以做回锅肉给大家吃啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'}
      ],
      formsProject: [
        //{projectName: '兴海物联校园团队', projectRole: '酱油小兵', projectDescription: '呀呀呀呀呀呀呀呀呀呀呀呀呀'}
      ],
      formsWork: [
//        {startTime: '2015-09-01', endTime: '2019-07-30', company: '兴海物联有限公司', position: '打杂'}
      ],
      formsTrainee: [
//        {startTime: '2015-09-01', endTime: '2019-07-30', company: '兴海物联有限公司', position: '打杂'}
      ],
      formsRewards: [
//        {dateOfAward: '2017-10-01', awardName: '小红花一枚'}
      ],
      formIntention: [
//        {workPlace: '深圳', salary: '20000', expectedTimeForDuty: '2019-10-10'}
      ],
      selfAssessment: '聪明可爱又伶俐'
    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/person'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formBasic = response.data
        console.log(response.data)
        _this.$data.formBasicItem[0].info = response.data.sex===1?'男':'女'
        _this.$data.formBasicItem[1].info = response.data.idType===1?'身份证':response.data.idType===2?'港澳台通行证':'护照'
        _this.$data.formBasicItem[2].info = response.data.idNumber
        _this.$data.formBasicItem[3].info = response.data.birthday
        _this.$data.formBasicItem[4].info = response.data.email
        _this.$data.formBasicItem[5].info = response.data.telephone
        _this.$data.formBasicItem[6].info = response.data.maritalStatus===1?'未婚':'已婚'
        _this.$data.formBasicItem[7].info = response.data.workSeniority
        _this.$data.formBasicItem[8].info = response.data.politicalStatus
        _this.$data.formBasicItem[9].info = response.data.presentAddress
      })
    })
    this.$axios.get(this.$axios.defaults.baseURL + '/download-photo',{
      responseType: 'arraybuffer'
    })
      .then(function (response) {
        console.log(response.data)
        _this.$data.imgUrl = 'data:image/png;base64,' + btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
      })
      .catch(function (error) {
        console.log(error)
      })
    this.$axios({
      method: 'get',
      url: '/education'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsEducation = response.data
      })
    })
    this.$axios({
      method: 'get',
      url: '/intention'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formIntention = response.data
      })

    })
    this.$axios({
      method:'get',
      url:'/project'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsProject=response.data;
      })
    })
    this.$axios({
      method: 'get',
      url: '/award'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsRewards = response.data
      })
    })
    this.$axios({
      method: 'get',
      url: '/selfAssessment'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.selfAssessment = response.data
      })
    })
    this.$axios({
      method: 'get',
      url: '/internship'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsTrainee = response.data
      })
    })
    this.$axios({
      method: 'get',
      url: '/training'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsTraining=response.data;
      })
    })
    this.$axios({
      method: 'get',
      url: '/work'
    }).then(function (response) {
      _this.$nextTick(() => {
        _this.$data.formsWork = response.data
        _this.$data.loading = false
      })
    })

  },
  method: {

    resumeDetails (num) {
      this.$router.push('/ResumeDetails')
    }
  }
}
</script>
<style lang="less">
  #ResumeDetails {
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
    .resume-header {
      text-align: center;
      font-size: 24px;
      color: #1376BE;
      letter-spacing: 1.71px;
    }
    .resume-item-header {
      font-size: 24px;
      color: #E01B2F;
      letter-spacing: 1.71px;
      margin-top: 23px;
    }
    .resume-item-middle {
      display: inline-block;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0;
      line-height: 16px;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .line {
      border: 1px solid #E01B2F;
      margin-bottom: 1%;
    }
    .resume-item-label {
      display: inline-block;
      font-size: 14px;
      color: #707070;
      vertical-align: middle;
      line-height: 24px;
      width: 100px;
      text-align: left;
    }
    .resume-item-info {
      display: inline;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0;
      line-height: 26px;
      vertical-align: middle
    }
  }
</style>
