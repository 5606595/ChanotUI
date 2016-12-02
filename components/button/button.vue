<style lang="less" type="text/less" rel="stylesheet/less">
    @jblue: #1f90e6;
    @jbluelight: #46a6ea;
    @jblueborder: rgba(30, 152, 229, 0.4);
    @jgrey: #F7F7F7;
    @jdefault: #DADADA;
    .j-btn {
        padding: 6px 16px;
        background: @jgrey;
        border: 1px solid @jdefault;
        border-radius: 4px;
        box-sizing: border-box;
        transition: all .1s linear;
        outline: none;
        font-size: 14px;
        margin: 10px;
        position: relative;
        &:hover {
            cursor: pointer;
            color: @jblue;
            background: none;
            border-color: @jblue;
        }
        &.primary {
            background-color: @jblue;
            border-color: @jblue;
            color: white;
            &:hover {
                background-color: @jbluelight;
                border-color: @jbluelight;
            }
        }
        &.large {
            padding: 8px 20px;
        }
        &.small {
            padding: 4px 12px;
        }
        &[disabled] {
            background-color: @jgrey;
            border-color: @jdefault;
            color: #AAA;
            &:hover {
                border-color: @jdefault;
                background-color: @jgrey;
                cursor: not-allowed;
            }
        }
        &.priclicked {
            background-color: @jblue!important;
        }
        &.clicked {
            &:after {
                content: '';
                left: -1px;
                top: -1px;
                right: -1px;
                bottom: -1px;
                position: absolute;
                border-radius: inherit;
                box-sizing: border-box;
                border: 0px solid @jblueborder;
                margin: 0;
                animation: pray .2s linear forwards;
            }
        }
        &.shape-circle {
            padding: 6px;
            border-radius: 50%;
            &.large {
                padding: 8px;
            }
            &.small {
                padding: 4px;
            }
        }
        /*.btnclick-enter-active {*/
            /*transition: all .2s ease-out;*/
            /*transform: scaleX(1.2) scaleY(1.4)*/
        /*}*/
        /*.btnclick-enter {*/
            /*transform: scale(1);*/
        /*}*/
    }
    @keyframes pray {
        to {
            left: -6px;
            top: -6px;
            right: -6px;
            bottom: -6px;
            border-width: 6px;
            opacity: 0;
        }
    }
</style>
<template>
    <button
        class="j-btn"
        :class="[type, size, 'shape-' + shape]"
        :disabled="disabled"
        @click="clickEvent"
    >
        <!--<transition name="btnclick" v-on:after-enter="enterCancelled">-->
            <!--<p v-if="show" class="clicked"></p>-->
        <!--</transition>-->
        <!--<i v-if="icon" class="jicon" :class="'jicon-' + icon"></i>-->
        <Icon v-if="icon" :type="icon"></Icon>
        <slot></slot>
    </button>
</template>
<script type="text/ecmascript-6">
    import Icon from '../icon/icon.vue'
    export default {
        data() {
            return {}
        },
        components: {
            'Icon': Icon
        },
        methods: {
            clickEvent(event) {
                var dom = event.target;
                if(dom.nodeName.toLowerCase() !== 'button') {
                    dom = dom.parentNode;
                }
                if(this.type === 'primary') {
                    dom.classList.add('priclicked')
                    dom.addEventListener("animationend", () => {
                        dom.classList.remove("clicked");
                        dom.classList.remove('priclicked')
                    }, false);
                } else {
                    dom.addEventListener("animationend", () => {
                        dom.classList.remove("clicked");
                    }, false);
                }
                dom.classList.add("clicked")
//                console.log(this.type)
//                this.show = true;
            },
//            enterCancelled() {
//                this.show = false;
//            }
        },
        props: {
            type: String,
            disabled: Boolean,
            size: String,
            show: Boolean,
            icon: String,
            shape: String
        },
        computed: {},
    }
</script>
