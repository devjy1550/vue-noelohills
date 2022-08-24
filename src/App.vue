<template>
  <div>
    <!-- 모바일 -->
    <MbDiv v-bind:mbmenu="mbMenuList" />
    <!-- 배너 -->
    <Banner />
    <!-- 내용 -->
    <div class="wrap">
      <!-- 헤더 -->
      <header class="header">
        <!-- 모바일버튼 -->
        <div class="inner">
          <div class="mb-btn"></div>
          <a href="" class="logo"></a>
          <div class="gnb">
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
      </header>
      <!-- 비쥬얼 -->
      <Visual />
      <!-- 카테고리 -->
      <Category />
      <!-- 사이트맵 -->
      <Sitemap />
      <!-- 푸터-->
      <footer class="footer">
        <div class="footer-top">
          <div class="inner">
            <ul class="site-info-list">
              <li>
                <span><em>상호</em>주식회사 세손</span>
                <span><em>대표자명</em>임정아</span>
                <span><em>대표전화번호</em>1600-6274</span>
                <span><em>개인정보관련책임자</em><a href=""> 임지은(help@seisson.com)</a></span>
              </li>
              <li>
                <span><em>사업장소재지</em>04378 서울특별시 용산구 한강대로 95 (한강로2가) 제에이동 15층 1515호</span>
              </li>
              <li>
                <span><em>사업자등록번호</em>183-86-01860</span>
                <span><em>통신판매업 신고번호제</em>2021-서울용산-0634호</span>
              </li>
            </ul>
            <a href="" class="insta-link"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="inner clearfix">
            <span class="copy">Copyright © <strong>Seisson Inc.</strong> All rights reserved.</span>
            <ul class="service-list">
              <li><a href="">CS Center</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms & Condition</a></li>
            </ul>

          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import {
    onMounted
  } from 'vue'
  import $ from 'jquery'


  import MbDiv from '@/components/MbView.vue'
  import Banner from '@/components/BannerView.vue'
  import Visual from '@/components/VisualView.vue'
  import Category from '@/components/CategoryView.vue'
  import Sitemap from '@/components/SitemapView.vue'


  export default {
    name: 'App',
    components: {
      MbDiv,
      Banner,
      Visual,
      Category,
      Sitemap,
    },

    setup() {
      onMounted(() => {
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

      return {
        mbMenuList
      }
    }
  }
</script>

<style>
  #app {}

  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&amp;family=Quicksand:wght@600;700&amp;display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #777;
  }

  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-family: "Montserrat", "Noto Sans KR", "Malgun Gothic", "Dotum", "AppleGothic", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.45px;
    line-height: 1.5;
    font-style: normal;
    overflow-x: hidden;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-webkit-selection {
    background: #1ABC9C;
    color: #fff;
  }

  .clearfix::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }

  .wrap {
    position: relative;
    display: block;
  }

  .wrap-fix {
    padding-top: 80px;
  }

  .header {
    position: relative;
    display: block;
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #dcdcdc;
    z-index: 9999;
  }

  .header-fix {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    transition: all 0.3s;
  }

  .mb-btn {
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    width: 30px;
    height: 23px;
    background: url("@/assets/noelohills/images/btn-menu-line.png") no-repeat center;
    cursor: pointer;
  }

  @media all and (max-width: 800px) {
    .mb-btn {
      display: block;
    }
  }

  .inner {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .inner .logo {
    position: relative;
    display: block;
    width: 111px;
    height: 42px;
    background: url("@/assets/noelohills/images/logo_new.png") no-repeat center;
    background-size: cover;
  }

  @media all and (max-width: 800px) {
    .inner .logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-top: 0;
      margin-right: 0;
    }
  }

  .inner .gnb {
    position: relative;
    display: block;
    margin-left: 30px;
  }

  @media all and (max-width: 800px) {
    .inner .gnb {
      display: none;
    }
  }

  .inner .gnb .menu {
    position: relative;
    display: block;
  }

  .inner .gnb .menu>li {
    position: relative;
    display: block;
    float: left;
  }

  .inner .gnb .menu>li>a {
    position: relative;
    display: block;
    line-height: 80px;
    text-align: center;
    font-size: 14px;
    color: #777;
    z-index: 3;
    padding: 0 28px;
  }

  @media all and (max-width: 1080px) {
    .inner .gnb .menu>li>a {
      padding: 0 18px;
    }
  }

  @media all and (max-width: 880px) {
    .inner .gnb .menu>li>a {
      padding: 0 10px;
    }
  }

  .inner .gnb .menu>li>a:hover {
    position: relative;
    display: block;
    color: #f9d14d;
  }

  .inner .gnb .menu>li:hover>a {
    color: #f9d14d;
  }

  .inner .gnb .menu>li:hover .submenu {
    visibility: visible;
  }

  .inner .gnb .menu>li>.submenu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0%;
    display: block;
    visibility: hidden;
    padding: 80px 20px 40px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    z-index: 2;
  }

  .inner .gnb .menu>li>.submenu>li {
    position: relative;
    display: block;
    padding: 17px 0px;
  }

  .inner .gnb .menu>li>.submenu>li a {
    font-size: 13px;
    white-space: nowrap;
  }

  .inner .gnb .menu>li>.submenu>li a:hover {
    color: #f9d14d;
  }

  .inner .member {
    position: relative;
    display: block;
    margin-left: auto;
  }

  .inner .member ul {
    position: relative;
    display: block;
  }

  .inner .member ul li {
    position: relative;
    display: block;
    float: left;
    margin-left: 42px;
  }

  @media all and (max-width: 1080px) {
    .inner .member ul li {
      margin-left: 22px;
    }
  }

  .inner .member ul li:first-child {
    margin-left: 0;
  }

  .inner .member ul li a {
    position: relative;
    display: block;
    width: 23px;
    height: 23px;
  }

  .inner .member ul li a .tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    display: inline-block;
    visibility: hidden;
    color: #fff;
    background-color: #000;
    white-space: nowrap;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 11px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .inner .member ul li a .tooltip::before {
    content: "";
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    background-color: #000;
  }

  .inner .member ul li a:hover .tooltip {
    visibility: visible;
  }

  .inner .member ul li .member-cart {
    background: url("@/assets/noelohills/images/ico-cart.png") no-repeat center;
  }

  .inner .member ul li .member-mypage {
    background: url("@/assets/noelohills/images/ico-user.png") no-repeat center;
  }

  .inner .member ul li .member-login {
    background: url("@/assets/noelohills/images/ico-login.png") no-repeat center;
  }

  @media all and (max-width: 800px) {
    .inner .member ul li .member-login {
      display: none;
    }
  }




  .footer {
    position: relative;
    display: block;
    width: 100%;
  }

  .footer .footer-top {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #f3f3f3;
    padding: 30px 0px;
  }

  .footer .footer-top .inner {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 770px;
  }

  @media all and (max-width: 800px) {
    .footer .footer-top .inner {
      width: 100%;
    }
  }

  .footer .footer-top .inner .site-info-list {
    position: relative;
    display: block;
  }

  .footer .footer-top .inner .site-info-list li {
    position: relative;
    display: block;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .footer .footer-top .inner .site-info-list li span {
    position: relative;
    display: inline-block;
    margin-right: 40px;
    font-size: 12px;
    color: #777;
  }

  @media all and (max-width: 800px) {
    .footer .footer-top .inner .site-info-list li span {
      display: block;
      margin-bottom: 5px;
    }
  }

  .footer .footer-top .inner .site-info-list li span em {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    color: #72868c;
  }

  @media all and (max-width: 800px) {
    .footer .footer-top .inner .site-info-list li span em {
      width: 120px;
    }
  }

  .footer .footer-top .inner .site-info-list li span a {
    position: relative;
    display: inline-block;
  }

  .footer .footer-top .inner .insta-link {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 155px;
    height: 30px;
    background: url("@/assets/noelohills/images/ico_insta.png") no-repeat center;
  }

  .footer .footer-bottom {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #e5e5e5;
    padding: 25px 0;
  }

  .footer .footer-bottom .inner {
    display: block;
    position: relative;
    width: 770px;
  }

  @media all and (max-width: 800px) {
    .footer .footer-bottom .inner {
      width: 100%;
    }
  }

  .footer .footer-bottom .inner .copy {
    position: relative;
    display: block;
    float: left;
    font-size: 12px;
    color: #777;
  }

  @media all and (max-width: 800px) {
    .footer .footer-bottom .inner .copy {
      width: 100%;
      text-align: center;
      padding-bottom: 15px;
    }
  }

  .footer .footer-bottom .inner .copy strong {
    font-weight: 600;
  }

  .footer .footer-bottom .inner .service-list {
    position: relative;
    display: block;
    float: right;
  }

  @media all and (max-width: 800px) {
    .footer .footer-bottom .inner .service-list {
      width: 100%;
      text-align: center;
      margin-left: 0;
    }
  }

  .footer .footer-bottom .inner .service-list li {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }

  .footer .footer-bottom .inner .service-list li a {
    position: relative;
    display: block;
    font-size: 12px;
  }

  /*# sourceMappingURL=main.css.map */
</style>