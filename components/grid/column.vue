<template>
    <div class="c-col" :class="'c-col-' + span">
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .c-col {
        .c-cols(@n, @i: @n) when (@i > 0) {
            &.c-col-@{i} {
                width: (@i * 100% / @n);
            }
            .c-cols(@n, (@i - 1));
        }
        .c-cols(12);
        display: flex;
        align-items: center;
        justify-content: center;
        word-break: break-all;
        overflow: hidden;
    }
</style>
<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            span: Number
        }
    }
</script>
