<template>
  <div id="XhwlFooter" :class="setPosition === true ? 'setPosition': ''">
    <div class="footer">
      <div class="wrap">
        <ul class="friend-link">
          <li><a  target="_blank">兴海物联
            官方网站</a></li>
          <li>|</li>
          <li><a target="_blank">中建集团</a></li>
          <li>|</li>
          <li><a target="_blank">校园团队</a></li>
        </ul>
      </div>
      <div style="text-align: center;width: 100%">
      <a class="copyright"
         >Copyright © 2004-2015  兴海物联 版权所有</a>
    </div>
    </div>
  </div>
</template>
<script>
import { winHeight } from '@/util'
export default {
  name: 'XhwlFooter',
  data() {
    return{
      minHeight: 0,
      setPosition: false
    }
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', () => {
      this.resize()
    })
  },
  methods: {
    resize() {
      // console.log(121)
      var height1 = window.innerHeight
      var height2 = document.body.scrollHeight
      console.log('height', height1, height2)
      if (height1 === height2) {
        this.setPosition = true
      } else {
        this.setPosition = false
      }
    },
  },
  watch: {
    $route(to, from) {
      this.resize()
    }
  }
}
</script>
<style scoped>
  XhwlFooter {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
  #XhwlFooter.setPosition{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 200px;
    width: 100%;
    background: red;
  }

</style>
