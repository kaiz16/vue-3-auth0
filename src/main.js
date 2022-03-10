import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authConfig from '../auth_config.json'
import { setupAuth } from './auth0/authWrapper'

let app = createApp(App).use(router)

function callbackRedirect() {
  return window.location.origin
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount('#app')
})
