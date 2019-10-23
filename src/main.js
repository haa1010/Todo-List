import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import el from 'element-ui'


Vue.use(el)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
