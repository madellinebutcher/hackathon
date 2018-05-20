import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import Comment from '@/components/Comment'
import SubComment from '@/components/SubComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/',
      name: 'Home',
      component: Home  
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/sub-comment',
      name: 'SubComment',
      component: SubComment
    }
  ]
})
