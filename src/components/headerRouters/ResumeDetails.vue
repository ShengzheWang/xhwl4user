<template>
  <div id="ResumeDetails">
    <div style="width: 100%;height: 470px;overflow:hidden;position:relative;vertical-align:middle;z-index: 5;;background:top rgba(19,118,190,0.3)">
      <div style="width: 100%;height:auto;z-index: 3">
      <img style="width:100%;top:-900px;position:absolute;left: 0px;z-index: 0" class="blur" v-if="imgUrl" :src="imgUrl">
      </div>
      <div style="z-index: 3;width: 100%;position: absolute;top:50px;">
        <div style="display: block;width:200px;margin:0 auto;color:#ffffff">
          <p style="font-size: 34px;text-align: center;margin: 20px 20px 0px 20px;font-weight: bolder">{{formBasic.name}}</p>
          <p style="font-size: 16px;text-align: center;margin: 0px 20px 20px 20px">-&nbsp; {{resumeType}}&nbsp; -</p>
        </div>
      </div>
    </div>

    <div class="block" v-loading="loading" style="width:100%;background: transparent;z-index: 999">
      <div style="width:75%;min-width:1200px;margin: -270px auto 0 auto;background: #ffffff;position:relative;z-index: 999;">
        <div class="resume-inner" style="text-align: center;">
          <div style="width: 80%;display: inline-block;vertical-align: top;text-align: left">
            <div style="width: 35%;display: inline-block">
              <h2 style="display: inline;color: #1476C1"><i class="icon iconfont icon-dianhua"></i> &nbsp;&nbsp;&nbsp;&nbsp;{{formBasicItem[5].info }}</h2>
              <div style="margin-top: 20px">
              <p class="resume-item-label">{{formBasicItem[0].label}}：</p>
              <p class="resume-item-info">{{formBasicItem[0].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[1].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[1].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[2].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[2].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[3].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[3].info}}</p>
              </div>

            </div>
            <div style="width: 64%;display: inline-block">
              <h2 style="display: inline;color: #1476C1"><i class="icon iconfont icon-youxiang"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{formBasicItem[4].info }}</h2>
              <div style="margin-top: 20px">
                <p class="resume-item-label">{{formBasicItem[6].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[6].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[7].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[7].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[8].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[8].info}}</p>
              </div>
              <div>
                <p class="resume-item-label">{{formBasicItem[9].label}}：</p>
                <p class="resume-item-info">{{formBasicItem[9].info}}</p>
              </div>
            </div>

          </div>
          <div style="width: 19%;display: inline-block;text-align: right">
            <img style="width:100% " v-if="imgUrl" :src="imgUrl"></div>
        </div>
        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:0;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">教育经历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div>
          <div v-if="formsEducation.length!=0" style="width:80%;margin: 0 auto 0 auto">
            <div v-for="item in formsEducation">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.school}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">
                {{item.speciality}}({{item.educationHistory==1?'高中':item.educationHistory==2?'专科':
                item.educationHistory==3?'本科':item.educationHistory==4?'研究生':item.educationHistory==5?'博士生':'博士后'}})</h1>
              <div style="width: 100%;margin:0 auto">
                <p class="resume-item-label-2">专业排名占比：</p>
                <p class="resume-item-info">{{item.rank}}%</p>
              </div>
            </div>
          </div>
          <div v-else style="width:80%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">培训经历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div>
          <div v-if="formsTraining.length!=0" style="width:80%;margin: 0 auto 0 auto">
            <div v-for="item in formsTraining">
              <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: center">
                培训机构：{{item.trainingContent}}</h1>
              <h1 class="resume-item-middle" style="width: 33%;text-align: right">
                培训内容：{{item.trainingInstitutions}}</h1>
              <div style="width: 100%;margin:0 auto;">
                <div style="display: inline-block">
                  <span class="resume-item-label-2">详细描述：</span>
                  <span class="resume-item-info" style="width: 924px;float: right;vertical-align: top;">{{item.description}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="width:80%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">培训经历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div>
          <div v-if="formsProject.length!=0" style="width:80%;margin: 0 auto 0 auto">
            <div v-for="item in formsProject">
              <h1 class="resume-item-middle" style="width: 49.5%">项目名称：{{item.projectName}}</h1>
              <h1 class="resume-item-middle" style="width: 49.5%;text-align: right">项目角色：{{item.projectRole}}</h1>
              <div style="width: 100%;margin:0 auto;height: auto">
                <div style="display: inline-block">
                  <span class="resume-item-label-2">详细描述：</span>
                  <span class="resume-item-info" style="width: 800px;float: right;vertical-align: top">{{item.projectDescription}}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="width:80%;margin: 0 auto 0 auto">
            <h1 class="resume-item-middle" style="width: 33%">无</h1>
          </div>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">工作经历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div v-if="formsWork.length!=0" style="width:80%;margin: 0 auto 0 auto">
          <div v-for="item in formsWork">
            <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
            <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.company}}</h1>
            <h1 class="resume-item-middle" style="width: 33%;text-align: right">{{item.position}}职位</h1>
          </div>
        </div>
        <div v-else style="width:80%;margin: 0 auto 0 auto">
          <h1 class="resume-item-middle" style="width: 33%">无</h1>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">实习经历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div v-if="formsTrainee.length!=0" style="width:80%;margin: 0 auto 0 auto">
          <div v-for="item in formsTrainee">
            <h1 class="resume-item-middle" style="width: 33%">{{item.startTime}}~{{item.endTime}}</h1>
            <h1 class="resume-item-middle" style="width: 33%;text-align: center">{{item.company}}</h1>
            <h1 class="resume-item-middle" style="width: 33%;text-align: right">{{item.position}}职位</h1>
          </div>
        </div>
        <div v-else style="width:80%;margin: 0 auto 0 auto">
          <h1 class="resume-item-middle" style="width: 33%">无</h1>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">奖励活动</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div v-if="formsRewards.length!=0" style="width:80%;margin: 0 auto 0 auto">
          <div v-for="item in formsRewards">
            <h1 class="resume-item-middle" style="width: 49.5%">{{item.dateOfAward}}</h1>
            <h1 class="resume-item-middle" style="width: 49.5%;text-align: right">{{item.awardName}}</h1>
          </div>
        </div>
        <div v-else style="width:80%;margin: 0 auto 0 auto">
          <h1 class="resume-item-middle" style="width: 33%">无</h1>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">求职意向</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div v-if="formIntention">
          <div style="width: 80%;margin:0 auto" v-if="formIntention.workPlace">
            <p class="resume-item-label-2">期望工作地点：</p>
            <p class="resume-item-info">{{formIntention.workPlace}}</p>
          </div>
          <div style="width: 80%;margin:0 auto" v-if="formIntention.salary">
            <p class="resume-item-label-2">期望薪资：</p>
            <p class="resume-item-info">{{formIntention.salary}}元/月</p>
          </div>
          <div style="width: 80%;margin:0 auto" v-if="formIntention.expectedTimeForDuty">
            <p class="resume-item-label-2">可到岗时间：</p>
            <p class="resume-item-info">{{formIntention.expectedTimeForDuty}}</p>
          </div>
        </div>
        <div v-else style="width:80%;margin: 0 auto 0 auto">
          <h1 class="resume-item-middle" style="width: 33%">无</h1>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">自我评价</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div  style="width:80%;margin: 40px auto 0 auto">
          <div style="width: 100%;margin:0 auto;height: auto">
            <div style="display: inline-block">
              <span class="resume-item-info" style="vertical-align: top;line-height: 2">{{selfAssessment}}</span>
            </div>
          </div>
        </div>

        <div style="width: 100%;display: inline-block;vertical-align: middle;text-align: left">
          <p style="margin-top:40px;margin-bottom:0;margin-left:-10px;display: inline-block;width:10%;font-size:30px;background:#38BDFF; color:#ffffff;padding: 10px 50px;border-radius: 0px 40px 40px 0px ">下载简历</p>
          <div style="height: 2px;width:80%;display: inline-block;padding:0px 0;">
            <div style="border-top: dashed 1px #38dbff;display: inline-block;width: 100%;height: 10px"></div>
          </div>
        </div>
        <div  style="width:80%;margin: 40px auto 0 auto">
          <div style="width: 100%;margin:0 auto">
            <p class="resume-item-label-2">简历：</p>
            <el-button type="text" class="resume-item-info" @click="downloadResume" size="small" disabled>下载链接</el-button>
          </div>
          <div style="width: 100%;margin:0 auto">
            <p class="resume-item-label-2">其他辅助材料：</p>
            <el-button type="text" class="resume-item-info" size="small" disabled>下载链接</el-button>
          </div>
        </div>
        <div style="height: 100px;width: 100%"></div>
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
        {label: '性别', name: 'sex', info: ''},
        {label: '证件类型', name: 'idType', info: ''},
        {label: '证件号码', name: 'idNumber', info: ''},
        {label: '出生日期', name: 'birthday', info: ''},
        {label: '邮箱', name: 'email', info: ''},
        {label: '联系方式', name: 'telephone', info: ''},
        {label: '婚姻状况', name: 'maritalStatus', info: ''},
        {label: '工作年限', name: 'workSeniority', info: ''},
        {label: '政治面貌', name: 'politicalStatus', info: ''},
        {label: '现居住地', name: 'presentAddress', info: ''}
      ],
      formBasic: {name: ''},
      resumeType: '',
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
      selfAssessment: ''
    }
  },
  created () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/resume'
    }).then(function (response) {
      console.log(response.data)
      if (response.data.id === undefined) {
      } else {
        _this.$data.resumeType = response.data.resumesForm === 1?'校园招聘':response.data.resumesForm === 2?'社会招聘':'实习生招聘'
      }
    })
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
        if(response.data.byteLength === 0 )
          return
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
  methods: {
    downloadResume(){
      this.$axios({ // 用axios发送post请求
        method: 'get',
        url: '/download-resume', // 请求地址
        // 参数
        responseType: 'blob' // 表明返回服务器返回的数据类型
      })
        .then((res) => { // 处理返回的文件流
          console.log(res)
//          const content = res
//          const blob = new Blob([content])
//          const fileName = '简历'
//          if ('download' in document.createElement('a')) { // 非IE下载
//            const elink = document.createElement('a')
//            elink.download = fileName
//            elink.style.display = 'none'
//            elink.href = URL.createObjectURL(blob)
//            document.body.appendChild(elink)
//            elink.click()
//            URL.revokeObjectURL(elink.href) // 释放URL 对象
//            document.body.removeChild(elink)
//          } else { // IE10+下载
//            navigator.msSaveBlob(blob, fileName)
//          }
        })
    },
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
      margin-top: 30px;
      margin-bottom: 15px;
    }
    .line {
      border: 1px solid #E01B2F;
      margin-bottom: 1%;
    }
    .iconfont{
      font-size: 24px;
    }
    h1{
      font-size: 24px;
    }
    .resume-item-label {
      display: inline-block;
      font-size: 14px;
      color: #707070;
      vertical-align: middle;
      line-height: 16px;
      width: 70px;
      text-align: left;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .resume-item-label-2 {
      display: inline-block;
      font-size: 14px;
      color: #707070;
      vertical-align: middle;
      line-height: 16px;
      width: 100px;
      text-align: left;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .resume-item-info {
      display: inline;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      vertical-align: middle;
      margin-top: 12px;
      margin-bottom: 12px;
      line-height: 1.8;
      padding: 0

    }
    .resume-inner{
      width: 80%;
      padding: 40px 10%;
    }
    .blur {
      z-index: 0;
      -webkit-filter: blur(10px); /* Chrome, Opera */
      -moz-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(10px);
    }
  }
</style>
