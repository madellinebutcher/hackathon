import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import Comment from '@/components/Comment'

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
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    }
  ]
})
