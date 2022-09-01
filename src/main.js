import { createApp } from 'vue'
import App from './App.vue'
//라우터 연결
//파일의 확장자가 js일 경우에는 아래와같이 index.js에서 .js는 생략가능
import router from '@/router/index'
//vuex 연결
import store from '@/store/store'

// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app')   //use(router)를 추가하여 사용하게만듬
createApp(App).use(router).use(store).mount('#app') 


//main.js 는!!
//Vue가 실행이 될때 제일 처음 불러서 실행하는 .js파일임
//Entry Point 역할을 함

//Vue 어플리케이션에서 모두 참조가 됨
//router, vuex를 기본적으로 많이 추가함