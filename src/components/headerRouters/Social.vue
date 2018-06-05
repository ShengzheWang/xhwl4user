<template>
  <div id="Social">
    <div class="block">
      <div style="position:absolute;width: 100%;top:70px;background:#0a0a0a ">
         <img style="width: 100%" src="../../../static/img/post-2.jpg"/>
      </div>
    <div style="width: 60%;margin:0% auto;height: auto">
      <selector  resume-form="2" @ChangeSearch="ChangePositions"  v-bind:classChosen="classChosen" v-bind:postChosen="postChosen" v-bind:placeChosen="placeChosen"></selector>
      <post-card resume-form="2"  v-bind:classChosen="classChosen" v-bind:postChosen="postChosen" v-bind:placeChosen="placeChosen" ></post-card>
    </div>
      <!--<el-switch-->
      <!--v-model="value3"-->
      <!--active-text="校园招聘"-->
      <!--inactive-text="社会招聘" style="margin-top: 3%;margin-left:1%">-->
      <!--</el-switch>-->
  </div>
  </div>
</template>

<script>
import Selector from '../miniComponents/Selector.vue'
import PostCard from '../miniComponents/PostCard.vue'
export default {
  name: 'Social',
  watch:{
    '$route':function () {
      this.$data.classChosen=this.$route.query.typeChosen;
      this.$data.postChosen=this.$route.query.positionName;
      this.$data.placeChosen=this.$route.query.placeChosen;
    }
  },
  created () {
    let _this = this
    if(this.$route.query.typeChosen){
      this.$data.classChosen=this.$route.query.typeChosen
    }
    if(this.$route.query.positionName){
      this.$data.postChosen=this.$route.query.positionName
    }
    if(this.$route.query.placeChosen){
      this.$data.placeChosen=this.$route.query.placeChosen
    }
  },
  data () {
    return {
      postChosen: '',
      classChosen: '',
      placeChosen: '',
      items: [
        {text: '展示示例一'},
        {text: '展示示例二'},
        {text: '展示示例三'},
        {text: '展示示例四'}
      ],
      places: [
        {text: '深圳'},
        {text: '全部'}
      ],
      classes: [
        {text: '研发'},
        {text: '设计'},
        {text: '产品'},
        {text: '全部'}
      ],
      posts: [
        {text: '校园招聘'},
        {text: '社会招聘'},
        {text: '实习生招聘'}
      ]

    }
  },
  methods: {
    ChangePositions(data){
      this.$data.classChosen=data.classChosen;
      this.$data.postChosen=data.postChosen;
      this.$data.placeChosen=data.placeChosen;
    }

  },
  components: {Selector, PostCard}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
