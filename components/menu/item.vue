<template>
    <div class="c-menuitem" :class="isClicked">
        <slot></slot>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .c-menuitem {
        padding: 10px 0;
        &:hover {
            color: @default;
            cursor: pointer;
        }
        &.clicked {
            background: @dropdownlist-hover;
        }
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
