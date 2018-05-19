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
        subComments: [],
        activePost: {},
        activeComment: {}
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setPost(state, post) {
            state.posts = post
        },
        setComments(state, comments) {
            state.comments = comments
        },
        setSubComments(state, subComments) {
            state.subComments = subComments
        }
    },

    actions: {
        getUsers({ dispatch, commit }, user) {
            auth.post('/login', user)
                .then(res => {
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.error(err)
                })
        },

        addUsers({ dispatch, commit }, user) {
            auth.post('/create', user).then(res => {
                commit('setUser', res.data)
            })
                .catch(err => {
                    console.error(err)
                })
        },

        getPosts({ dispatch, commit }, post) {
            auth.get('/posts')
                .then(res => {
                    var sort = res.data.sort((a, b) => {
                        return b.userUpVotes.length - a.userUpVotes.length
                    })
                    commit('setPost', sort)
                })
        },
        addPost({ dispatch, commit }, post) {
            auth.post('/posts', post)
                .then(res => {
                    commit('setPost', post)
                })
        },
        getComments({ dispatch, commit }, post) {
            auth.get('/comments?postId=' + post._id)
                .then(res => {
                    debugger
                    var sort = res.data.sort((a, b) => {
                        return b.userUpVotes.length - a.userUpVotes.length
                    })
                    console.log(res)
                    commit('setComments', res.data)
                })
        },
        addComment({ dispatch, commit, state }, comment) {
            auth.post('/comments', comment)
                .then(res => {
                    dispatch('getComments', state.activePost)
                })
        },
        getSubComments({ dispatch, commit }, comment) {
            auth.get('/sub-comments?commentId=' + comment._id)
                .then(res => {
                    var sort = res.data.sort((a, b) => {
                        b.userUpVotes.length - a.userUpVotes.length
                    })
                    console.log(res)
                    commit('setSubComments', res.data)
                })
        },
        addSubComment({ dispatch, commit, state }, subComment) {
            auth.post('/sub-comments', subComment)
                .then(res => {
                    dispatch('getSubComments', state.activeComment)
                })
        },
        upPost({ dispatch, commit }, post) {
            auth.put('posts/' + post._id, post)
                .then(res => {
                    dispatch('getPosts')
                })
        },
        upComment({ dispatch, commit}, comment) {
            auth.put('comments/' + comment._id, comment)
                .then(res => {
                    dispatch('getComments')
                })
        },
        upSubComment({ dispatch, commit}, subComment) {
            auth.put('sub-comments/' + subComment._id, subComment)
                .then(res => {
                    dispatch('getSubComments')
                })
        }
    }
})

