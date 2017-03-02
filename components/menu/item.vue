<template>
    <div class="c-menuitem" :class="{clicked: isClicked}" @click="clickEvent">
        <slot></slot>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .c-menuitem {
        padding: 10px 20px;
        transition: all .2s linear;
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
                isClicked: false
            }
        },
        components: {

        },
        methods: {
            clickEvent() {
                this.isClicked = true;
            }
        }
    }
</script>
