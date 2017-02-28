<template>
    <transition name="display">
        <div class="backtop" @click="clickEvent" v-if="isAppear">
            <c-button size="large" icon="backtop" shape="circle"></c-button>
        </div>
    </transition>
</template>
<style scoped lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .backtop {
        position: fixed;
        bottom: 50px;
        right: 100px;
        .j-btn {
            background: @backtopbg;
            border: 0px;
            color: white;
            padding: 10px!important;
            transition: background .2s linear;
            &:hover {
                color: white;
                background: @backtophoverbg;
            }
        }
    }
    .display-enter-active, .display-leave-active {
        transition: opacity .3s linear!important;
    }
    .display-enter, .display-leave-active {
        opacity: 0;
    }
</style>
<script type="text/ecmascript-6">
    import button from '../button'
    export default {
        components: {
            'c-button': button
        },
        data() {
            return {
                isAppear: false,
                delta: 0,
                init: 0,
                now: 0
            }
        },
        mounted() {
            if(document.body.scrollTop >= 100) {
                this.isAppear = true;
            }
            document.body.addEventListener("mousewheel", (event) => {
                if(document.body.scrollTop >= 100) {
                    this.isAppear = true;
                } else {
                    this.isAppear = false;
                }
            }, false)
        },
        methods: {
            clickEvent() {
                this.from = document.body.scrollTop;
                this.to = 0;
                this.animationFun(200);
            },
            animationFun(time) {
                this.init = Date.now();
                this.delta = (this.to - this.from) / time;
                if(requestAnimationFrame) {
                    requestAnimationFrame(this.go);
                } else {
                    webkitRequestAnimationFrame(this.go);
                }
            },
            go() {
                this.now = Date.now();
                if(this.now - this.init > 10) {
                    document.body.scrollTop += (this.delta * (this.now - this.init));
                    if(this.delta > 0) {
                        if(document.body.scrollTop >= this.to) {
                            document.body.scrollTop = this.to;
                            this.isAppear = false;
                            return;
                        }
                    }
                    if(this.delta <= 0) {
                        if(document.body.scrollTop <= this.to) {
                            document.body.scrollTop = this.to;
                            this.isAppear = false;
                            return;
                        }
                    }
                    if(requestAnimationFrame) {
                        requestAnimationFrame(this.go);
                    } else {
                        webkitRequestAnimationFrame(this.go);
                    }
                }
                this.init = this.now;
                if(requestAnimationFrame) {
                    requestAnimationFrame(this.go);
                } else {
                    webkitRequestAnimationFrame(this.go);
                }
            }
        }
    }
</script>
