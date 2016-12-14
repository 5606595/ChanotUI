<style scoped lang="less" rel="stylesheet/less">
  .c-col {
    &:nth-of-type(2n) {
      background: #52bdee;
    }
    &:nth-of-type(2n+1) {
      background: #1aa1e6;
    }
  }
  .c-row {
    height: 50px;
    color: white;
  }
</style>
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
      <c-button icon="download" size="small" type="primary">download</c-button>
      <c-button :loading="loading" type="primary" @click="loading = true">我收起看不见的结果</c-button>
    </box>
    <box>
      <row space="between">
        <column xs="1" sm="6" md="2" lg="2">
          haha
        </column>
        <column xs="10" sm="6" md="8" lg="10">
          hehe
        </column>
      </row>
    </box>
    <box>
      <popover placement="left" trigger="click">
        <c-button type="primary">Hover me.</c-button>
      </popover>
      <popover placement="right" trigger="click">
        <c-button type="primary">Hover me.</c-button>
      </popover>
      <popover placement="top" trigger="click" title="<h2>这是标题</h2>" content="<p>内容</p>">
        <c-button type="primary">Hover me.</c-button>
      </popover>
      <popover placement="bottom" trigger="click">
        <c-button type="primary">Hover me.</c-button>
      </popover>
    </box>
  </div>
</template>

<script>
  import button from '../components/button/button.vue'
  import spin from '../components/spin/spin.vue'
  import icon from '../components/icon'
  import message from '../components/message'
  import box from '../components/box'
  import { row, column } from '../components/grid'
  import popover from '../components/popover'
  export default {
    components: {
      'c-button': button,
      'spin': spin,
      'box': box,
      'message': message,
      'icon': icon,
      'row': row,
      'column': column,
      'popover': popover
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
