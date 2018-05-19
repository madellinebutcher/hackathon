<template>
  <div class="Auth">

    <div class="login" v-if="showLogin">
      <h1>Login</h1>
      <form v-on:submit.prevent="login">
        <input type="text" name="name" id="name" v-model="user.name">
        <button type="submit">Login</button>
      </form>
      <p>Not a user?
        <em @click="toggle">Register</em>
      </p>
    </div>
    <div class="register" v-if="!showLogin">
      <h1>Register</h1>
      <form v-on:submit.prevent="register">
        <input type="text" name="name" id="name" v-model="user.name">
        <button type="submit">Register</button>
      </form>
      <p>Already a user?
        <em @click="toggle">Login</em>
      </p>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'Auth',
    data() {
      return {
        user: {
          name: ''
        },
        showLogin: true
      }
    },
    computed: {},
    methods: {
      toggle() {
        this.showLogin = !this.showLogin
      },
      register() {
        this.$store.dispatch('addUsers', this.user)
        router.push('home')
      },
      login() {
        router.push('home')
        this.$store.dispatch('getUsers', this.user)
      }
    },
    components: {}
  }
</script>


<style scoped>
</style>