<template>
  <!-- 모바일메뉴 -->
  <div class="mb-div">
    <div class="mb-bg">
      <div class="mb-top">
        <span class="mb-top-txt">로그인이 필요합니다.</span>
        <a href="#" class="login">LOGIN</a>
        <button class="mb-close"></button>
      </div>
      <div class="mb-wrap">
        <ul class="mb-menu">
          <li v-for="(item, index) in mbmenu" v-bind:key="index">
            <span class="mb-mainmenu" v-if="item.menuType == 'S'">{{item.mainText}}</span>
            <a v-bind:href="item.mainLink" class="mb-mainmenu" v-if="item.menuType == 'A'">{{item.mainText}}</a>

            <ul class="mb-submenu" v-if="item.menuType == 'S'">
              <li v-for="(subitem, subindex) in item.subMenuArr" v-bind:key="subindex">
                <a v-bind:href="subitem.link">{{subitem.title}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    onMounted,
    computed  //추가
  } from 'vue';
  import $ from 'jquery';
import {useStore} from 'vuex';


  export default {
// props : ['mbmenu'],


    setup() {
      const store = useStore();
      const mbmenu = computed( () => store.getters.getMbMenuList);






      // 화면에  html의 구성이 완료되면
      onMounted(() => {
       // 모바일 메뉴
  let mb_div = $('.mb-div');

  // 모바일 보기버튼 기능 
  let mb_btn = $('.mb-btn');

  mb_btn.click(function () {
    mb_div.show();
  });

  // 모바일닫기기능
  let mb_close = $('.mb-close');

  mb_close.click(function () {
    mb_div.hide();
  });

  // 배경 누르면 닫기

  mb_div.click(function () {
    mb_div.hide();
  });

  // 내용을 클릭하면 배경으로 신호전달막기
  $('.mb-bg').click(function (event) {
    //  신호 전달 막기
    event.stopPropagation();
  });




  //모바일 메뉴 기능
  let mb_menu_li = $('.mb-menu > li');
  $.each(mb_menu_li, function (index) {
    // mb-mainmenu 를 찾아서 보관
    let temp = $(this).find('.mb-mainmenu');
    temp.click(function () {
      // 펼쳐져있는경우 true,없으면 false
      let result = temp.hasClass('mb-mainmenu-open');

      if (result == true) {
        //펼쳐진 클래스가진 경우
        temp.removeClass('mb-mainmenu-open');
        // 펼쳐진 서브 메뉴 닫기
        mb_menu_li.find('.mb-submenu').hide();

      } else {
        // 모든클래스 일단제거
        mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open');
        // 모든 펼쳐진 서브메뉴를 닫는다.
        mb_menu_li.find('mb-submenu').hide();
        //펼쳐진 클래스 없는 경우
        temp.addClass('mb-mainmenu-open')
        // 서비메뉴 쳘치기
        mb_menu_li.eq(index).find('.mb-submenu').show();
      }
    });
  });



  //윈도우 너비 체크
  $(window).resize(function () {
    let temp = $(window).width();
    if (temp >= 880) {
      mb_div.hide();
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
      $('.mb-submenu').hide();
    }
  });

      });
      return {
mbmenu
      }
    }

  }
</script>

<style>
  .mb-div {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99999;
  }

  .mb-div .mb-bg {
    position: relative;
    width: 380px;
    height: 100%;
    padding: 0 30px;
    background-color: #fff;
  }

  .mb-div .mb-bg .mb-top {
    position: relative;
    display: block;
    width: 320px;
    padding: 35px 0px 20px;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 35px;
  }

  .mb-div .mb-bg .mb-top .mb-top-txt {
    position: relative;
    display: block;
    font-size: 16px;
    color: #676D72;
  }

  .mb-div .mb-bg .mb-top .login {
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: #ffcc00;
    margin-top: 10px;
    font-weight: 500;
  }

  .mb-div .mb-bg .mb-top .mb-close {
    position: absolute;
    right: 0px;
    bottom: 24px;
    display: block;
    width: 20px;
    height: 20px;
    background: url("@/assets/noelohills/images/btn-close.png") no-repeat center;
    background-size: contain;
    border: 0;
    cursor: pointer;
  }

  .mb-div .mb-bg .mb-wrap {
    position: relative;
    display: block;
    width: 320px;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu {
    position: relative;
    display: block;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li {
    position: relative;
    display: block;
    margin-bottom: 25px;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 16px;
    color: #777;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-mainmenu::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background: url("@/assets/noelohills/images/ico-gnb-link-m.png") no-repeat center;
    background-size: contain;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-mainmenu-open {
    color: #ffcc00;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-mainmenu-open::after {
    background: url("@/assets/noelohills/images/ico-gnb-m-active-up.png") no-repeat center;
    background-size: contain;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-submenu {
    position: relative;
    display: none;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-submenu li {
    position: relative;
    display: block;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  .mb-div .mb-bg .mb-wrap .mb-menu>li .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 14px;
  }
</style>