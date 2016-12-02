<template>
    <i class="jicon" :class="'jicon-' + type"></i>
</template>
<style lang="less" rel="stylesheet/less">
    @default: #1f90e6;
    @success: #89ce6d;
    @fail: #fc561f;
    @warning: #fda929;
    .jicon {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .jicon-forward {
        float: right;
        margin-top: 1px;
        margin-left: 1px;
        &:before {
            content: "\e601";
        }
    }
    .jicon-prompt {
        color: @default;
        &:before { content: "\e620"; }
    }
    .jicon-success {
        color: @success;
        &:before { content: "\e63a"; }
    }
    .jicon-fail {
        color: @fail;
        &:before { content: "\e613"; }
    }
    .jicon-warning {
        color: @warning;
        &:before { content: "\e6d4"; }
    }
    .jicon-search:before { content: "\e600"; }
    .jicon-backward:before { content: "\e60a"; }
    @font-face {
        font-family: 'iconfont';  /* project id："191439" */
        src: url('//at.alicdn.com/t/font_t6inlill5jzl4n29.eot');
        src: url('//at.alicdn.com/t/font_t6inlill5jzl4n29.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_t6inlill5jzl4n29.woff') format('woff'),
        url('//at.alicdn.com/t/font_t6inlill5jzl4n29.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_t6inlill5jzl4n29.svg#iconfont') format('svg');
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        components:{},
        props: {
            type: String
        }
    }
</script>
