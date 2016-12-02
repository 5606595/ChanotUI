<style lang="less">
    @jblue: #3ec8f5;
    .spin {
        position: relative;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        animation: jrotate 3s infinite linear;
        margin: auto;
        .dot {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: @jblue;
            opacity: 0.3;
            transform: scale(0.6);
            animation: jopacity 0.8s infinite linear alternate;
            &:nth-of-type(1) {
                left: 0;
                top: 0;
            }
            &:nth-of-type(2) {
                right: 0;
                top: 0;
                animation-delay: 0.4s;
            }
            &:nth-of-type(3) {
                right: 0;
                bottom: 0;
                animation-delay: 0.8s;
            }
            &:nth-of-type(4) {
                left: 0;
                bottom: 0;
                animation-delay: 1.2s;
            }
        }
    }
    .jsay {
        text-align: center;
        margin-top: 10px;
    }
    @keyframes jopacity {
        0% {
            opacity: .3;
            transform: scale(0.6);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes jrotate {
        0% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(405deg);
        }
    }
</style>
<template>
    <div class="jspin-container">
        <div class="spin">
            <i class="dot"></i>
            <i class="dot"></i>
            <i class="dot"></i>
            <i class="dot"></i>
        </div>
        <div class="jsay">
            <span>{{ tips }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tips: String
        }
    }

</script>
