<template>
  <a :href="vlink" class="sw-visual01">

    <!-- <div class="visual-img bg" :style="{backgroundImage :'url('+ image + ')'}"  -->

    <div class="visual-img bg" :style="{backgroundImage:'url(' + require(`@/assets/noelohills/images/${vimg}`) + ')'}">
    <!-- <div class="visual-img bg" :style="{backgroundImage :'url('+ image + ')'}"  -->
 
    </div>
    <div class="visual-text">
      <h3 class="visual-title">{{vtitle}}</h3>
      <span class="visual-desc" v-html="vdesc"></span>
      <button class="visual-btn">{{vbt}}</button>
    </div>
  </a>
</template>

<script>
  export default {
    props: ['vimg', 'vtitle', 'vdesc', 'vbt', 'vlink'],

    setup() {

      return {}
    }
  }
</script>

<style>
  .bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>