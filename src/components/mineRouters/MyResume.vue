<template>
  <div ref="c" id="MyResume" style="height: 500px;width: 1300px;margin:0% auto;" v-loading="loading">
    <h1 v-bind:class="'animated fade'+show2" style="animation-delay:0.6s;width: 1100px;margin:5% auto"> 你还未创建过简历，请单击你想创建的简历类型开始填写简历</h1>
    <div style="height: 350px;width: 1100px;margin:5% auto">
      <el-tooltip class="item" effect="dark" content="创建社会招聘简历" placement="top-end" >
      <div @click="createAResume(1)" v-bind:class="'animated bounce'+show" id="circle1"
           v-bind:style="'animation-delay:'+time[0]+'s'">
        <img
          src="../../../static/img/social.png">
      </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="创建校园招聘简历" placement="top-end">
      <div @click="createAResume(2)" v-bind:class="'animated bounce'+show" id="circle2"
           v-bind:style="'animation-delay:'+time[1]+'s'">
        <img
          src="../../../static/campus.png">
      </div>
      </el-tooltip>
        <el-tooltip class="item" effect="dark" content="创建实习生招聘简历" placement="top-end">
      <div @click="createAResume(3)" v-bind:class="'animated bounce'+show" id="circle3"
           v-bind:style="'animation-delay:'+time[2]+'s'">
        <img
          src="../../../static/img/trainee.png" style="height: auto;width: auto">
      </div>
        </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyResume',
  beforeCreate () {
    let _this = this
    this.$axios({
      method: 'get',
      url: '/resume'
    }).then(function (response) {
      console.log(response.data)
      if (response.data.id === null) {
      } else {
        _this.$router.push({ name: 'ResumeForm', params: {
          resumes_form_selected: response.data.resumesForm.toString(),
          resumesId: response.data.id.toString()
        } })
      }
    })
  },
  mounted () {
    this.$data.loading = false
  },
  data () {
    return {
      show: 'In',
      show2: 'In',
      loading: true,
      activeIndex: '1',
      time: [0.3, 0.5, 0.7],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      formLabelWidth: '14%',
      labelPosition: 'left',
      labelPosition1: 'left',
      Need2Login: false,
      mine: [{path: '', text: '个人中心'},
        {path: '/MyResume', text: '我的简历'},
        {path: '', text: '我的应聘'}]

    }
  },
  methods: {
    createAResume (whichOne) {
      switch (whichOne) {
        case 1:break
        case 2:this.$data.time = [0.2, 0, 0.4]
          break
        case 3:this.$data.time = [0.2, 0.4, 0]
          break
      }
      this.$data.show = 'OutRight'
      this.$data.show2 = 'Out'
      this.$axios({
        method: 'put',
        url: '/resume?form=' + whichOne
      }).then(function (response) {
        setTimeout(() => {
          this.$router.push({ name: 'ResumeForm', params: {resumes_form_selected: whichOne.toString()} })
        }, 1000)
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #MyResume {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
    #circle1{
      display:inline-block;
      width:300px;
      height:300px;
      border-radius:300px;
      background:url(../../../static/img/plus.png)no-repeat;
      background-size: 100% 100%;
      transition: all 0.6s;
      &:hover{
      width: 320px;
      height: 320px;
    }
    }
    #circle2{
      display:inline-block;
      width:300px;
      height:300px;
      background:url(../../../static/img/plus.png)no-repeat;
      background-size: 100% 100%;
      border-radius:300px;
      position:relative;
      left:100px;
      transition: all 0.6s;
      &:hover{
        width: 320px;
        height: 320px;
      }
    }
    #circle3{
      display:inline-block;
      width:300px;
      height:300px;
      background:url(../../../static/img/plus.png)no-repeat;
      background-size: 100% 100%;
      border-radius:300px;
      position:relative;
      left:200px;
      transition: all 0.6s;
      &:hover{
      width: 320px;
      height: 320px;
    }
    }
  }

</style>
