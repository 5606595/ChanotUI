
import opt from './main.vue'
import button from '../components/button/button.vue'
import spin from '../components/spin/spin.vue'

Vue.component("c-spin", spin)


var app = new Vue().$mount('#app')
window.app = app
