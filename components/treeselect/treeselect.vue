<template>
    <div class="c-treeselect">
        <icon type="down"></icon>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .c-treeselect {
        width: 300px;
        height: 25px;
        border: 1px solid @border;
        border-radius: 4px;
        transition: all .2s linear;
        position: relative;
        padding-right: 24px;
        box-sizing: border-box;
        &:hover {
            border-color: @jbluelight;
            cursor: pointer;
        }
        .jicon-down {
            font-size: 12px;
            position: absolute;
            right: 6px;
            top: 6px;
        }
    }
</style>
<script>
    import icon from '../icon'
    export default{
        data() {
            return {

            }
        },
        components: {
            'icon': icon
        }
    }
</script>

