<template>
  <div>
      <div class="post">
          <h3>Title: {{activeComment.title}}</h3>
          <h3>Body: {{activeComment.body}} </h3>
          <img :src="activeComment.img" alt="" srcset="">
      </div>
      <button @click="toggle">Add sub-comment</button>
      <div v-if="showAddSubComment">
          <form v-on:submit.prevent="addSubComment">
              <div class="form-group">
                  <input type="text" name="title" placeholder="Title" v-model="subComment.title">
                  <input type="text" name="body" placeholder="Your comment here...." v-model="subComment.body">
                  <input type="url" name="img" placeholder="Image" v-model="subComment.img">
              </div>
              <button type="submit">Post</button>
          </form>
      </div>
      <div class="subComments" v-for="subComment in subComments">
          <h3>User: {{subComment.author}}</h3>
          <h4>title: {{subComment.title}}</h4>
          <img :src="subComment.img" alt="">
          <p>{{subComment.body}}</p>
      </div>


  </div>
</template>


<script>
  export default {
      name: 'subComment',
      data() {
          return {
              subComment: {
                  title: '',
                  body: '',
                  img: '',
                  userUpVotes: [],
                  userDownVotes: [],
                  author: '',
                  userId: '',//may be incorect
                  postId: '',
                  commentId: ''
              },
              showAddSubComment: false,
          }
      },
      computed: {
          comments() {
              return this.$store.state.comments
          },
          activePost() {
              return this.$store.state.activePost
          },
          activeComment() {
            return this.$store.state.activeComment
          },
          user() {
              return this.$store.state.user
          },
          subComments() {
            return this.$store.state.subComments
          }
      },
      methods: {
          toggle() {
              this.showAddSubComment = !this.showAddSubComment
          }, 
          addSubComment() {
              this.subComment.postId = this.activePost._id
              this.subComment.commentId = this.activeComment._id
              if (this.user._id) {
                  this.subComment.author = this.user.name
                  this.subComment.userId = this.user._id
              }
              this.$store.dispatch('addSubComment', this.subComment)
          }
      }
  }
</script>


<style scoped>
</style>