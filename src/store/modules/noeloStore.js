const state = { //store.js에서 다시 여기로 옮기면 원래 형태로 const와 =는 붙여줌
  // const mbMenuList = [{               복붙후 const삭제 =는 :로 변경
  mbMenuList: [{
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
      subMenuArr: [{
          link: '#',
          title: 'BRAND STORY'
        },
        {
          link: '#',
          title: 'WHO WE ARE'
        },
        {
          link: '#',
          title: 'MAKE A WISH'
        },
        {
          link: '#',
          title: 'PRESS'
        },
      ]

    },
    {
      menuType: 'S',
      mainText: 'TRUST',
      mainLink: '',
      subMenuArr: [{
          link: '#',
          title: 'FOOD GRADE'
        },
        {
          link: '#',
          title: 'PENTACERA™'
        },
        {
          link: '#',
          title: 'BABY SKINCARE'
        },
        {
          link: '#',
          title: 'CERTIFICATIONS'
        },
        {
          link: '#',
          title: 'INGREDIENT'
        },
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
      subMenuArr: [{
          link: '#',
          title: 'EVENTS'
        },
        {
          link: '#',
          title: 'MEMBERS'
        },
      ]

    }
    //  아래태그가 span이면 S, a태그면  A로 menuType지정햇음
  ]
};

const actions ={}; // const 와 : 를 = 로

const mutations = {};  // const 와 : 를 = 로

const getters = {    // const 와 : 를 = 로
  getMbMenuData(state){
  // 여러가지 데이터를 원하는 값으로 정렬하는 과정이 필요함
  return state.mbMenuList
  }
};



export default {state, actions, mutations, getters}  //const와 =를 다시붙여준다음에 다 내보내는 작업을 해줘야함