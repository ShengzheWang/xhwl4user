<template>
  <div id="PostCard">
    <el-card v-for="item in cardInfo" class="box-card animated zoomIn"
             v-bind:style="'margin-top:2%;width:100%;background-color:#f6f6f6;animation-delay:'+(item.index+4)*0.2+'s'">
      <div>
        <span style="font-size:25px;font-weight: bold" class="name"><i class="el-icon-document"/> {{item.name}}</span>
        <span style="font-size:18px;" class="name">  | {{item.direction}}</span>
        <span style="float:right;font-size:25px;opacity: 0.35;"><i class="el-icon-menu"/> {{item.kinds}}</span>
      </div>

      <div style="height:20px;" class="blank"></div>

      <div class="brief" style="font-weight:normal;font-size:15px;">
        <div style="margin-top: 1%">
          <i class="el-icon-location"/><a style="font-size: 20px">      工作地点：{{item.address}}</a>
        </div>
        <div style="margin-top: 1%">
          <i class="el-icon-location-outline"/><a  style="font-size: 20px">      所属部门：{{item.department}}</a>
        </div>
      </div>

      <div style="height:20px;" class="blank"></div>
      <div id="details" style="font-weight:normal;font-size:15px;">

        <el-collapse-transition>
          <div v-if="item.Ashow" >
            <div style="margin-top: 1%">
              <div style="display:block">
              <img src="../assets/responsibility.png">
              <a style="font-size: 20px">岗位描述：</a>
              </div>
              <div style="display: block;margin-top: 1%;margin-left:120px">
              <a style="white-space:pre-wrap">{{item.responsibility}}</a>
              </div>
            </div>
            <div style="margin-top: 1%">
              <div style="display:block">
                <img src="../assets/requirement.png">
                <a style="font-size: 20px">岗位要求：</a>
              </div>
              <div style="display: block;margin-top: 1%;margin-left:120px">
                <a style="white-space:pre-wrap">{{item.requirement}}</a>
              </div>
            </div>
          </div>

        </el-collapse-transition>
      </div>
      <el-button-group style="position: relative;margin-bottom:2%;margin-top: 2%;float: right" >
        <el-button type="primary" round icon="el-icon-message">立即投递</el-button>
        <el-button type="info"  round  @click="item.Ashow=!item.Ashow;"
                   :icon="item.Ashow?'el-icon-arrow-up':'el-icon-arrow-down'" >{{item.Ashow?'收起详情':'查看详情'}}</el-button>
      </el-button-group>
    </el-card>
  </div>
</template>

<script>
import ElCard from 'element-ui/packages/card/src/main'
import ElButtonGroup from '../../node_modules/element-ui/packages/button/src/button-group.vue'

export default {
  components: {
    ElButtonGroup,
    ElCard},
  data () {
    return {
      cardInfo: [{
        index: 0,
        Ashow: false,
        name: '后端开发',
        address: '厦门',
        number: 5,
        direction: '研发类',
        date: '2018-3-5',
        kinds: '实习生',
        education: '本科',
        department: '设计研发部',
        responsibility: '1、负责研发/测试工程效率工具的开发和维护工作\n' +
        '2、负责CI相关工具开发和维护工作\n' +
        '3、负责测试环境管理和环境部署自动化工具的开发工作\n' +
        '4、负责其他相关工具开发和维护工作',
        requirement: '1、计算机基础知识扎实，掌握数据结构、操作系统、网络、数据库知识\n' +
        '2、至少精通PHP或者Java其中之一，有项目经验\n' +
        '3、熟悉linux环境，能够熟练使用Linux常用命令，能够基于Linux开发和部署项目\n' +
        '4、熟练掌握至少一门脚本语言python/ruby/shell，能用脚本编写简单工具\n' +
        '5、非常热爱互联网及其相关技术\n'
      }, {
        index: 1,
        Ashow: false,
        name: '后端开发',
        address: '厦门',
        number: 5,
        direction: '研发类',
        date: '2018-3-5',
        kinds: '实习生',
        education: '本科',
        department: '设计研发部',
        responsibility: '1、负责研发/测试工程效率工具的开发和维护工作\n' +
        '2、负责CI相关工具开发和维护工作\n' +
        '3、负责测试环境管理和环境部署自动化工具的开发工作\n' +
        '4、负责其他相关工具开发和维护工作',
        requirement: '1、计算机基础知识扎实，掌握数据结构、操作系统、网络、数据库知识\n' +
        '2、至少精通PHP或者Java其中之一，有项目经验\n' +
        '3、熟悉linux环境，能够熟练使用Linux常用命令，能够基于Linux开发和部署项目\n' +
        '4、熟练掌握至少一门脚本语言python/ruby/shell，能用脚本编写简单工具\n' +
        '5、非常热爱互联网及其相关技术\n'
      }]
    }
  },
  methods: {}

}
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }

</style>
