import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home/Home.vue')
const Recommend = () => import('../pages/Recommend/Recommend.vue')
const Classify = () => import('../pages/Classify/Classify.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        ShowFoot: true
      }
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        ShowFoot: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        ShowFoot: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        ShowFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
