<template>

  <div id="AboutUs" style="text-align: center">
    <!-- <img src="../../../static/img/aboutUs.jpg" style="width: 70%"> -->
    <!-- <img src="../../../static/img/aboutUs.jpg" style="width: 70%"> -->
    <!-- <img v-lazy="" style="width: 70%"> -->
    <!-- <img v-lazy="../../../static/img/2.jpg" style="width: 70%">
    <img v-lazy="../../../static/img/3.jpg" style="width: 70%"> -->
    <ul id="container" style="font-size: 0px;">
     <li v-for="img in list" style="width: 70%;margin:0 auto;background: #ffffff">
       <img v-lazy="img" style="max-width: 100%;background: #ffffff">
     </li>
   </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      list: [
        '../../../static/img/aboutUs/1.jpg',
        '../../../static/img/aboutUs/2.jpg',
        '../../../static/img/aboutUs/3.jpg',
        '../../../static/img/aboutUs/4.jpg',
        '../../../static/img/aboutUs/5.jpg',
        '../../../static/img/aboutUs/6.jpg',
        '../../../static/img/aboutUs/7.jpg',
        '../../../static/img/aboutUs/8.jpg',
        '../../../static/img/aboutUs/9.jpg',
        '../../../static/img/aboutUs/10.jpg',
        '../../../static/img/aboutUs/11.jpg',
        '../../../static/img/aboutUs/12.jpg',
        '../../../static/img/aboutUs/13.jpg',
        '../../../static/img/aboutUs/14.jpg',
        '../../../static/img/aboutUs/15.jpg',
        '../../../static/img/aboutUs/16.jpg',
        '../../../static/img/aboutUs/17.jpg',
        '../../../static/img/aboutUs/18.jpg',
        '../../../static/img/aboutUs/19.jpg',
        '../../../static/img/aboutUs/20.jpg',
        {
          src: ''
        }
      ]
    }
  },
  method:{
  },
  mounted () {
//    var banenr1 = new FragmentBanner({
//      container: '#banner4aboutUs',
//      imgs: ['../../../static/img/aboutUs.jpg'],
//      size: {
//        width : document.body.scrollWidth*0.7,
//        height : document.body.scrollWidth*0.7*8.212
//      },//容器的大小 可选
//      //行数与列数 可选
//      grid : {
//        line : 16,
//        list : 2
//      },
//      index: 0,//图片集合的索引位置 可选
//      type : 2,//切换类型 1 ， 2 可选
//      boxTime : 5000,//小方块来回运动的时长 可选
//      fnTime: 10000
//    })
  }
}
</script>
<style>
</style>
