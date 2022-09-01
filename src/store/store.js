//vuex 는 공통 state(데이터) 관리역할
// : props와 emit으로 컴포넌트간에 흐름을 개발자가 기억하여야함
// (소규모는 사용하지않아도됨)

// 컴포넌트가 3Depth이상 겹쳐서 props/emit 진행할경우
// vuex의 도입을 하면 굉장히 유용하게 관리가능

import {createStore } from 'vuex'
import noeloStore from './modules/noeloStore';


export default createStore({
modules:{
  noeloStore
}
  /* 
  // state 는 데이터 저장객체
  state:{ 
    // const mbMenuList = [{               복붙후 const삭제 =는 :로 변경
  mbMenuList : [{
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
]},

  // actions 는 외부서버(http주소) 및 파일(json,xml...)을 호출
  // Request 호출후 Response를 통해 결과및 데이터를 받음
  // Response가 Error라면 catch로 처리 
  // Response가 Success라면 then으로 처리
  // 그런후에 mutations에다가 전달(위탁)
  actions:{},

  // mutations 는 actions로 부터 받은 상황을 실제로 처리함
  // 여기서의 처리라 함은, state를 업데이트함을 의미함
  mutations:{},

  // getters 는 state를, 즉 데이터를 컴포넌트(View영역)에 넣어서 화면갱신을함
  // 통상 getters는 컴포넌트에서 computed로 받는 경우가 많음
  // computed는 컴포넌트의 내용 갱신이 캐쉬에 대기중
    getters:{
      getMbMenuData(state){
      // 여러가지 데이터를 원하는 값으로 정렬하는 과정이 필요함
      return state.mbMenuList
      }
    }*/ //얘들은 원래잇던곳에서 여기로 일단 불러왔다가
    //너무 store.js가 길어지는것에 대한 방지책으로 src/modules폴더에 명칭Store.js 생성하여
    //그곳으로 다시 보내준결과
});