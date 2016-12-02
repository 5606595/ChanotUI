
import opt from './main.vue'
import message from '../components/message/message.vue'
import button from '../components/button/button.vue'
import spin from '../components/spin/spin.vue'
addEventListener('DOMContentLoaded', function () {
  Vue.component("c-message", message)
  Vue.component("c-spin", spin)
  Vue.component("c-button", button)
  var app = new Vue().$mount('#app')
  window.app = app
})
