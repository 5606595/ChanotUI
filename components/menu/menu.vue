<template>
    <div class="c-menu">
        <slot></slot>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .c-menu {
        border-right: 1px solid @jdefault;
        width: 240px;
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        },
        components: {

        }
    }
</script>
