<template>
    <i class="jicon" :class="['jicon-' + type, jclass]"></i>
</template>
<style  lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .jicon {
        display: inline-block;
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
    .jicon-loading {
        color: @default;
        animation: loading .5s linear infinite;
        &:before {
            content: '\e637';
        }
    }
    .jicon-download:before { content: '\e621' }
    .jicon-down:before { content: '\e69d' }
    .jicon-right:before { content: '\e67a' }
    .jicon-backtop:before { content: '\e612' }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @font-face {
        font-family: 'iconfont';  /* project id 191439 */
        src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot');
        src: url('//at.alicdn.com/t/font_kk45pahzawkx1or.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_kk45pahzawkx1or.woff') format('woff'),
        url('//at.alicdn.com/t/font_kk45pahzawkx1or.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_kk45pahzawkx1or.svg#iconfont') format('svg');
    }
</style>
<script>
    export default {
        data() {
            return {}
        },
        components: {},
        props: {
            type: String,
            jclass: String
        }
    }
</script>
