<template>
  <div>
    <div style="margin:0 auto;text-align:center;">
      <el-button-group>
        <el-button @click="type='A'" size="medium" style="background-color: #1db0d8;color:white;height:60px;border-color: white;width:180px;font-size:23px;">走进兴海</el-button>
        <el-button @click="type='B'" size="medium" style="background-color: #37c6c0;color:white;height:60px;border-color: white;width:160px;font-size:23px;">兴海文化</el-button>
        <el-button @click="type='C'" size="medium" style="background-color: #d0e9ff;color:white;height:60px;border-color: white;width:160px;font-size:23px;">兴海生活</el-button>
      </el-button-group>
    </div>
    <div class="header-image" style="width:100%">
      <div v-if="type === 'A'" class="animated fadeIn"><img style="width:100%;" src="./../assets/ab-b5.jpg"/></div>
      <div v-else-if="type === 'C'" class="animated slideInRight"><img style="width: 100%" src="./../assets/ab-b4.jpg"/></div>
      <div v-else-if="type === 'B'" class="animated fadeInRight"><img style="width:100%;" src="./../assets/ab-b3.jpg"/></div>
    </div>

    <div class="line" style="height:15px;"></div>

    <div class="toXHWL" v-if="type==='A'" style="width: 80%;margin: auto;">
      <div>
          <span style="font-size:40px;"><i style="color:red" class="el-icon-d-arrow-right"/> 兴海物联有限公司</span>
      </div>
      <div style="height:20px;"></div>
     <about-enterprise></about-enterprise>
    </div>

    <div class="life" v-if="type==='B'" style="width: 80%;margin: auto;">
      <div>
        <span style="font-size:40px;"><i style="color:red" class="el-icon-d-arrow-right"/> 兴海文化</span>
      </div>
      <div style="height:15px;"></div>
      <div style="width:70%;left:35%;margin:auto;font-size:20px;">
        {{culture}}
      </div>

    </div>

    <div class="life" v-if="type==='C'" style="width: 80%;margin: auto;">
      <div>
        <span style="font-size:40px;"><i style="color:red" class="el-icon-d-arrow-right"/> 兴海生活</span>
      </div>
      <div style="height:15px;"></div>
      <div style="width:70%;left:35%;margin:auto;font-size:20px;">
        {{life}}
      </div>



    </div>


  </div>
</template>

<script>
  import AboutEnterprise from './AboutEnterprise'

  export default {
    name: "about-us",
    data(){
      return{
     type:'A',
        culture:'我们的文化是',
        life:'在我们这的生活fffffffffffffffffffff'
    }
    },
    components:{
      AboutEnterprise
    }
  }
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .zi{
    font-size:20px;
  }
</style>
