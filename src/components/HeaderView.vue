<template>
  <div class="header">
    <!-- 모바일버튼 -->
    <div class="inner">
      <div class="mb-btn"></div>
      <a href="" class="logo"></a>
      <div class="gnb">
        <!--
            <ul class="menu clearfix">
              <li><a href="">SHOP</a>
                <ul class="submenu">
                  <li><a href="">ALL PRODUCT</a></li>
                  <li><a href="">NEWBORN</a></li>
                  <li><a href="">BABY</a></li>
                  <li><a href="">FAMILY</a></li>
                  <li><a href="">BATH GOODS</a></li>
                  <li><a href="">PRESENTS</a></li>
                </ul>
              </li>
              <li><a href="">ABOUT</a>
                <ul class="submenu">
                  <li><a href="">BRAND STORY</a></li>
                  <li><a href="">WHO WE ARE</a></li>
                  <li><a href="">MAKE A WISH</a></li>
                  <li><a href="">PRESS</a></li>
                </ul>
              </li>
              <li><a href="">TRUST</a>
                <ul class="submenu">
                  <li><a href="">FOOD GRADE</a></li>
                  <li><a href="">PENTACERA<sup>TM</sup></a></li>
                  <li><a href="">BABY SKINCARE</a></li>
                  <li><a href="">CERTIFICATIONS</a></li>
                  <li><a href="">INGREDIENT</a></li>
                </ul>
              </li>
              <li><a href="">STOCKISTS</a>
              </li>
              <li><a href="">REVIEW</a>
              </li>
              <li><a href="">BENEFITS</a>
                <ul class="submenu">
                  <li><a href="">EVENTS</a></li>
                  <li><a href="">MEMBERS</a></li>
                </ul>
              </li>
            </ul>  -->

        <ul class="menu clearfix">
          <li v-for="(item, index) in mbMenuList" :key="index">
            <a :href="item.mainLink">{{item.mainText}}</a>
            <ul class="submenu" v-if="item.menuType == 'S' ">
              <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
                <a :href="subitem.link">{{subitem.title}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="member">
        <ul class="clearfix">
          <li><a href="" class="member-cart">
              <i class="tooltip">장바구니</i>
            </a></li>
          <li><a href="" class="member-mypage">
              <i class="tooltip">마이페이지</i></a></li>
          <li><a href="" class="member-login">
              <i class="tooltip">로그인</i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    computed,
    // onMounted,
    onUpdated
  } from 'vue'
  import $ from 'jquery'
  import {useStore} from 'vuex';

  export default {
    setup() {
      const store = useStore();
      const mbMenuList =  computed (()=> store.getters.getMbMenuData);
      store.dispatch('fetchMenu');

      onUpdated(() => {
        // 스크롤시 헤더고정 
        let header = $('.header');
        let wrap = $('.wrap');

        let finY = $('.banner').height();

        $(window).scroll(function () {
          // 스크롤바의 세로상단 px값
          let temp = $(window).scrollTop();
          // 50은 banner의 높이값 px
          if (temp > finY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
          } else {
            header.removeClass('header-fix');
            wrap.removeClass('wrap-fix');
          }
        });
      });
      /*
            const mbMenuList = [{
                menuType: 'S',
                mainText: 'SHOP',
                mainLink: '',
                subMenuArr: [{
                  link: '#',
                  title: 'ALL PRODUCT'
                }, {
                  link: '#',
                  title: 'NEWBORN'
                }, {
                  link: '#',
                  title: 'BABY'
                }, {
                  link: '#',
                  title: 'FAMILY'
                }, {
                  link: '#',
                  title: 'BATH GOODS'
                }, {
                  link: '#',
                  title: 'PRESENTS'
                }]
              },
              {
                menuType: 'S',
                mainText: 'ABOUT',
                mainLink: '',
                subMenuArr: [
                  { link: '#', title: 'BRAND STORY' },
                  { link: '#', title: 'WHO WE ARE' },
                  { link: '#', title: 'MAKE A WISH' },
                  { link: '#', title: 'PRESS' },
                ]

              },
              {
                menuType: 'S',
                mainText: 'TRUST',
                mainLink: '',
                subMenuArr: [
                  { link: '#', title: 'FOOD GRADE' },
                  { link: '#', title: 'PENTACERA™'},
                  { link: '#', title: 'BABY SKINCARE' },
                  { link: '#', title: 'CERTIFICATIONS' },
                  { link: '#', title: 'INGREDIENT' },
                ]

              },
              {
                menuType: 'A',
                mainText: 'STOCKISTS',
                mainLink: 'a.html'

              },
              {
                menuType: 'A',
                mainText: 'REVIEW',
                mainLink: 'b.html'

              },
              {
                menuType: 'S',
                mainText: 'BENEFITS',
                mainLink: '',
                subMenuArr: [
                  { link: '#', title: 'EVENTS' },
                  { link: '#', title: 'MEMBERS' },
                ]

              }
              //  아래태그가 span이면 S, a태그면  A로 menuType지정햇음
            ];
      */
      // const mbMenuList = computed();

      return {
        mbMenuList
      
      }
    }

  }
</script>

<style>

</style>