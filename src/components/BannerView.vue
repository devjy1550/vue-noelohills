<template>
  <!-- 상단 배너 -->
  <div class="banner">

    <Swiper :modules="modules" :autoplay="{delay:2000, disableOnInteraction:false,}" :loop="true" :pagination= "{el:'.sw-banner-pgnt'}" @swiper="onSwiper" :effect="'fade'" :speed="1000" 
      @slideChange="onSlideChange" class="sw-banner">

      <SwiperSlide class="swiper-slide"><a href="#" class="banner-1"></a></SwiperSlide>
      <SwiperSlide class="swiper-slide"><a href="#" class="banner-2"></a></SwiperSlide>
      <SwiperSlide class="swiper-slide"><a href="#" class="banner-3"></a></SwiperSlide>


      <!-- 슬라이드 컨트롤 -->
      <div class="sw-banner-control">
        <!-- 그냥 페이지네이션만 넣는게아니라 control 등의 div로 한번더 깜싸주는게 좋음 -->
        <div class="sw-banner-pgnt"></div>
      </div>
      <button class="banner-close"></button>
    </Swiper>


    <!-- <div class="swiper-container sw-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="#" class="banner-1"></a></div>
        <div class="swiper-slide"><a href="#" class="banner-2"></a></div>
        <div class="swiper-slide"><a href="#" class="banner-3"></a></div>
      </div> -->
    <!-- 슬라이드 컨트롤 -->
    <!-- <div class="sw-banner-control"> -->
    <!-- 그냥 페이지네이션만 넣는게아니라 control 등의 div로 한번더 깜싸주는게 좋음 -->
    <!-- <div class="sw-banner-pgnt"></div> -->
    <!-- </div> -->
    <!-- </div> -->


    <!-- <button class="banner-close"></button> -->
  </div>
</template>

<script>
  import {
    Autoplay, Pagination, EffectFade
  } from 'swiper';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';

  import {
    onMounted,
    ref
  } from 'vue';
  import $ from 'jquery';


  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      // 화면에  html의 구성이 완료되면
      onMounted(() => {

        // // 스크롤시 헤더고정 
        // let header = $('.header');
        // let wrap = $('.wrap');

        // 사라지는 시점 px 값
        // banner 의 높이값 px
        let finY = ref(0);
        finY.value = $('.banner').height();

        // $(window).scroll(function () {
        //   // 스크롤바의 세로상단 px값
        //   let temp = $(window).scrollTop();
        //   // 50은 banner의 높이값 px
        //   if (temp > finY.value) {
        //     header.addClass('header-fix');
        //     wrap.addClass('wrap-fix');
        //   } else {
        //     header.removeClass('header-fix');
        //     wrap.removeClass('wrap-fix');
        //   }
        // });



        // 상단배너닫기기능
        let banner_close = $('.banner-close');
        banner_close.click(function () {
          // 배너가 보여지지않으므로 값을 제거
          finY.value = 0;
          $('.banner').slideUp(300);
        });



        //상단 배너 슬라이드
        // new Swiper('.sw-banner', {
        //   loop: true,
        //   // 자동넘기기
        //   autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   },
        //   //fade 효과 (swiper demo 확인)
        //   effect: "fade",
        //   // pagenation (swiper demo 확인 클릭가능)
        //   pagination: {
        //     el: '.sw-banner-pgnt',
        //     clickable: true,
        //   },
        //   //touchMove 불가능하게만들기
        //   allowTouchMove: false,
        // });


      })

      return {
        modules: [Autoplay, Pagination, EffectFade]
      }
    }

  }
</script>

<style>
  .banner {
    position: relative;
    display: block;
    height: 50px;
    background-color: yellow;
  }

  .banner .sw-banner {
    width: 100%;
    height: 100%;
  }

  .banner .sw-banner .swiper-slide a {
    position: relative;
    display: block;
    height: 100%;
  }

  .banner .sw-banner .swiper-slide a.banner-1 {
    background: url("@/assets/noelohills/images/banner_pc_1.jpg") no-repeat center;
  }

  .banner .sw-banner .swiper-slide a.banner-2 {
    background: url("@/assets/noelohills/images/banner_pc_2.jpg") no-repeat center;
  }

  .banner .sw-banner .swiper-slide a.banner-3 {
    background: url("@/assets/noelohills/images/banner_pc_3.jpg") no-repeat center;
  }

  .banner .sw-banner .sw-banner-control {
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    z-index: 9;
  }

  .banner .sw-banner .sw-banner-control .sw-banner-pgnt .swiper-pagination-bullet {
    width: 10px;
    height: 4px;
    border-radius: 0;
    background-color: #fff;
    opacity: 0.4;
    margin: 0 2px;
  }

  .banner .sw-banner .sw-banner-control .sw-banner-pgnt .swiper-pagination-bullet-active {
    width: 20px;
    height: 4px;
    opacity: 1;
  }

  .banner .banner-close {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 32px;
    height: 32px;
    border: 0;
    background: url("@/assets/noelohills/images/x_icon.png") no-repeat center;
    z-index: 9;
    cursor: pointer;
  }
</style>