
import opt from './main.vue'
import button from '../components/button/button.vue'
import spin from '../components/spin/spin.vue'
import icon from '../components/icon'
import message from '../components/message'

const hide = message.success("haha", 0)
Vue.component("c-icon", icon)
Vue.component('c-button', button)
Vue.component('c-spin', spin)


setTimeout(hide, 1500);

var app = new Vue().$mount('#app')
window.app = app
