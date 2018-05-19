<template>
    <div class="Home">

        <div class="user">
            <h3>user: {{user.name}}</h3>
        </div>
        <button @click="toggle">Add post</button>
        <div v-if="showAddPost">
            <form v-on:submit.prevent="addPost">
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <input type="text" name="title" placeholder="Title" v-model="post.title">
                    <input type="text" name="body" placeholder="Your post here...." v-model="post.body">
                    <input type="url" name="img" placeholder="Image" v-model="post.img">
                </div>
                <button type="submit">Post</button>
            </form>
        </div>

        <div>
            <div class="post" v-for="post in posts">
                <a :@click="selectPost(post)"><h4>{{post.title}}</h4></a>
                <img :src="post.img" alt="">
                <p>{{post.body}}</p>
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
                    userId: user._id,//may be incorect
                },
                showAddPost: false

            }
        },

        computed: {
            posts() {
                return this.$store.state.posts
            },
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            addPost() {
                this.$store.dispatch('addPost', this.post)
            },
            toggle() {
                this.showAddPost = !this.showAddPost
            },
            selectPost(post) {
                this.$store.state.activePost = post
                this.$store.dispatch('getComments', post)
                router.push('/comment')
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>