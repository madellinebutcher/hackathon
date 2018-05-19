<template>
    <div class="Home">

        <div class="user" v-if="user._id">
            <h3>user: {{user.name}}</h3>
        </div>
        <button @click="toggle">Add post</button>
        <div v-if="showAddPost">
            <form v-on:submit.prevent="addPost">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Title" v-model="post.title">
                    <input type="text" name="body" placeholder="Your post here...." v-model="post.body">
                    <input type="url" name="img" placeholder="Image" v-model="post.img">
                </div>
                <button type="submit">Post</button>
            </form>
        </div>

        <div>
            <div class="post" v-for="post in posts">
                <a @click="selectPost(post)">
                    <h4>{{post.title}}</h4>
                </a>
                <img :src="post.img" alt="">
                <p>{{post.body}}</p>
                <p>{{post.author}}</p>
                <p>upvotes: {{post.userUpVotes.length}}</p>
                <p>downvotes: {{post.userDownVotes.length}}</p>
                <button v-if="voteCheck(post)"@click="addUpVote(post)">up vote</button>
                <button v-if="voteCheck(post)"@click="addDownVote(post)">down vote</button>
            </div>
        </div>



    </div>
</template>


<script>
    export default {
        name: 'Home',
        mounted() {
            this.$store.dispatch('getPosts')
        },
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                    img: '',
                    userUpVotes: [],
                    userDownVotes: [],
                    author: '',
                    userId: '',//may be incorect
                },
                showAddPost: false,
            }
        },

        computed: {
            posts() {
                return this.$store.state.posts
            },
            user() {
                var user = this.$store.state.user
                return user
            }
        },
        methods: {
            addPost() {
                if (this.user._id) {
                    this.post.author = this.user.name
                    this.post.userId = this.user._id
                }
                this.$store.dispatch('addPost', this.post)
            },
            toggle() {
                this.showAddPost = !this.showAddPost
            },
            selectPost(post) {
                this.$store.state.activePost = post
                this.$store.dispatch('getComments', post)
                this.$router.push('comment')
            },
            addUpVote(post) {
                post.userUpVotes.push(this.user._id)
                this.$store.dispatch('upPost', post)
            },
            voteCheck(post) {
                return !(post.userUpVotes.includes(this.user._id))
            },
            addDownVote(post) {
                post.userDownVotes.push(this.user._id)
                this.$store.dispatch('upPost', post)
            }
        }
    }
</script>


<style scoped>
</style>