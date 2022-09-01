import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // 웹브라우져 주소에서 #아이디 이동하는 흔적을 남기지 않음.
  history: createWebHistory(),
  // 컴포넌트 연결정보
  // routes : [{path: '/글자' ,  name: 'path의 별칭', component : 연결시켜줄 컴포넌트 }]
  // 예시) routes : [{path: '/good' ,  name: 'Good', component : GoodView }]

    // 가능하면 router에 사용하는 컴포넌트는 src/view폴더를 생성하여
  // 여러 컴포넌트를 포함하는 vue파일을 생성함
  // 가능하면, '페이지이름View.vue' 라고 이름짓기를 추천함
  routes: []
});


// router 라는 변수를 다른파일에서 사용하기위해 router를 내보내주는 코드필요, 1개만 내보냄
export default router;


//main.js로 가서 설정해줄필요가 있다는점 잊지말것