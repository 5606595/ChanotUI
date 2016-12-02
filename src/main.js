

addEventListener('DOMContentLoaded', function () {

  var opt = require('./main.vue')
  var app = new Vue(opt).$mount('#app')
  window.app = app
})
