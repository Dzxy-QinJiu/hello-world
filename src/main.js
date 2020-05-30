import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import './assets/css/main.css'


import api from './api/api.js'
Vue.prototype.$api = api;

Vue.directive('document-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted() {
    console.log('insert')
  },
  update() {
    console.log('update')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')