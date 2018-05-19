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
        setUser(state, user){
            state.user = user
        },
        setPost(state, post){
            state.posts = post
        },
        setComments(state, comments){
            state.comments = comments
        }
    },

    actions:{
        getUsers({dispatch, commit}, user){
            auth.post('/login', user)
            .then(res => {
                commit('setUser', res.data)
            })
            .catch(err => {
                console.error(err)
            })
        },

        addUsers({dispatch, commit}, user){   
            auth.post('/create', user).then(res => {
                commit('setUser', res.data)
            })
            .catch(err => {
                console.error(err)
            })
        },
        
        getPosts({dispatch, commit}, post){
            auth.get('/posts')
            .then(res => {
                commit('setPost', res.data)
            })
        },
        addPost({dispatch, commit}, post){
            auth.post('/posts', post)
            .then(res => {
                    commit('setPost', post)
                })
            },
        getComments({dispatch, commit}, post){
            auth.get('/comments?postId='+post._id)
            .then(res=>{
                console.log(res)
                commit('setComments', res.data)
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

