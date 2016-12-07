<template>
  <div>
    <box>
      <spin tips="loading..."></spin>
      <icon type="success"/>
      <icon type="fail"/>
      <icon type="prompt"/>
      <icon type="warning"/>
      <icon type="search"/>
    </box>
    <box>
      <c-button size="large">large</c-button>
      <c-button type="primary">default</c-button>
      <c-button size="small" type="primary">small</c-button>
      <c-button type="primary" size="large" icon="search" shape="circle"></c-button>
      <c-button type="primary" icon="search" shape="circle"></c-button>
      <c-button type="primary" icon="search" shape="circle" size="small"></c-button>
      <c-button type="primary" icon="search" size="small">click me</c-button>
      <c-button icon="forward" size="small" type="primary">Go froward</c-button>
      <icon attr="search" />
      <c-button :loading="loading" @click="loading = true">我收起看不见的承诺</c-button>
    </box>
  </div>
</template>

<script>
  import button from '../components/button/button.vue'
  import spin from '../components/spin/spin.vue'
  import icon from '../components/icon'
  import message from '../components/message'
  import box from '../components/box'
  export default {
    components: {
      'c-button': button,
      'spin': spin,
      'box': box,
      'message': message,
      'icon': icon
    },
    data() {
      return {
        name: 'just-vue',
        loading: false
      }
    },
    computed: {},
    methods: {}
  }
</script>
