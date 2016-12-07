<template>
    <div class="c-col">
        <slot></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .c-col {
        &.col-1 {
            flex: 1;
        }
        &.col-2 {
            flex: 2;
        }
        &.col-3 {
            flex: 1;
        }
        &.col-4 {
            flex: 1;
        }
        &.col-5 {
            flex: 1;
        }
        &.col-6 {
            flex: 1;
        }
        &.col-7 {
            flex: 1;
        }
        &.col-8 {
            flex: 1;
        }
        &.col-9 {
            flex: 1;
        }
        &.col-10 {
            flex: 1;
        }
        &.col-11 {
            flex: 1;
        }
        &.col-12 {
            flex: 1;
        }
    }
</style>
<script>
    export default {
        data() {

        },
        props: {
            span: Number
        }
    }
</script>
