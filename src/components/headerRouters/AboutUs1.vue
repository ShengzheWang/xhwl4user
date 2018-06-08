<template>
  <div id="AboutUs" style="text-align: center">
    <!-- <img src="../../../static/img/aboutUs.jpg" style="width: 70%"> -->
    <!-- <img src="../../../static/img/aboutUs.jpg" style="width: 70%"> -->
    <!-- <img v-lazy="" style="width: 70%"> -->
    <!-- <img v-lazy="../../../static/img/2.jpg" style="width: 70%">
    <img v-lazy="../../../static/img/3.jpg" style="width: 70%"> -->
    <ul id="container">
     <li v-for="img in list">
       <img v-lazy="img" style="width: 100%; height: 600px;">
     </li>
   </ul>
  </div>
</template>
<script>
export default{
  data () {
    return {
      list: [
        '../../../static/img/1.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
        '../../../static/img/2.jpg',
        '../../../static/img/3.jpg',
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
