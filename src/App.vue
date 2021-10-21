<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button v-if="!$auth.isAuthenticated" @click="login">Login</button>
  <button v-if="$auth.isAuthenticated" @click="logout">Logout</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  watch: {
    "$auth.isAuthenticated": {
      async handler() {
        let status = this.$auth.isAuthenticated;
        // logged in
        if (status === true) {
          console.log("logged in");
          const token = await this.$auth.getIdTokenClaims();
          console.log(token.__raw);
          // logged out
        } else if (status === false) {
          console.log("logged out");
        }
      },
      immediate: true,
    },
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
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
