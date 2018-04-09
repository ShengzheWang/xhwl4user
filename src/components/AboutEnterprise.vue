<template>
<div>
  <el-container>
    <el-aside width="20%" >
      <el-row class="tac" style="width:97%;">
        <el-col :span="12" style="width:97%;">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="width:100%;">
            <el-menu-item index="1" @click="AEshow='structure'">
              <span class="zi"><i class="el-icon-location"></i>企业结构</span>
            </el-menu-item>
            <el-menu-item index="2" @click="AEshow='history'">
              <span slot="title" class="zi"><i class="el-icon-menu"/>发展历史</span>
            </el-menu-item>
            <el-menu-item index="3" @click="AEshow='situation'">
              <span slot="title" class="zi"><i class="el-icon-document"/>企业现状</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-main>
      <!--企业历史-->
      <div class="history" v-if="AEshow==='history'">
      <div style="height:15px;"></div>
        <div class="title"><span style="font-size: 30px;"><i class="el-icon-d-arrow-right" style="color: red"/>企业历史</span></div>
      <div class="context">
        <p style="font-size:20px;">{{history}}</p></div>
      <div style="text-align: center"><img src="./../assets/XHWL.jpg"/></div>
      </div>

      <!--企业结构-->
      <div class="structure" v-if="AEshow==='structure'">
        <div style="height:15px;"></div>
        <div class="title"><span style="font-size: 30px;"><i class="el-icon-d-arrow-right" style="color: red"/>企业结构</span></div>
        <div class="context"></div>
      </div>

      <!--企业现状-->
      <div class="situation" v-if="AEshow==='situation'">
        <div style="height:15px;"></div>
        <div class="title"><span style="font-size: 30px;"><i class="el-icon-d-arrow-right" style="color:red;"/>企业现状</span></div>
        <div class="context">

        </div>
      </div>
    </el-main>
  </el-container>


</div>
</template>

<script>
    export default {
        name: "about-enterprise",
      data(){
        return {
          AEshow:'history',
          history:'中海物业集团有限公司（以下简称“中海物业”或“公司”）隶属于中国建筑工程总公司旗下中国海外集团，是中国首批一级资质物业管理企业。1986年，中海物业首间附属公司中海物业（香港）在香港注册成立，辅助并战略性配合中国海外发展在香港的房地产发展业务。公司自1991年起在中国内地开展物业管理业务。2015年10月23日，中海物业在香港联交所主板上市，股票代码：02669.HK。\n',
          structure:'',
          situation:''
        }
      }
    }
</script>

<style scoped>
.zi{
  font-size:20px;
}
</style>
