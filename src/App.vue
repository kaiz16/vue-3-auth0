<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="login">Login</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  async mounted() {
    if (!this.$auth.isAuthenticated) {
      this.login();
    }
    console.log(this.$auth.isAuthenticated);
    const token = await this.$auth.getIdTokenClaims();
    console.log(token.__raw);
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
