
import opt from './main.vue'
import button from '../components/button/button.vue'
import spin from '../components/spin/spin.vue'
import message from '../components/message/message'
Vue.component("c-spin", spin)
Vue.component("c-button", button)
window.message = message;
  // var app = new Vue().$mount('#app')
  // window.app = app
