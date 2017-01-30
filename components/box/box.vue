<style lang="less" scoped rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .j-box {
        @border: #e9e9e9;
        padding: 50px 30px;
        box-sizing: border-box;
        min-width: 500px;
        min-height: 200px;
        margin: 20px;
        border: 1px solid @border;
        border-radius: 10px;
    }
</style>
<template>
    <div class="j-box">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>