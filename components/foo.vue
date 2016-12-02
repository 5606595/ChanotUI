<style scoped>
  p {display: block; text-align: center;}
  p .qux {margin: 1em 2em;}
</style>

<template>
  <p :class="baz" @click="changeName">
    <slot></slot>
  </p>
</template>

<script>
  var cdn = require('../lib/lib-cdnurl.js')
  module.exports = {
    props: ['baz'],
    components: {
    },
    data: function () {
      return {}
    },
    methods: {
      changeName: function (e) {
        this.$dispatch('append-name', ', Amfe')
      }
    },
    ready: function () {
    }
  }
</script>
