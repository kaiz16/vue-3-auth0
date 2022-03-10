<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { inject } from '@vue/runtime-core'
import HelloWorld from './components/HelloWorld.vue'

const auth0 = inject("$auth");
console.log(auth0.isAuthenticated);
function login(){
  return auth0.loginWithRedirect()
}

function logout(){
  return auth0.logout()
}
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
