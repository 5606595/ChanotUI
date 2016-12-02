<template>
    <div class="j-message" v-if="show">
        <icon :type="newType"></icon>
        <span class="message">
            <slot></slot>
        </span>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @border: #e9e9e9;
    @messagefontcolor: #666;
    .j-message {
        padding: 8px 16px;
        border: 1px solid @border;
        border-radius: 4px;
        display: inline-block;
        position: fixed;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        top: 50px;
        font-size: 12px;
        color: @messagefontcolor;
        box-shadow: 2px 2px 2px @border, -1px 0px 1px @border;
        animation: messagedisplay .2s linear;
        .message {
            margin-left: 5px;
        }
    }
    .j-end {
        animation: messageend .2s linear;
    }
    @keyframes messageend {
        0% {
            opacity: 1;
            transform: translate3d(-50%, 0, 0);
        }
        100% {
            opacity: 0;
            transform: translate3d(-50%, -20px, 0);
        }
    }
    @keyframes messagedisplay {
        0% {
            opacity: 0;
            transform: translate3d(-50%, -20px, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(-50%, 0, 0);
        }
    }
</style>
<script type="text/ecmascript-6">
    import icon from '../icon/icon.vue'
    export default {
        data() {
            return {
                show: true
            }
        },
        computed: {
            newType: function () {
                return this.type ? this.type : "prompt"
            },
            time: function() {
                if(this.duration) {
                    return this.duration * 1000;
                }
                return 1500;
            }
        },
        components:{
            "icon": icon
        },
        props: {
            type: String,
        },
        mounted() {
            setTimeout(() => {
                this.$el.classList.add("j-end")
                this.$el.addEventListener("animationend", () => {
                    this.show = false
                }, false);
            }, this.time)
        }
    }
</script>
