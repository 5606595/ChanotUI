<template>
  <div>
    <Box>
      <Spin tips="loading..."></Spin>
      <Icon type="success"/>
      <Icon type="fail"/>
      <Icon type="prompt"/>
      <Icon type="warning"/>
      <Icon type="search"/>
    </Box>
    <Box>
      <Button size="large">large</Button>
      <Button type="primary">default</Button>
      <Button size="small" type="primary">small</Button>
      <Button type="primary" size="large" icon="search" shape="circle"></Button>
      <Button type="primary" icon="search" shape="circle"></Button>
      <Button type="primary" icon="search" shape="circle" size="small"></Button>
      <Button type="primary" icon="search" size="small">click me</Button>
      <Button icon="forward" size="small" type="primary">Go froward</Button>
      <Icon attr="search" />
    </Box>
  </div>
</template>

<script>
  import Button from '../components/button/button.vue'
  import Spin from '../components/spin/spin.vue'
  import Box from '../components/box/box.vue'
  import Message from '../components/message/message.vue'
  import Icon from '../components/icon/icon.vue'
  export default {
    components: {
      'Button': Button,
      'Spin': Spin,
      'Box': Box,
      'Message': Message,
      'Icon': Icon
    },
    data() {
      return {
        name: 'just-vue'
      }
    },
    computed: {},
    methods: {}
  }
</script>
