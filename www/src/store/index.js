import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let auth = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {},
        posts: [],
        comments: [],
        activePost: {}
    },

    mutations:{
        setUser(state, users){
            state.user = users
        },
        addUser(state, users){
            state.user = users
        },
        setPost(state, post){
            state.posts = post
        }
    },

    actions:{
        getUsers({dispatch, commit}, user){
            auth.post('/login', user)
            .then(res => {
                commit('setUser', res.data.user)
                router.push('/home')
            })
            .catch(err => {
                console.error(err)
            })
        },

        addUsers({dispatch, commit}, user){   
            debugger
            auth.post('/create', user)// check register in Auth.vue
            .then(res => {
                commit('addUser', res.data.user)
                router.push('/home')
            })
            .catch(err => {
                console.error(err)
            })
        },
        
        getPosts({dispatch, commit}, post){
            auth.get('/posts')
            .then(res => {
                commit('setPost', res.data.data)
            })
        },
        addPost({dispatch, commit}, post){
            auth.post('/posts', post)
            .then(res => {
                    dispatch('setPost', post)
                })
            },
        getComments({dispatch, commit}, post){
            auth.get('/comments?postId='+post._id)
            .then(res=>{
                commit('setComments', res.data.data)
            })
        },
        addComment({dispatch,commit}, comment){
            auth.post('/comments', comment)
            .then(res =>{
                dispatch('getComments', this.activePost)
            })
        }
        // getSubComments()


        // addSubComments()
    }
})

