import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/toast/index'
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
