<template>
    <div class="dropdown-content" @mouseover="overin" @mouseleave="leaveout">
        <div class="dropdown-display" @click="clickEvent">
            <slot name="display"></slot>
        </div>
        <transition name="dropdown">
            <div class="dropdownlist" v-if="isAppear">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
    @import '../../mixin/mixin.less';
    .dropdown-content {
        display: inline-block;
        position: relative;
        .dropdown-display {
            text-decoration: none;
            color: @jblue;
            transition: color .2s linear;
            &:hover {
                cursor: pointer;
                color: @jbluelight;
            }
        }
        .dropdown-enter-active {
            /*transition: all 0.1s cubic-bezier(1, 0.02, 1, 1);*/
            animation: enter .1s linear;
        }
        .dropdown-leave-active {
            animation: leave .1s linear;
        }
        .dropdown-enter, .dropdown-leave-active {
            opacity: 0;
            transform: scaleY(0.8);

        }
        @keyframes enter {
            0% {
                opacity: 0;
                transform: scaleY(0.95);
            }
            20% {
                opacity: 0.6;
                transform: scaleY(0.95);
            }
            100% {
                opacity: 1;
                transform: scaleY(1);
            }
        }
        @keyframes leave {
            0% {
                opacity: 1;
                transform: scaleY(1);
            }
            20% {
                opacity: 0.6;
                transform: scaleY(0.95);
            }
            100% {
                opacity: 0;
                transform: scaleY(0.95);
            }
        }
        .dropdownlist {
            transform-origin: 50% 0;
            position: absolute;
            top: 100%;
            border-radius: 4px;
            padding: 0;
            margin-top: 5px;
            box-shadow: 0 1px 6px @whiteshadow;
            white-space: nowrap;
        }
    }
</style>
<style lang="less" rel="stylesheet/less">
    @import '../../mixin/mixin.less';
    .dropdown-content {
        .dropdown-display {
            a {
                text-decoration: none;
                color: @jblue;
                transition: color .2s linear;
                &:hover {
                    color: @jbluelight;
                }
            }
        }
        .dropdownlist {
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li {
                padding: 7px 16px;
                transition: all .5s linear;
                color: @acolor;
                &:hover {
                    background: @dropdownlist-hover;
                    cursor: pointer;
                }
                a {
                    display: block;
                    text-decoration: none;
                    color: @acolor;
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isAppear: false,
                timeHandle: null
            }
        },
        components: {

        },
        computed: {

        },
        methods: {
            overin() {
                if(this.trigger === 'hover') {
                    clearTimeout(this.timeHandle);
                    if(!this.isAppear) {
                        this.isAppear = true;
                    }
                }
            },
            leaveout() {
                if(this.trigger === 'hover') {
                    this.timeHandle = setTimeout(() => {
                        this.isAppear = false;
                    }, 500);
                }
            },
            clickEvent(eve) {
                eve.preventDefault()
                if(this.trigger === 'click') {
                    if(!this.isAppear) {
                        this.isAppear = true;
                    } else {
                        this.isAppear = false;
                    }
                }
            }
        },
        mounted() {
            if(this.trigger === 'click') {
                document.body.addEventListener("click", (event) => {
                    if(this.$el !== event.target && this.$el.contains ? !this.$el.contains(event.target) : !this.$el.compareDocumentPosition(event.target)
 & 16) {
                        this.isAppear = false;
                    }
                }, false)
            }
        },
        props: {
            trigger: {
                type: String,
                default: 'hover'
            },
            overload: {
                type: String
            },
        }
    }
</script>
