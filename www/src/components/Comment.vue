<template>
    <div>
        <div class="post">
            <h3>Title: {{activePost.title}}</h3>
            <h3>Body: {{activePost.body}} </h3>
            <img :src="activePost.img" alt="" srcset="">
        </div>
        <button @click="toggle">Add post</button>
        <div v-if="showAddComment">
            <form v-on:submit.prevent="addComment">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Title" v-model="comment.title">
                    <input type="text" name="body" placeholder="Your comment here...." v-model="comment.body">
                    <input type="url" name="img" placeholder="Image" v-model="comment.img">
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
        <div class="comments" v-for="comment in comments">
            <h3>User: {{comment.author}}</h3>
            <h4>title: {{comment.title}}</h4>
            <img :src="comment.img" alt="">
            <p>{{comment.body}}</p>

        </div>


    </div>
</template>


<script>
    export default {
        name: 'comment',
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
                    postId
                },
                showAddComment: false,
            }
        }
    },

    computed: {
        comments(){
            return this.$store.state.comments
        },
        activePost() {
            return this.$store.state.activePost
        }
    },
    methods: { }
}
</script>


<style scoped>
</style>