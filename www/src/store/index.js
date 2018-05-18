import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let auth = axios.create({
    baseURL: 'https://localhost:3000/api',
    timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {},
        posts: [],
        comments: []
    },

    mutations:{
        setUser(state, users){
            state.user = users
        },
        addUser(state, users){
            state.user = users
        },
        setPost(state, post){
            state.posts.push(post)
        }
    },

    actions:{
        getUsers({dispatch, commit}, user){
            auth.get('/login', user)
            .then(res => {
                commit('setUser', res.data.user)
                router.push('/home')
            })
            .catch(err => {
                console.error(err)
            })
        },

        addUsers({dispatch, commit}, user){   
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
                commit('setPosts', res.data.data)
            })
        },
        addPost({dispatch, commit}, post){
            auth.post('/posts', post)
            .then(res => {
                    dispatch('setPost', post)
                })
            },
        getComments({dispatch, commit}, post){
            auth.get('/comments')
            .then(res=>{
                commit('setComments', res.data.data)
            })
        }
    }
})

