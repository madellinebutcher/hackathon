<template>
  <div class="Auth">

    <div class="login" v-if="showLogin">
      <h1>Login</h1>
      <label for="name">Username</label>
      <input type="text" name="name" id="name" v-model="user.name">
      <button @click="login">Login</button>
      <p>Not a user?
        <em @click="toggle">Register</em>
      </p>
    </div>
    <div class="register" v-if="!showLogin">
      <h1>Register</h1>
      <label for="name">Username</label>
      <input type="text" name="name" id="name" v-model="user.name">
      <label for="image">{{api.classes}}</label>
      
      <button @click="register">Register</button>
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
      return {}
    },
    computed: {},
    methods: {
      toggle() {
        this.showLogin = !this.showLogin
      },
      register() {
        this.$store.dispatch('register', this.user)
      },
      login() {
        this.$store.dispatch('login', this.user)
      }
    },
    components: {}
  }
</script>


<style scoped>
</style>