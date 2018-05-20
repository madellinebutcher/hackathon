<template>
  <div id="app">
    <nav class="navbar navbar-light top-header">
      <a class="navbar-brand" @click="getPosts">Home</a>
      <a class="navbar-brand" @click="login" v-if="!(user._id)">Sign up/Login</a>
      <a class="navbar-brand" @click="signOut" v-if="user._id">Sign out</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      user() {
        var user = this.$store.state.user
        return user
      }
    },
    methods: {
      getPosts() {
        this.$router.push('/')
      },
      login() {
        this.$router.push('auth')
      },
      signOut() {
        this.$store.dispatch('signOut')
      }
    }
  }
</script>

<style>
  body {
    background: #67020a;
  }

  .top-header {
    background-image: url('../D20.png');
  }

  #app {

    font-family: 'Metal Mania', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>