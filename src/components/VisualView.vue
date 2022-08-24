<template>
  <!-- 비쥬얼 -->
  <section class="visual">
    <Swiper
    :modules="modules"
    :autoplay="{delay:2000, disableOnInteraction:false,}" 
    :loop="true"
    @swiper="onSwiper" 
    @slideChange="onSlideChange" 
    class="sw-visual">
      <!-- : 은 v-bine 생략   @는 v-on 생략 -->
      <swiper-slide class="swiper-slide" v-for="(item, index) in slideData" v-bind:key="index">
        <Visuallist
        :vimg="item.vimg"
        :vtitle="item.vtitle"
        :vdesc="item.vdesc"
        :vbt="item.vbt"
        :vlink="item.vlink"/>
      </swiper-slide>
      <!-- <swiper-slide class="swiper-slide">
        <a href="" class="sw-visual02"> 
          <div class="visual-img visual02"></div>
          <div class="visual-text">
            <h3 class="visual-title">SPECIAL OFFER</h3>
            <span class="visual-desc">노엘로힐스가 제안하는<br>아기 스킨케어 출산준비물</span>
            <button class="visual-btn">SHOP</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <a href="" class="sw-visual03">
          <div class="visual-img visual03"></div>
          <div class="visual-text">
            <h3 class="visual-title">밀크 에센스 로션</h3>
            <span class="visual-desc">국내 최초 100%<br>식품 그레이드 성분</span>
            <button class="visual-btn">SHOP</button>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <a href="" class="sw-visual04">
          <div class="visual-img visual04"></div>
          <div class="visual-text">
            <h3 class="visual-title">8:23 PM</h3>
            <span class="visual-desc">가족에게 행복을 선사하는<br>스킨케어 라이프스타일 브랜드</span>
            <button class="visual-btn">SHOP</button>
          </div>
        </a>
      </swiper-slide> -->
    </Swiper>



    <!-- <div class="swiper-container sw-visual"> -->
      <!-- 슬라이드내용
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Visuallist />
        </div>
        <div class="swiper-slide"><a href="" class="sw-visual02">
            <div class="visual-img visual02"></div>
            <div class="visual-text">
              <h3 class="visual-title">SPECIAL OFFER</h3>
              <span class="visual-desc">노엘로힐스가 제안하는<br>아기 스킨케어 출산준비물</span>
              <button class="visual-btn">SHOP</button>
            </div>
          </a>
        </div>
        <div class="swiper-slide"><a href="" class="sw-visual03">
            <div class="visual-img visual03"></div>
            <div class="visual-text">
              <h3 class="visual-title">밀크 에센스 로션</h3>
              <span class="visual-desc">국내 최초 100%<br>식품 그레이드 성분</span>
              <button class="visual-btn">SHOP</button>
            </div>
          </a>
        </div>
        <div class="swiper-slide"><a href="" class="sw-visual04">
            <div class="visual-img visual04"></div>
            <div class="visual-text">
              <h3 class="visual-title">8:23 PM</h3>
              <span class="visual-desc">가족에게 행복을 선사하는<br>스킨케어 라이프스타일 브랜드</span>
              <button class="visual-btn">SHOP</button>
            </div>
          </a>
        </div>
      </div> -->
      <!-- 슬라이드컨트롤 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pgnt"></div>
      </div>



  </section>
</template>

<script>
  import Visuallist from '@/components/VisuallistView.vue';
  
  import { Autoplay } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import {ref} from 'vue';

  export default {
    components: {
      Visuallist,
      Swiper,
      SwiperSlide
    },

    setup() {
      const slideData = ref([]);

      slideData.value = [
        {
          vimg : 'PC_minimal_new.png',
          vtitle : "미니멀비 출시",
          vdesc : "아이부터 어른까지<br />클린 포뮬러 저자극 케어",
          vbt : "SHOP",
          vlink : "#"
        },{
          vimg : 'PC1_newborn.png',
          vtitle : "SPECIAL OFFER",
          vdesc : "노엘로힐스가 제안하는<br />아기 스킨케어 출산준비물",
          vbt : "SHOP",
          vlink : "#"
        },{
          vimg : 'PC2_BabyEssence.png',
          vtitle : "밀크 에센스 로션",
          vdesc : "국내 최초 100%<br />식품 그레이드 성분",
          vbt : "SHOP",
          vlink : "#"
        },{
          vimg : 'PC3_Branding.png',
          vtitle : "8:23 PM",
          vdesc : "가족에게 행복을 선사하는<br />스킨케어 라이프스타일 브랜드",
          vbt : "SHOP",
          vlink : "#"
        }
    ];











      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');

      };
      return {
        onSwiper,
        onSlideChange,
        modules : [Autoplay],
        slideData
      }
    }
  }
</script>

<style>
  .visual {
    position: relative;
    display: block;
  }

  .visual .sw-visual {
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .swiper-slide a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .swiper-slide a .visual-img {
    position: relative;
    display: block;
    width: 100%;
    height: 600px;
  }

  @media all and (max-width: 1320px) {
    .visual .sw-visual .swiper-slide a .visual-img {
      height: 45vw;
    }
  }

  @media all and (max-width: 800px) {
    .visual .sw-visual .swiper-slide a .visual-img {
      height: 125vw;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-img.visual01 {
    background: url("@/assets/noelohills/images/PC_minimal_new.png") no-repeat center;
    background-size: cover;
  }

  @media all and (max-width: 800px) {
    .visual .sw-visual .swiper-slide a .visual-img.visual01 {
      background: url("@/assets/noelohills/images/M_minimal_new.png") no-repeat center;
      background-size: cover;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-img.visual02 {
    background: url("@/assets/noelohills/images/PC1_newborn.png") no-repeat center;
    background-size: cover;
  }

  @media all and (max-width: 800px) {
    .visual .sw-visual .swiper-slide a .visual-img.visual02 {
      background: url("@/assets/noelohills/images/M1_newborn.png") no-repeat center;
      background-size: cover;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-img.visual03 {
    background: url("@/assets/noelohills/images/PC2_BabyEssence.png") no-repeat center;
    background-size: cover;
  }

  @media all and (max-width: 800px) {
    .visual .sw-visual .swiper-slide a .visual-img.visual03 {
      background: url("@/assets/noelohills/images/M2_BabyEssence.png") no-repeat center;
      background-size: cover;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-img.visual04 {
    background: url("@/assets/noelohills/images/PC3_Branding.png") no-repeat center;
    background-size: cover;
  }

  @media all and (max-width: 800px) {
    .visual .sw-visual .swiper-slide a .visual-img.visual04 {
      background: url("@/assets/noelohills/images/M3_Branding.png") no-repeat center;
      background-size: cover;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-text {
    position: relative;
    display: block;
    text-align: center;
    padding: 25px 0;
  }

  @media all and (max-width: 1320px) {
    .visual .sw-visual .swiper-slide a .visual-text {
      padding: 2vw 0;
    }
  }

  .visual .sw-visual .swiper-slide a .visual-text .visual-title {
    position: relative;
    display: block;
    font-size: 30px;
    color: #777;
    margin-bottom: 35px;
    font-weight: 500;
  }

  .visual .sw-visual .swiper-slide a .visual-text .visual-desc {
    position: relative;
    display: block;
    font-size: 20px;
    color: #777;
    margin-bottom: 20px;
  }

  .visual .sw-visual .swiper-slide a .visual-text .visual-btn {
    position: relative;
    display: block;
    margin: 0 auto;
    font-size: 20px;
    color: #fff;
    background-color: #ffcf42;
    padding: 15px 20px;
    border: 0;
    cursor: pointer;
  }

  .visual .sw-visual .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 550px;
    display: block;
    z-index: 9;
  }

  @media all and (max-width: 1320px) {
    .visual .sw-visual .sw-visual-control {
      top: 41.6vw;
    }
  }

  @media all and (max-width: 800vw) {
    .visual .sw-visual .sw-visual-control {
      top: 112.5vw;
    }
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pgnt .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
    margin: 0 4px;
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pgnt .swiper-pagination-bullet-active {
    background-color: #ffcf42;
  }
</style>