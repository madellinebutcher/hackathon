import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home  
    }
  ]
})
