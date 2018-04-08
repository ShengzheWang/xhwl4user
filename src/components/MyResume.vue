<template>
  <div ref="c" id="MyResume" style="height: 500px;width: 1300px;margin:0% auto;">
    <h1 v-bind:class="'animated fade'+show2" style="animation-delay:0.6s;width: 1100px;margin:5% auto"> 你还未创建过简历，请单击你想创建的简历类型开始填写简历</h1>
    <div style="height: 350px;width: 1100px;margin:5% auto">
      <el-tooltip class="item" effect="dark" content="创建社会招聘简历" placement="top-end" >
      <div @click="createAResume()" v-bind:class="'animated bounce'+show"
           style="display:inline-block;width:300px; height:300px; border-radius:300px;background:url(../../static/plus.png)no-repeat;background-size: 100% 100%">
        <img
          src="../../static/social.png">
      </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="创建校园招聘简历" placement="top-end">
      <div @click="createAResume()" v-bind:class="'animated bounce'+show"
           style=" animation-delay:0.2s;display:inline-block;width:300px; height:300px; background:url(../../static/plus.png)no-repeat;background-size: 100% 100%; border-radius:300px;position:relative;left:100px">
        <img
          src="../../static/campus.png">
      </div>
      </el-tooltip>
        <el-tooltip class="item" effect="dark" content="创建实习生招聘简历" placement="top-end">
      <div @click="createAResume()" v-bind:class="'animated bounce'+show"
           style=" animation-delay:0.4s;display:inline-block;width:300px; height:300px; background:url(../../static/plus.png)no-repeat;background-size: 100% 100%; border-radius:300px;position:relative;left:200px">
        <img
          src="../../static/trainee.png">
      </div>
        </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyResume',
  data () {
    return {
      show: 'In',
      show2: 'In',
      activeIndex: '1',
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
    createAResume () {
      this.$data.show = 'OutRight'
      this.$data.show2 = 'Out'
      setTimeout(() => {
        this.$router.push('/ResumeForm/1')
      }, 1000)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  MyResume {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
